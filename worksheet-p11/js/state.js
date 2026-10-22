import { render } from './dom.js';

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

    render(state);
}