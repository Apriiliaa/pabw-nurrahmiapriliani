import { profil, buatPerkenalan, formatKeahlian, kalimat } from './data.js';
import { ambilDataKomik } from './api.js';
import { render, pasangFilter, aturMemuat, tampilkanGalat } from './dom.js';

console.log(kalimat);
console.log(typeof jumlahKomik);
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
console.table(profil.keahlian);

async function muat() {
    aturMemuat(true);
    tampilkanGalat("");

    try {
        const data = await ambilDataKomik();

        pasangFilter(data);
        render(data);
        
    } catch (galat) {
        console.error(galat.message);
        tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.');
    } finally {
        aturMemuat(false);
    }
}

muat();