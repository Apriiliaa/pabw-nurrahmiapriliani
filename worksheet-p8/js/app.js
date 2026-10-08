const profil = {
    nama : "Aprilia",
    peran : "Mahasiswa Informatika",
    keahlian : ["HTML", "CSS", "JavaScript"]
};

let jumlahProyek = 3;

const daftarProyek = [
    { judul : "Halaman Profil", tahun : 2026, selesai : true },
    { judul : "Katalog Produk", tahun : 2026, selesai : false },
];

const buatPerkenalan = ({nama, peran }) => {
    return `${nama} adalah seorang ${peran}.`;
};

const formatKeahlian = (daftar) => {
    return daftar.join(", ");
};

const kalimat = `${profil.nama} adalah seorang ${profil.peran} yang menguasai ${profil.keahlian.length} keahlian.`;
console.log(kalimat);
console.log(typeof jumlahProyek);

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter(proyek => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find(proyek => proyek.judul === "Katalog Produk");
console.log(katalog);