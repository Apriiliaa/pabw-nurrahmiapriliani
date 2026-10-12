import { daftarKomik } from "./app.js";

const formTambah = document.querySelector("#tambah form");
const inputJudul = document.querySelector('#judul');
const inputPengarang = document.querySelector('#pengarang');
const inputGenre = document.querySelector('#genre');
const selectStatus = document.querySelector('#status');
const tbody = document.querySelector("#koleksi tbody"); 

const temaToggle = document.querySelector("#tema");
const labelTema = document.querySelector("label[for='tema']");
const wadahGaleri = document.querySelector(".galeri");
const filterContainer = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong"); 

function buatKartu(komik) {
    const kartu = document.createElement('article');
    kartu.className = 'kartu';

    const gambar = document.createElement('img');
    gambar.src = komik.gambar;
    gambar.alt = `Cover ${komik.judul}`;
    gambar.loading = 'lazy';

    const deskripsi = document.createElement('p');
    deskripsi.className = 'kartu__deskripsi';
    deskripsi.textContent = `Tahun terbit : ${komik.tahun}`; // Spasi sudah diperbaiki

    const kakiKartu = document.createElement('div');
    kakiKartu.className = 'kartu__kaki';

    const judul = document.createElement('figcaption');
    judul.textContent = komik.judul;

    const status = document.createElement('span');
    status.textContent = komik.sudahDibaca ? 'Sudah dibaca' : 'Belum dibaca';

    kakiKartu.append(judul, status);
    kartu.append(gambar, deskripsi, kakiKartu);
    return kartu;
}

function render(dataKomik) {
    wadahGaleri.replaceChildren(); 
    
    if (dataKomik.length === 0) {
        pesanKosong.style.display = 'block';
        return; 
    } 
    
    pesanKosong.style.display = 'none';
    
    dataKomik.forEach((komik) => {
        wadahGaleri.append(buatKartu(komik));
    });
}

render(daftarKomik);

filterContainer.addEventListener('click', (event) => {
    const tombol = event.target.closest('.filter-btn');
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;

    document.querySelectorAll('.filter-btn').forEach((btn) => {
        btn.classList.remove('aktif');
    });
    tombol.classList.add('aktif');

    const dataTersaring = daftarKomik.filter((komik) => {
        if (kategori === "semua") return true;
        return komik.status === kategori;
    });

    render(dataTersaring);
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

    // Jika ada yang tidak valid, hentikan proses
    if (!formValid) return;

    // Jika valid, tambahkan ke tabel
    const barisBaru = document.createElement("tr");
    barisBaru.innerHTML = `
        <th scope="row">${judulBaru}</th>
        <td>${pengarangBaru}</td>
        <td>${genreBaru}</td>
        <td>${statusBaru}</td>
    `;
    tbody.appendChild(barisBaru);

    formTambah.reset();
    console.log(`Komik "${judulBaru}" berhasil ditambahkan!`);
});

temaToggle.addEventListener('change', function() {
    if (temaToggle.checked) {
        labelTema.textContent = 'Tema terang';
    } else {
        labelTema.textContent = 'Tema gelap';
    }
});