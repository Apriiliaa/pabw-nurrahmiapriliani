import { saring } from './data.js';

const wadahGaleri = document.querySelector(".galeri");
const pesanKosong = document.querySelector("#pesan-kosong");

function buatKartu(komik, favorit) {
    const kartu = document.createElement('article');
    kartu.className = 'kartu';

    const gambar = document.createElement('img');
    gambar.src = komik.gambar;
    gambar.alt = `Cover ${komik.judul}`;
    gambar.loading = 'lazy';

    const judul = document.createElement('figcaption');
    judul.className = 'kartu__judul';
    judul.textContent = komik.judul;

    const tahun = document.createElement('p');
    tahun.className = 'kartu__tahun';
    tahun.textContent = `Tahun terbit : ${komik.tahun}`;

    const sinopsis = document.createElement('p');
    sinopsis.className = 'kartu__sinopsis';
    sinopsis.textContent = komik.sinopsis; 

    const status = document.createElement('span');
    status.className = 'kartu__status';
    status.textContent = komik.status;

    const tombol = document.createElement('button');
    tombol.className = 'favorit';
    tombol.dataset.id = komik.id;
    tombol.textContent = favorit.includes(komik.id) ? "★" : "☆";

    const kakiKartu = document.createElement('div');
    kakiKartu.className = 'kartu__kaki';
    kakiKartu.append(status, tombol);

    kartu.append(gambar, judul, tahun, sinopsis, kakiKartu);
    return kartu;
}

export function render(state) {
    wadahGaleri.replaceChildren();

    const dataTampil = saring(state.dataKomik, state.filterAktif);

    if (dataTampil.length === 0) {
        pesanKosong.style.display = 'block';
        return
    }

    pesanKosong.style.display = 'none';

    dataTampil.forEach((komik) => {
        wadahGaleri.append(buatKartu(komik, state.favorit));
    });
}

export function aturMemuat(aktif) {
    const elemenMuat = document.getElementById('muat');
    if (elemenMuat) elemenMuat.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
    const elemenPesan = document.getElementById('pesan');
    if (elemenPesan) {
        elemenPesan.textContent = pesan;
        elemenPesan.hidden = false;
    }
}

export function updateTombolFilter(kategori) {
    document.querySelectorAll('.filter-btn').forEach((btn) => {
        btn.classList.remove('aktif');
        if (btn.dataset.kategori === kategori) {
            btn.classList.add('aktif');
        }
    });
}

export function updateLabelTema(isDark) {
    const labelTema = document.querySelector("label[for='tema']");
    if (labelTema) {
        labelTema.textContent = isDark ? 'Tema terang' : 'Tema gelap';
    }
}

export function tambahBarisTabel(judul, pengarang, genre, status) {
    const tbody = document.querySelector("#koleksi tbody"); 
    const barisBaru = document.createElement("tr");
    barisBaru.innerHTML = `
        <th scope="row">${judul}</th>
        <td>${pengarang}</td>
        <td>${genre}</td>
        <td>${status}</td>
    `;
    tbody.appendChild(barisBaru);
}