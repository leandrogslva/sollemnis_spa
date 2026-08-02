<template>
  <footer class="py-12 bg-brand-dark text-center border-t-white-5">
    <v-container>
      <p class="font-serif text-h4 text-white-80 mb-2">
        Sollemnis Spa
      </p>
      
      <p class="text-caption text-uppercase text-white-40 tracking-widest mb-6">
        A massoterapia salvando vidas e mentes!
      </p>

      <div class="divider-line mx-auto mb-6" />

      <p class="text-caption text-white-40">
        &copy; {{ currentYear }} Sollemnis Spa. Todos os direitos reservados.
      </p>
    </v-container>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.bg-brand-dark {
  background-color: #2d2424 !important; /* <--- Tom marrom/café escuro */
}

.border-t-white-5 {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.text-white-80 {
  color: rgba(255, 255, 255, 0.8);
}

.text-white-40 {
  color: rgba(255, 255, 255, 0.4);
}

.tracking-widest {
  letter-spacing: 0.15em !important;
}

.divider-line {
  height: 1px;
  width: 80px;
  background-color: rgba(242, 206, 208, 0.3);
}
</style>