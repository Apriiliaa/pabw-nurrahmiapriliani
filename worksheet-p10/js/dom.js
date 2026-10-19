const temaToggle = document.querySelector("#tema");
const labelTema = document.querySelector("label[for='tema']");
const wadahGaleri = document.querySelector(".galeri");
const filterContainer = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");

const formTambah = document.querySelector("#tambah form");
const inputJudul = document.querySelector('#judul');
const inputPengarang = document.querySelector('#pengarang');
const inputGenre = document.querySelector('#genre');
const selectStatus = document.querySelector('#status');
const tbody = document.querySelector("#koleksi tbody"); 

// Variabel penampung data dari JSON
// let dataKomik = [];

function buatKartu(komik) {
    const kartu = document.createElement('article');
    kartu.className = 'kartu';

     // Gambar
    const gambar = document.createElement('img');
    gambar.src = komik.gambar;
    gambar.alt = `Cover ${komik.judul}`;
    gambar.loading = 'lazy';

    // Judul
    const judul = document.createElement('figcaption');
    judul.className = 'kartu__judul';
    judul.textContent = komik.judul;

    // Tahun Terbit
    const tahun = document.createElement('p');
    tahun.className = 'kartu__tahun';
    tahun.textContent = `Tahun terbit : ${komik.tahun}`;

    // Sinopsis
    const sinopsis = document.createElement('p');
    sinopsis.className = 'kartu__sinopsis';
    sinopsis.textContent = komik.sinopsis; // Mengambil dari JSON

    // Status
    const status = document.createElement('span');
    status.className = 'kartu__status';
    status.textContent = komik.status;

    // Kaki Kartu (hanya untuk status)
    const kakiKartu = document.createElement('div');
    kakiKartu.className = 'kartu__kaki';
    kakiKartu.append(status);


    kartu.append(gambar, judul, tahun, sinopsis, kakiKartu);
    return kartu;
}

export function render(dataKomik) {
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

export function pasangFilter(data) {
    filterContainer.addEventListener('click', (event) => {
        const tombol = event.target.closest('.filter-btn');
        if (!tombol) return;

        const kategori = tombol.dataset.kategori;

        document.querySelectorAll('.filter-btn').forEach((btn) => {
            btn.classList.remove('aktif');
        });
        
        tombol.classList.add('aktif');

        const dataTersaring = data.filter((komik) => {
            if (kategori === "semua") return true;
            return komik.status === kategori;
        });
        
        render(dataTersaring);
    });
}

formTambah.addEventListener("submit", function(event) {
    event.preventDefault();

    
    const judulBaru = inputJudul.value.trim();
    const pengarangBaru = inputPengarang.value.trim();
    const genreBaru = inputGenre.value.trim();
    const statusBaru = selectStatus.value;

    // Event Tambah Komik
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

// Event Tema
temaToggle.addEventListener('change', function() {
    if (temaToggle.checked) {
        labelTema.textContent = 'Tema terang';
    } else {
        labelTema.textContent = 'Tema gelap';
    }
});