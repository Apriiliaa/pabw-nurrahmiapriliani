const profil = {
    nama : "Aprilia",
    peran : "Mahasiswa Informatika",
    keahlian : ["HTML", "CSS", "JavaScript"]
};

let jumlahKomik = 3;

export const daftarKomik = [
    { judul : "I Wanna Be U", tahun : 2020, sudahDibaca : true, gambar : "komik1.jpeg", status : "On Going" },
    { judul : "Rumor Has It", tahun : 2019, sudahDibaca : true, gambar : "komik2.jpeg", status : "End" },
    { judul : "From Dreams to Freedom", tahun : 2022, sudahDibaca : true, gambar : "komik3.jpeg", status : "End" },
    { judul : "Change", tahun : 2017, sudahDibaca : true, gambar : "komik4.jpeg", status : "End" },
    { judul : "Wendy the Florist", tahun : 2019, sudahDibaca : true, gambar : "komik5.jpeg", status : "End" },
    { judul : "Wonderwall", tahun : 2016, sudahDibaca : true, gambar : "komik6.jpeg", status : "End" },
    { judul : "Garden of the Dead Flowers", tahun : 2020, sudahDibaca : true, gambar : "komik7.jpeg", status : "End" },
    { judul : "The Secret of Angel", tahun : 2018, sudahDibaca : true, gambar : "komik8.jpeg", status : "End" },
    { judul : "Trash Belongs in the Trash Can!", tahun : 2022, sudahDibaca : true, gambar : "komik9.jpeg", status : "End" },
    { judul : "Killer Peter", tahun : 2023, sudahDibaca : true, gambar : "komik10.jpeg", status : "On Going" }
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