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