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


## Pertemuan 11 — Modul, State, dan Penyimpanan Klien

Pada pertemuan ini, fokus utama proyek adalah merombak kode yang tadinya menumpuk menjadi struktur modular (satu berkas, satu tanggung jawab) dan memindahkan "keadaan" (state) dari DOM ke dalam objek JavaScript. Selain itu, mulai menggunakan `localStorage` agar halaman web bisa mengingat pilihan pengguna meskipun halaman di refresh atau tab ditutup.

### Implementasi yang dilakukan:
- Pemecahan Modul (Modularisasi): Kode dipecah menjadi lima modul wajib (`data.js`, `state.js`, `dom.js`, `events.js`, dan `app.js`). `api.js` dari Pertemuan 10 tetap dipertahankan. Hal ini membuat `app.js` menjadi sangat bersih karena hanya bertugas merakit (import dan memanggil fungsi).
- Manajemen State (State Management): Data seperti `dataKomik`, `filterAktif`, dan `favorit` dipindahkan ke dalam objek `state` di `state.js`. Tampilan (DOM) kini hanya menggambar ulang berdasarkan apa yang ada di dalam `state`, bukan menyimpan data di dalam elemen HTML. 
- Tombol Favorit: Menambahkan tombol bintang (★/☆) pada setiap kartu komik. Data bintang ini disimpan dalam array `favorit` di dalam state.
- Penyimpanan Pengguna (LocalStorage): Membuat fungsi `simpan()` dan `muat()` di `state.js`. Setiap kali filter diganti atau bintang diklik, data akan diubah menjadi teks (JSON) dan disimpan di browser. Saat halaman dimuat ulang, data akan dibaca kembali.
- Penanganan Simpanan Rusak: Menambahkan pengecekan `versi` pada fungsi `muat()`. Jika data di LocalStorage kosong, rusak (bukan JSON), atau versinya berbeda, data tersebut akan dihapus dan web akan menggunakan nilai bawaan agar tidak crash.
- Tombol Atur Ulang: Menambahkan tombol untuk membersihkan LocalStorage dan mengembalikan halaman ke keadaan awal.

## Catatan penggunaan AI
Saya mengerjakan sendiri proses pemecahan logika ke dalam lima file terpisah, memindahkan event listener ke `events.js`, dan menulis fungsi penyimpanan `localStorage`. AI saya gunakan sebagai pendamping belajar untuk:
1. Memahami konsep "Single Responsibility Principle" (satu berkas satu tugas) dalam modularisasi JavaScript dan bagaimana cara kerja `import`/`export`.
2. Memahami konsep State Management (mengapa data harus keluar dari DOM agar tidak hilang saat fungsi `render()` dijalankan).
3. Memecahkan masalah (debugging) saat terjadi error `constisi is not defined` (kurang spasi) dan `muatState is not defined`.
4. Memahami alur logika `try/catch` pada fungsi `muat()`, terutama mengapa perintah `return` yang diletakkan di baris paling atas membuat kode pengecekan versi di bawahnya tidak akan pernah tereksekusi.
5. Memahami cara kerja `JSON.stringify` dan `JSON.parse` untuk menyimpan objek ke dalam LocalStorage.

Saya mengetik ulang, menguji di Console (memastikan tidak ada error), dan memverifikasi setiap baris kode yang disarankan AI agar saya memahami alur dari state, render, hingga penyimpanan lokal.


## Pertemuan 12 — Build Tooling, npm, dan Framework SPA (Vue.js)

Pada pertemuan ini, terjadi perubahan besar dalam cara pengembangan aplikasi. Beralih dari JavaScript murni (Vanilla JS) ke dalam sebuah Framework modern, yaitu Vue.js, dengan bantuan Build Tool Vite. Fokus utamanya adalah membangun aplikasi berbasis komponen (Single Page Application) dan mempelajari cara mengemas (build) aplikasi agar siap dirilis ke internet.

### Implementasi yang dilakukan:
- Inisialisasi Proyek Vite & Vue: Membuat proyek baru di folder `worksheet-p12` menggunakan perintah `npm create vite@latest`. 
- Migrasi Aset P11: Memindahkan semua aset lama tanpa mengubah perilakunya. File CSS dipindah ke `src/`, file JSON dan gambar dipindah ke `public/`, dan struktur HTML dari `profil.html` dipindah ke `App.vue`.
- Pemecahan Komponen (Component-Based): Halaman yang tadinya menumpuk di satu file dipecah menjadi komponen kecil. Membuat `KepalaProfil.vue` yang menerima data (`props`) dari `App.vue`, serta `DaftarKomik.vue` untuk merender daftar kartu komik.
- Reaktivitas Vue: Menggantikan fungsi `render(state)` manual dari P11 dengan sistem reaktivitas Vue menggunakan `reactive()`. Tampilan kini otomatis berubah saat data di dalam state berubah.
- Siklus Hidup Vue (Lifecycle Hooks): Menggunakan `onMounted` untuk mengambil data dari API (GitHub Raw) saat halaman pertama kali dimuat, dan `watch` untuk memantau setiap perubahan state agar otomatis tersimpan ke `localStorage`.
- Build Produksi: Menjalankan `npm run build` untuk mengemas kode menjadi satu folder `dist` yang ringan (di minify). Menguji hasilnya menggunakan `npm run preview`.

## Catatan penggunaan AI
Saya mengerjakan sendiri sebagian besar struktur Vue, mulai dari memindahkan aset ke folder `src/` dan `public/`, memecah komponen, menulis `props`, hingga menggunakan `reactive` dan `watch`. AI saya gunakan sebagai pendamping belajar untuk:
1. Memahami perbedaan struktur folder Vanilla JS dengan Vue (mengapa aset statis masuk ke `public/` sedangkan CSS masuk ke `src/`).
2. Memecahkan masalah (debugging) saat konfigurasi PowerShell menolak perintah `npm`, serta memperbaiki file gambar yang rusak (0 bytes) di folder `public/`.
3. Memahami alur reaktivitas Vue (mengapa `render()` tidak lagi dipakai dan bagaimana `v-for` serta `v-model` bekerja).
4. Memahami konsep props (mengirim data dari induk ke anak) dan `computed` untuk memfilter data secara otomatis.
5. Memahami perbedaan antara `npm run dev` (pengembangan) dan `npm run build` / `npm run preview` (produksi).

Saya mengetik ulang, memverifikasi setiap baris kode, dan memastikan tidak ada error di Console browser.

### Catatan Versi dan Build
- Versi Node.js: `v24.22.1`
- Versi npm: `11.19.1` 
- Ukuran Build: Sebelum build (`4.0 MB` / 31 file), Sesudah build (`2.5 MB` / 15 file).