<script setup>
import { ref } from 'vue';

const isTemaGelap = ref(false);

function toggleTema() {
  isTemaGelap.value = !isTemaGelap.value;
  document.documentElement.classList.toggle('tema-gelap-aktif', isTemaGelap.value); // Opsional, sesuaikan dengan css-mu
}
</script>

<template>
  <div id="muat" hidden>Memuat daftar komik...</div>
  <p id="pesan" hidden></p>

  <div class="page">
    <header>
      <div class="tombol-tema-wrapper">
        <input type="checkbox" id="tema" class="pengalih-tema" v-model="isTemaGelap">
        <label for="tema" class="tombol-tema">{{ isTemaGelap ? 'Tema terang' : 'Tema gelap' }}</label>
        <input type="checkbox" id="tema-pink" class="pengalih-tema">
        <label for="tema-pink" class="tombol-tema tombol-pink">Tema pink</label>
      </div>
     
      <div class="navbar">
        <h1>Daftar Komik Favorit Saya</h1>
        <nav aria-label="Navigasi Utama">
          <ul>
             <li><a href="#koleksi">Koleksi Komik</a></li>
             <li><a href="#tambah">Tambah Komik</a></li>
             <li><a href="#tentang-saya">Tentang Saya</a></li>
          </ul>
       </nav>
      </div>
   </header>

 <main class="isi">
   <aside class="sidebar">
        <h2>Menu Cepat</h2>
        <p>Area sidebar untuk tautan cepat ke bagian-bagian penting dari halaman web ini.</p>
   </aside>
        
   <section id="koleksi">
        <h2>Koleksi Komik Favorit</h2>
      <div class="tabel-wrapper">
        <table>
          <caption>Daftar Koleksi Komik Saya</caption>
          <thead>
            <tr>
              <th scope="col">Judul</th>
              <th scope="col">Pengarang</th>
              <th scope="col">Genre</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">I Wanna Be U</th>
              <td>Sam</td>
              <td>Fantasi, Kerajaan</td>
              <td>On Going</td>
            </tr>
            <!-- Tambahkan baris tabel lainnya jika perlu, atau biarkan kosong untuk diisi Lembar D -->
          </tbody>
        </table>
      </div> 

      <div id="filter">
          <button class="filter-btn aktif" data-kategori="semua">Semua</button>
          <button class="filter-btn" data-kategori="On Going">On Going</button>
          <button class="filter-btn" data-kategori="Hiatus">Hiatus</button>
          <button class="filter-btn" data-kategori="End">End</button>
      </div>

      <p id="pesan-kosong" style="display: none;">Belum ada komik untuk kategori ini.</p>
      <div class="galeri"></div>
   </section>

   <section id="tambah">
        <h2>Tambah Komik Favorit</h2>
        <form action="/simpan" method="post">
             <div class="form-kolom">
                  <label for="judul">Judul Komik:</label>
                  <input type="text" id="judul" name="judul" required>
             </div>
             <div class="form-kolom">
                  <label for="pengarang">Pengarang:</label>
                  <input type="text" id="pengarang" name="pengarang" required>
             </div>
             <div class="form-kolom">
                  <label for="genre">Genre:</label>
                  <input type="text" id="genre" name="genre" required>
             </div>
             <div class="form-kolom">
                  <label for="status">Status:</label>
                  <select id="status" name="status" required>
                       <option value="">Pilih Status</option>
                       <option value="On Going">On Going</option>
                       <option value="Hiatus">Hiatus</option>
                       <option value="Tamat">End</option>
                  </select>
             </div>
            <button type="submit">Simpan</button>
          </form>
    </section>

   <section id="tentang-saya">
          <h2>Tentang Saya</h2>
          <p>Hai, saya Aprilia. Saya suka membaca komik terutama komik bergenre fantasi, thriller, aksi, kerajaan, komedi, dan romansa. Halaman web ini dibuat untuk mendokumentasikan berbagai komik favorit yang saya baca.</p>
   </section>
   </main>

   <footer>
      <p>Nama: Nur Rahmi Apriliani | NIM: 25523233 | Tahun: 2026</p>
   </footer>
  </div>
</template>