const profil = {
    nama : "Aprilia",
    peran : "Mahasiswa Informatika",
    keahlian : ["HTML", "CSS", "JavaScript"]
};

let jumlahProyek = 3;

const kalimat = `${profil.nama} adalah seorang ${profil.peran} yang menguasai ${profil.keahlian.length} keahlian.`;
console.log(kalimat);
console.log(typeof jumlahProyek);

const buatPerkenalan = ({nama, peran }) => {
    return `${nama} adalah seorang ${peran}.`;
};

const formatKeahlian = (daftar) => {
    return daftar.join(", ");
};

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));