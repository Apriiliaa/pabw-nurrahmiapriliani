const profil = {
    nama : "Aprilia",
    peran : "Mahasiswa Informatika",
    keahlian : ["HTML", "CSS", "JavaScript"]
};

let jumlahKomik = 3;

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

const ALAMAT ='data/komik.json';

export async function ambilDataKomik() {
    const respons = await fetch(ALAMAT);
    console.log('status :', respons.status, 'ok :', respons.ok);

    if (!respons.ok) {
        throw new Error('Status ' + respons.status);
    }

    return respons.json();
}