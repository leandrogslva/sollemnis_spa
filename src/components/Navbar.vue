<template>
  <v-app-bar
    :elevation="scrolled ? 1 : 0"
    :color="scrolled ? 'white' : 'transparent'"
    fixed
    class="px-md-8"
  >
    <v-app-bar-title>
      <a href="#home" class="text-decoration-none text-dark font-serif text-h5 font-weight-bold">
        Sollemnis <span class="text-primary">Spa</span>
      </a>
    </v-app-bar-title>

    <template v-slot:append>
      <div class="d-none d-md-flex align-center ga-4">
        <v-btn
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          variant="text"
          class=" font-weight-medium text-uppercase"
          style="letter-spacing: 0.15em !important;"
        >
          {{ link.name }}
        </v-btn>

        <v-btn icon="mdi-instagram" href="https://www.instagram.com/sollemnis_spa/" target="_blank" variant="text" size="small" color="dark" />
        <v-btn icon="mdi-whatsapp" href="https://wa.me/5511948596834" target="_blank" variant="text" size="small" color="dark" />
      </div>

      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="top" temporary class="d-md-none">
    <v-list>
      <v-list-item
        v-for="link in navLinks"
        :key="link.name"
        :href="link.href"
        @click="drawer = false"
      >
        <v-list-item-title class="font-serif text-h6">{{ link.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const drawer = ref(false);
const scrolled = ref(false);

const navLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Eventos', href: '#events' },
  { name: 'Planos', href: '#plans' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Contato', href: '#contact' },
];

const handleScroll = () => { scrolled.value = window.scrollY > 30; };
onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>