const ALAMAT = 'https://raw.githubusercontent.com/Apriiliaa/pabw-nurrahmiapriliani/refs/heads/main/worksheet-p10/data/komik.json';

export async function ambilDataKomik() {
    const respons = await fetch(ALAMAT);
    
    if (!respons.ok) {
        throw new Error('Status ' + respons.status);
    }
    
    return respons.json();
}

// P12 — build produksi berhasil