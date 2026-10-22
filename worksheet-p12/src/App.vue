<script setup>
import { ref, onMounted, watch } from 'vue';
import { profil } from './data.js';
import { state, simpan, muat, pulihkan, isiKomik } from './state.js';
import { ambilDataKomik } from './api.js';
import KepalaProfil from './components/KepalaProfil.vue';
import DaftarKomik from './components/DaftarKomik.vue'; 

const isTemaBiru = ref(false);
const isTemaPink = ref(false);

function toggleTema() {
  isTemaBiru.value = !isTemaBiru.value;
  document.documentElement.classList.toggle('tema-gelap-aktif', isTemaBiru.value); 
}

onMounted(async () => {
  pulihkan(muat());

  try {
    isiKomik(await ambilDataKomik());
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.';
  } finally {
    state.memuat = false;
  }
});

watch(state, (nilai) => simpan(nilai), { deep: true });
</script>

<template>
  <div id="muat" hidden>Memuat daftar komik...</div>
  <p id="pesan" hidden></p>

  <div class="page">
    <header>
      <div class="tombol-tema-wrapper">
        <!-- Tema Biru -->
        <input type="checkbox" id="tema" class="pengalih-tema" v-model="isTemaBiru">
        <label for="tema" class="tombol-tema">{{ isTemaBiru ? 'Tema gelap' : 'Tema biru' }}</label>
        
        <!-- Tema Pink -->
        <input type="checkbox" id="tema-pink" class="pengalih-tema" v-model="isTemaPink">
        <label for="tema-pink" class="tombol-tema tombol-pink">{{ isTemaPink ? 'Tema terang' : 'Tema pink' }}</label>
      </div>

      <KepalaProfil :profil="profil" />
   </header>

 <main class="isi">
   <aside class="sidebar">
        <h2>Menu Cepat</h2>
        <p>Area sidebar untuk tautan cepat ke bagian-bagian penting dari halaman web ini.</p>
   </aside>
        
   <section id="koleksi">
        <h2>Koleksi Komik Favorit</h2>

        <div id="filter">
            <button class="filter-btn" :class="{ aktif: state.filterAktif === 'semua' }" @click="state.filterAktif = 'semua'">Semua</button>
            <button class="filter-btn" :class="{ aktif: state.filterAktif === 'On Going' }" @click="state.filterAktif = 'On Going'">On Going</button>
            <button class="filter-btn" :class="{ aktif: state.filterAktif === 'Hiatus' }" @click="state.filterAktif = 'Hiatus'">Hiatus</button>
            <button class="filter-btn" :class="{ aktif: state.filterAktif === 'End' }" @click="state.filterAktif = 'End'">End</button>
        </div>

        <DaftarKomik />

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
          <p>Hai, saya Aprilia. Suka membaca komik terutama komik bergenre fantasi, thriller, aksi, kerajaan, komedi, dan romansa. Halaman web ini dibuat untuk mendokumentasikan berbagai komik favorit yang saya baca.</p>
   </section>
   </main>

   <footer>
      <p>Nama: Nur Rahmi Apriliani | NIM: 25523233 | Tahun: 2026</p>
   </footer>
  </div>
</template>