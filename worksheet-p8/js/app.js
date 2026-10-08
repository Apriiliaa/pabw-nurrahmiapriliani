const profil = {
    nama : "Aprilia",
    peran : "Mahasiswa Informatika",
    keahlian : ["HTML", "CSS", "JavaScript"]
};

let jumlahKomik = 3;

const daftarKomik = [
    { judul : "I Wanna Be U", tahun : 2020, sudahDibaca : true },
    { judul : "Rumor Has It", tahun : 2019, sudahDibaca : true },
    { judul : "From Dreams to Freedom", tahun : 2022, sudahDibaca : true }
];

const buatPerkenalan = ({nama, peran }) => {
    return `${nama} adalah seorang ${peran}.`;
};

const formatKeahlian = (daftar) => {
    return daftar.join(", ");
};

const kalimat = `${profil.nama} adalah seorang ${profil.peran} yang menguasai ${profil.keahlian.length} keahlian.`;

console.log(kalimat);
console.log(typeof jumlahKomik);

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

console.table(profil.keahlian);
console.table(daftarKomik);

const komikSudahDibaca = daftarKomik.filter(komik => komik.sudahDibaca === true);
console.table(komikSudahDibaca);

const carikomik = daftarKomik.find(komik => komik.judul === "I Wanna Be U");
console.log(carikomik);
