import { reactive } from 'vue';

const KUNCI = 'pabw-p11';
const VERSI = 2;

export const state = reactive({         // State sekarang dibungkus dengan reactive()            
    dataKomik: [],                    
    filterAktif: 'semua',
    favorit: [],
    memuat: true,                       // Tambahan dari P10
    galat: ''                           // Tambahan dari P10
});

export function isiKomik(daftar) {     // Fungsi pengubah state (TANPA render())
    state.dataKomik = daftar;
}

export function ubahFilter(nilai) {
    state.filterAktif = nilai;
}

export function tambahFavorit(id) {
    if (state.favorit.includes(id)) return;

    state.favorit = [...state.favorit, id];
    
    simpan(state);                       // Simpan ke LocalStorage setiap kali favorit ditambah
}

// FUNGSI LOCALSTORAGE 

export function simpan(state) {
    const isi = {
        versi: VERSI,
        kategoriAktif: state.kategoriAktif, 
        favorit: state.favorit
    };
    localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
    try {
        const isi = JSON.parse(localStorage.getItem(KUNCI));
        if (!isi || isi.versi !== VERSI) {
            localStorage.removeItem(KUNCI);
            return null;
        }
        return isi;
    } catch {
        localStorage.removeItem(KUNCI);
        return null;
    }
}

export function pulihkan(isi) {
    if (isi) {
        state.kategoriAktif = isi.kategoriAktif || 'semua'; 
        state.favorit = isi.favorit || [];
    }
}

export function aturUlang() {
    localStorage.removeItem(KUNCI);
    state.kategoriAktif = 'semua';
    state.favorit = [];
}