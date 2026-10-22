import { render } from './dom.js';

const KUNCI = 'pabw-p11';
const VERSI = 2;

export const state = {
    dataKomik: [],   
    filterAktif: 'semua',
    favorit: []
};

export function isiProyek(daftar) {
    state.dataKomik = daftar;
    render(state);
}

export function ubahFilter(kategori) {
    state.filterAktif = kategori;
    render(state);
}

export function tambahFavorit(id) {
    if (state.favorit.includes(id)) return;

    state.favorit = [...state.favorit, id];

    simpan(state);

    render(state);
}

export function simpan(state) {
    const isi = {
        versi: VERSI,
        filterAktif: state.filterAktif,
        favorit:state.favorit
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
        state.filterAktif = isi.filterAktif || 'semua';
        state.favorit = isi.favorit || [];
    }
}

export function aturUlang() {
    localStorage.removeItem(KUNCI);
    state.filterAktif = 'semua';
    state.favorit = [];
    render(state);
}