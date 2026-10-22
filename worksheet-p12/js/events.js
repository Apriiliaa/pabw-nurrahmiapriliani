import { tambahFavorit, ubahFilter, aturUlang } from './state.js';
import { updateTombolFilter, updateLabelTema, tambahBarisTabel } from './dom.js';

export function pasangSemuaEvent() {
    const filterContainer = document.querySelector("#filter");
    const formTambah = document.querySelector("#tambah form");
    const inputJudul = document.querySelector('#judul');
    const inputPengarang = document.querySelector('#pengarang');
    const inputGenre = document.querySelector('#genre');
    const selectStatus = document.querySelector('#status');
    const temaToggle = document.querySelector("#tema");
    const wadahGaleri = document.querySelector(".galeri")       // mendeteksi klik tombol bintang
    const btnAturUlang = document.getElementById('atur-ulang');
    if (btnAturUlang) {
        btnAturUlang.addEventListener('click', () => {
            aturUlang();
        });
    }

    filterContainer.addEventListener('click', (event) => {
        const tombol = event.target.closest('.filter-btn');
        if (!tombol) return;
        const kategori = tombol.dataset.kategori;
        ubahFilter(kategori);         
        updateTombolFilter(kategori); 
    });

    wadahGaleri.addEventListener('click', (event) => {
        const tombolFavorit = event.target.closest('.favorit');
        if (!tombolFavorit) return;
        tambahFavorit(Number(tombolFavorit.dataset.id));
    });

    formTambah.addEventListener("submit", function(event) {
        event.preventDefault();
        const judulBaru = inputJudul.value.trim();
        const pengarangBaru = inputPengarang.value.trim();
        const genreBaru = inputGenre.value.trim();
        const statusBaru = selectStatus.value;

        let formValid = true;

        // Validasi Judul
        if (judulBaru === "") {
            inputJudul.setAttribute('aria-invalid', 'true');
            inputJudul.focus(); 
            formValid = false;
        } else {
            inputJudul.removeAttribute('aria-invalid');
        }

        // Validasi Pengarang
        if (pengarangBaru === "") {
            inputPengarang.setAttribute('aria-invalid', 'true');
            inputPengarang.focus();
            formValid = false;
        } else {
            inputPengarang.removeAttribute('aria-invalid');
        }

        // Validasi Genre
        if (genreBaru === "") {
            inputGenre.setAttribute('aria-invalid', 'true');
            inputGenre.focus();
            formValid = false;
        } else {
            inputGenre.removeAttribute('aria-invalid');
        }

        if (!formValid) return;

        tambahBarisTabel(judulBaru, pengarangBaru, genreBaru, statusBaru);
        
        formTambah.reset();
        console.log(`Komik "${judulBaru}" berhasil ditambahkan!`);
    });

    temaToggle.addEventListener('change', function() {
        updateLabelTema(temaToggle.checked);
    });
}