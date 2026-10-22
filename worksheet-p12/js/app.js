import { profil, buatPerkenalan, formatKeahlian, kalimat, jumlahKomik } from './data.js';
import { ambilDataKomik } from './api.js';
import { state, isiProyek, pulihkan, muat as muatState } from './state.js';
import { aturMemuat, tampilkanGalat } from './dom.js';
import { pasangSemuaEvent } from './events.js';

console.log(kalimat);
console.log(typeof jumlahKomik);
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
console.table(profil.keahlian);

window.state = state;

async function mulai() {
    pulihkan(muatState());

    pasangSemuaEvent();
    aturMemuat(true);
    tampilkanGalat("");

    try {
        const data = await ambilDataKomik();
        isiProyek(data);
    } catch (galat) {
        console.error(galat.message);
        tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.');
    } finally {
        aturMemuat(false);
    }
}

mulai();