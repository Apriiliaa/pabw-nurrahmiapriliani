export const profil = {
    nama : "Aprilia",
    peran : "Mahasiswa Informatika",
    keahlian : ["HTML", "CSS", "JavaScript"]
};

export let jumlahKomik = 3;

export const buatPerkenalan = ({nama, peran }) => {
    return `${nama} adalah seorang ${peran}.`;
};

export const formatKeahlian = (daftar) => {
    return daftar.join(", ");
};

export const kalimat = `${profil.nama} adalah seorang ${profil.peran} yang menguasai ${profil.keahlian.length} keahlian.`;

export function saring(daftar, kategori) {
    if (kategori === "semua") return daftar;
    return daftar.filter((komik) => komik.status === kategori);
}