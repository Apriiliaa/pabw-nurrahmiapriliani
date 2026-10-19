import { render } from './dom.js';

export const state = {
    dataKomik: [],   
    filterAktif: 'semua'
};

export function isiProyek(daftar) {
    state.dataKomik = daftar;
    render(state.dataKomik);
}

export function ubahFilter(kategori) {
    state.filterAktif = kategori;
    const dataTersaring = state.dataKomik.filter((komik) => {
        if (kategori === "semua") return true;
        return komik.status === kategori;
    });
    render(dataTersaring);
}