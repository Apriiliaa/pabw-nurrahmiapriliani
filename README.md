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

Saya mengetik ulang dan memverifikasi setiap baris kode yang disarankan AI agar saya memahami cara kerjanya.

## Pertemuan 9 — DOM, Event, dan Interaktivitas
Pada pertemuan ini, halaman web yang sebelumnya statis (hanya menampilkan HTML) mulai dihidupkan menggunakan JavaScript. Fokus utamanya adalah memanipulasi DOM (Document Object Model), menangani event (interaksi pengguna), serta memvalidasi form sebelum data dikirim.

### Implementasi yang dilakukan:
- Pemilihan Elemen (DOM Selection): Mengambil elemen HTML menggunakan `document.querySelector` dan `document.querySelectorAll`, lalu menyimpannya ke dalam variabel.
- Render Data Dinamis: Mengubah array `daftarKomik` dari `app.js` menjadi kartu-kartu HTML di halaman menggunakan `document.createElement`, `textContent`, dan `append`. Wadah galeri dikosongkan terlebih dahulu dengan `replaceChildren()` setiap kali render ulang agar kartu tidak berlipat ganda.
- Event Delegation: Memasang satu pendengar event (`addEventListener`) pada induk tombol filter, lalu menggunakan `event.target.closest('.filter-btn')` untuk melayani semua tombol. Ini membuat kode lebih hemat memori dan rapi.
- Validasi Form: Mencegah halaman dimuat ulang saat form disubmit (`event.preventDefault()`). Validasi dilakukan dengan `.trim()` untuk mengecek isi kolom, lalu menampilkan pesan galat dan mengubah border menjadi merah menggunakan atribut `aria-invalid`.
- Debugging (Pemecahan Masalah): 
  - Memperbaiki error CORS dan `type="module"` saat menyambungkan `dom.js`.
  - Memperbaiki error 404 pada gambar dengan menyesuaikan path relatif (menghapus `../`).
  - Memperbaiki pesan "Belum ada komik" yang hilang karena ikut terhapus oleh fungsi `replaceChildren()`.
  - Menghapus tanda koma yang salah pada selector CSS validasi form.

## Catatan penggunaan AI
Saya mengerjakan sendiri logika utama, pengetikan kode, dan penyesuaian tampilan di `dom.js` dan `komponen.css`. AI saya gunakan sebagai pendamping belajar untuk:
1. Memahami cara kerja `type="module"` dan mengapa terjadi error CORS saat membuka file HTML secara langsung.
2. Memahami konsep Event Delegation (mengapa pendengar ditaruh di induk, bukan di setiap tombol).
3. Memecahkan masalah (debugging) saat gambar tidak muncul (404), memahami perbedaan `querySelector` dan `querySelectorAll`, serta cara mengatasi pesan kosong yang hilang karena fungsi `replaceChildren()`.
4. Memahami sintaks validasi form seperti `.trim()`, `aria-invalid`, dan `focus()`.

Saya mengetik ulang, menguji di Console, dan memverifikasi setiap baris kode yang disarankan AI agar saya memahami alur kerjanya.


## Pertemuan 10 — Data dari Jaringan, Pemisahan Lapisan, dan Pembacaan JSON

Pada pertemuan ini, fokus utama proyek adalah memindahkan data komik yang sebelumnya ada di dalam (`app.js`) menjadi file eksternal berformat JSON (`komik.json`). Selain itu, struktur kode dirapikan dengan menerapkan prinsip pemisahan tugas (Separation of Concerns) ke dalam tiga berkas yang berbeda.

### Implementasi yang dilakukan:
- Pembacaan JSON (Fetch API): Data statis dipindahkan ke `data/komik.json`. Data ini diambil secara asinkronus menggunakan fungsi `fetch` yang dibungkus dengan `async/await`.
- Pemisahan Tiga Berkas : 
  - `api.js`: Bertugas khusus untuk mengambil data (fetch) dari file JSON atau URL GitHub Raw.
  - `dom.js`: Bertugas khusus untuk memanipulasi DOM (membuat kartu, merender, memasang filter, dan menampilkan pesan galat).
  - `app.js`: Menjadi "otak" atau perakit yang mengimpor fungsi dari `api.js` dan `dom.js`, lalu menjalankan alur program.
- Penanganan Galat (Error Handling): Menggunakan blok `try/catch/finally` pada fungsi `muat()` di `app.js`. Jika jaringan mati atau file tidak ditemukan (404), program akan menampilkan pesan galat yang ramah pengguna, bukan layar kosong. Blok `finally` memastikan status loading selalu dimatikan.
- Pengambilan Data dari Internet (GitHub Raw): Setelah data berhasil dibaca dari lokal, alamat fetch di `api.js` diubah untuk mengambil data langsung dari URL *Raw* GitHub, sehingga web dapat menampilkan data secara *live* dari internet.

## Catatan penggunaan AI
Saya mengerjakan sendiri pemisahan logika ke dalam tiga berkas (`api.js`, `app.js`, `dom.js`) dan penyesuaian kode render di `dom.js`. AI saya gunakan sebagai pendamping belajar untuk:
1. Memahami konsep "Circular Dependency" (ketergantungan berputar) dan mengapa `dom.js` tidak boleh mengimpor `app.js`.
2. Memahami perilaku `fetch` yang tidak melempar error pada status 404, sehingga perlu pengecekan `respons.ok` secara manual.
3. Memecahkan masalah (debugging) terkait *caching* browser yang membuat perubahan kode tidak muncul, serta mengatasi error 404 pada path gambar dan URL GitHub Raw.
4. Memahami sintaks penanganan error menggunakan `try/catch/finally` dan penggunaan `throw new Error()`.

Saya mengetik ulang, menguji di Console, dan memverifikasi setiap baris kode yang disarankan AI agar saya memahami perbedaan tugas antara mengambil data, merakit program, dan menggambar elemen ke layar.