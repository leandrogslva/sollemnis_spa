<template>
  <!-- ADICIONE O theme="spaTheme" AQUI ABAIXO -->
  <v-app theme="spaTheme">
    <Navbar />
    <v-main>

      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />

    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Testimonials from './components/Testimonials.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>