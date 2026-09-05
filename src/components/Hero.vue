<template>
  <section id="home" class="min-vh-100 d-flex align-center justify-center position-relative pt-16 overflow-x-hidden">
    <!-- Círculos decorativos translúcidos do fundo -->
    <div class="blur-circle top-left" />
    <div class="blur-circle bottom-right" />

    <v-container class="text-center position-relative z-1">
      <v-row justify="center">
        <!-- Logo em Destaque -->
        <v-col cols="12" class="d-flex justify-center mb-6">
          <div class="logo-wrapper pa-3 rounded-circle border-pink">
            <!-- Reduzimos de 220 para 160px para bater com a resolução nativa -->
            <v-avatar size="160" class="elevation-0 bg-white">
              <!-- 'contain' garante que a imagem não seja esticada/pixelada -->
              <v-img :src="logoImg" alt="Sollemnis Spa Logo" contain />
            </v-avatar>
          </div>
        </v-col>

        <!-- Título e Subtítulo -->
        <v-col cols="12" md="8">
          <h1 class="font-serif text-h2 text-dark font-weight-regular mb-4">
            Sollemnis Spa
          </h1>
          <p class="font-serif font-italic text-h6 text-md-h5 text-medium-emphasis mb-8">
            "A massoterapia salvando vidas e mentes!"
          </p>

          <v-btn
            href="#services"
            color="primary"
            size="large"
            rounded="xl"
            elevation="0"
            class="px-8 text-dark font-weight-medium"
          >
            Conheça nossos serviços
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
// Importa o logo local da pasta assets
import logoImg from '../assets/logo_limpo.png';
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.z-1 {
  z-index: 1;
}

/* Moldura bonita em volta do logo com o tom rosa do tema */
.border-pink {
  border: 3px solid rgba(242, 206, 208, 0.6);
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

/* Efeitos decorativos sutis no fundo */
.blur-circle {
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: rgba(242, 206, 208, 0.25);
  filter: blur(80px);
  pointer-events: none;
}

.top-left {
  top: 15%;
  left: -50px;
}

.bottom-right {
  bottom: 15%;
  right: -50px;
}
</style>