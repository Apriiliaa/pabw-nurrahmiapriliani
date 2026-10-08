# PABW — Nur Rahmi Apriliani — 25523233

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web, satu folder untuk setiap pertemuan.

## Pertemuan 3 — Halaman profil saya
Topik halaman saya: Daftar Komik Favorit Saya

- Judul halaman: Daftar Komik Favorit Saya
- Deskripsi: Berisi kumpulan komik favorit saya beserta form untuk menambah komik baru.
- Tautan navigasi: Daftar Komik, Tambah Komik, Tentang
- Dua bagian utama: Koleksi Komik Favorit, Tambah Komik Favorit
- Kolom tabel: Judul, Pengarang, Genre, Status
- Kolom form: Judul, Pengarang, Genre, Status
- Gambar: komik1.jpeg, komik2jpeg, komik3.jpeg

## Catatan penggunaan AI
Bagian struktur HTML, penyesuaian tabel, dan penyusunan form dibantu oleh AI. Saya sendiri yang mengerjakan bagian pemilihan topik, pengisian data komik, dan memastikan tampilannya sesuai dengan tugas.


## Pertemuan 4 — Design token halaman profil
- Berkas gaya yang akan dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #1D4ED8 (Biru), dipilih karena memberikan kesan profesional, modern, dan memiliki kontras yang sangat baik untuk aksesibilitas.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-bg | #F8FAFC | latar halaman |
| --color-fg | #0F172A | warna teks utama |
| --color-surface | #FFFFFF | latar kartu dan panel |
| --color-border | #64748B | garis pemisah dan tepi kotak |
| --color-primary | #1D4ED8 | tombol, tautan, penanda |
| --color-danger | #BE123C | peringatan dan isian tidak sah |
| --color-focus | #DB2777 | garis fokus papan ketik |
| --space-1 | 0.25rem | jarak paling rapat |
| --space-2 | 0.5rem | jarak antar label dan isian |
| --space-3 | 0.75rem | jarak di dalam kartu |
| --space-4 | 1rem | jarak standar antar elemen |
| --space-6 | 1.5rem | jarak antar bagian halaman |
| --radius-md | 0.5rem | sudut membulat pada tombol, kartu, isian |
| --radius-full | 999px | bentuk pil, misalnya lencana |
| --shadow-1 | 0 4px 6px -1px rgba(0,0,0,0.1) | bayangan halus kartu |
| --text-sm | 0.875rem | keterangan dan teks bantu |
| --text-md | 1rem | teks isi |
| --text-xl | 1.5rem | judul bagian |
| --text-3xl | 2.25rem | judul halaman |

Kriteria selesai saya: mengubah --color-primary di satu baris harus mengubah warna tombol, tautan, judul, dan garis fokus.

## Pertemuan 8 — JavaScript Modern ES6+, Struktur Data, dan Array Methods
Pada pertemuan ini, halaman profil yang sebelumnya statis mulai dihubungkan dengan file JavaScript (`app.js`) dan data dipindahkan dari HTML menjadi variabel.

## Catatan penggunaan AI
Saya mengerjakan sendiri sebagian besar logika dan penulisan kode di `app.js`, mulai dari pembuatan variabel `profil`, array `daftarKomik`, hingga pemanggilan fungsi di Console. Pemilihan data komik dan penyesuaian tema halaman juga saya lakukan sendiri.

AI saya gunakan sebagai pendamping belajar untuk:
1. Memahami pesan galat (error) di Console, seperti `ReferenceError` dan `Cannot read properties of null`, serta cara memperbaikinya.
2. Memastikan penulisan sintaks yang benar, seperti penempatan tanda koma pada objek, penggunaan `const` dan `let`, serta penulisan arrow function dan template literal.
3. Memahami cara kerja array methods (`filter`, `find`, `map`) dan kapan harus menggunakannya.

Saya mengetik ulang dan memverifikasi setiap baris kode yang disarankan AI agar saya benar-benar memahami cara kerjanya.