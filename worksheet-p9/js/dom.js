import { daftarKomik } from "./app.js";

const formTambah = document.querySelector("#tambah form");
const inputJudul = document.querySelector('#judul');
const inputPengarang = document.querySelector('#pengarang');
const inputGenre = document.querySelector('#genre');
const selectStatus = document.querySelector('#status');
const tbody = document.querySelector("#koleksi tbody");

const temaToggle = document.querySelector("#tema");
const labelTema = document.querySelector("label[for='tema']");

formTambah.addEventListener("submit", function(event) {
    event.preventDefault();

    const judulBaru = inputJudul.value;
    const pengarangBaru = inputPengarang.value;
    const genreBaru = inputGenre.value;
    const statusBaru = selectStatus.value;

    const barisBaru = document.createElement("tr");

    barisBaru.innerHTML = `
        <th scope="row">${judulBaru}</th>
        <td>${pengarangBaru}</td>
        <td>${genreBaru}</td>
        <td>${statusBaru}</td>
    `;

    tbodyKoleksi.appendChild(barisBaru);

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

const wadahGaleri = document.querySelector(".galeri");

function buatKartu(komik) {
    const kartu = document.createElement('article');
    kartu.className = 'kartu';

    const gambar = document.createElement('img');
    gambar.src = komik.gambar;
    gambar.alt = `Cover ${komik.judul}`;
    gambar.loading = 'lazy';

    const deskripsi = document.createElement('p');
    deskripsi.className = 'kartu__deskripsi';
    deskripsi.textContent = `Tahun terbit: ${komik.tahun}`;

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

wadahGaleri.replaceChildren();
daftarKomik.forEach((komik) => {
    wadahGaleri.append(buatKartu(komik));
});