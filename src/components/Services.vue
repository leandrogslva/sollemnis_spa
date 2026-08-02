<template>
  <section id="services" class="py-16 bg-cream">
    <v-container fluid>
      <v-row no-gutters justify="center">
        <v-col cols="8">
          <div class="text-center mb-12">
            <span class="text-overline text-primary font-weight-bold d-block mb-2">
              O que fazemos
            </span>
            <h2 class="text-h3">Nossos Serviços</h2>
            <p class="text-body-1 text-medium-emphasis max-w-600 mx-auto mt-2">
              Escolha o tratamento ideal para o seu momento e permita-se viver uma experiência de renovação total.
            </p>
          </div>

          <v-row align="center" justify="center">
            <v-col v-for="service in services" :key="service.title" cols="12" sm="6" lg="4" xl="4">
              <v-card class="h-100 rounded-xl elevation-2 hover-card">
                <v-img :src="service.image" height="200" cover />
                <v-card-text class="pa-6">
                  <v-icon :icon="service.icon" color="primary" size="36" class="mb-4" />
                  <h3 class="text-h5 mb-3">{{ service.title }}</h3>
                  <p class="text-body-2 text-medium-emphasis">
                    {{ service.description }}
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<script setup>
import massagemImg from '../assets/massagem.png';
import massagemRelaxanteImg from '../assets/massagem_relaxante.png';
import quickMassagemImg from '../assets/quick_massagem.png';
import reflexologiaImg from '../assets/reflexologia_podal.png';

const services = [
  {
    title: "Massagem Relaxante",
    description: "Técnica focada em reduzir o inchaço, eliminar toxinas e melhorar a circulação sanguínea.",
    icon: "mdi-auto-fix",
    image: massagemRelaxanteImg
  },
  {
    title: "Quick Massagem",
    description: "Focada em pontos específicos de dor e contraturas, ideal para quem busca alívio de dores crônicas.",
    icon: "mdi-heart-outline",
    image: quickMassagemImg
  },
  {
    title: "Reflexologia Podal",
    description: "Uma combinação de técnicas e óleos essenciais para preparar o corpo para um descanso profundo.",
    icon: "mdi-moon-waning-crescent",
    image: reflexologiaImg
  }
];
</script>

<style scoped>
.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-8px);
}
</style>