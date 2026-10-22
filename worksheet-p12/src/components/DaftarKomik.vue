<script setup>
import { computed } from 'vue';
import { state, tambahFavorit } from '../state.js';
import { saring } from '../data.js'; 
       
const tampil = computed(() => saring(state.dataKomik, state.filterAktif) || []);
</script>

<template>
  <div>
    <!-- Kondisi Memuat / Gagal / Kosong -->
    <p v-if="state.memuat">Memuat data...</p>                                
    <p v-else-if="state.galat" style="color: red;">{{ state.galat }}</p>
    <p v-else-if="tampil.length === 0">Belum ada data komik.</p>
    
    <div v-else class="galeri">
      <article v-for="komik in tampil" :key="komik.id" class="kartu">

        <!-- Gambar -->
        <img :src="komik.gambar.replace('./', '/')" :alt="komik.judul" />

        <!-- Judul & Info -->
        <figcaption class="kartu__judul">{{ komik.judul }}</figcaption>
        <p class="kartu__tahun">Tahun terbit : {{ komik.tahun }}</p>
        <p class="kartu__sinopsis">{{ komik.sinopsis }}</p>

        <!-- Kaki Kartu (Status & Bintang) -->
        <div class="kartu__kaki">
          <span class="kartu__status">{{ komik.status }}</span>

          <!-- Bintang favorit -->
          <button class="favorit" @click="tambahFavorit(komik.id)">
            {{ state.favorit.includes(komik.id) ? '★' : '☆' }}
          </button>
        </div>
      </article>
    </div>
  </div>
</template>