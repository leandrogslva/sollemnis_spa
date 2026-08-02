<template>
  <section id="about" class="py-16 bg-white">
    <v-container fluid>
      <v-row no-gutters justify="center">
        <v-col cols="8">
          <v-row align="center" justify="center">
            <v-col cols="12" lg="6" xl="6" class="position-relative">
              <v-card class="rounded-xl overflow-hidden elevation-12" max-width="500">
                <v-img
                  src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1000"
                  cover aspect-ratio="0.8" />
              </v-card>
            </v-col>

            <v-col cols="12" lg="6" xl="6">
              <span class="text-overline text-primary font-weight-bold d-block mb-2">
                Nossa Essência
              </span>
              <h2 class="text-h3 font-weight-regular mb-6">
                Cuidando do seu corpo, <br />
                <span class="font-italic">acolhendo sua alma.</span>
              </h2>
              <div class="text-body-1 text-medium-emphasis space-y-4">
                <p>
                  No Sollemnis Spa, acreditamos que a massoterapia vai muito além do toque físico. É um ritual de
                  reconexão, um momento sagrado onde o estresse do dia a dia dá lugar à paz profunda.
                </p>
                <p class="mt-4">
                  Fundado com a missão de "salvar vidas e mentes", nosso espaço foi projetado para ser um refúgio
                  urbano. Cada detalhe, desde a iluminação suave até os aromas escolhidos, visa proporcionar uma
                  experiência sensorial completa.
                </p>
                <p class="mt-4">
                  Nossa abordagem é personalizada. Entendemos que cada corpo carrega uma história e cada mente busca um
                  alívio diferente. Por isso, nossas técnicas são adaptadas para atender às suas necessidades
                  específicas, garantindo resultados que perduram.
                </p>
              </div>
              <div class="mt-8">
                <v-btn href="#contact" variant="text" color="primary" class="px-0 font-weight-bold border-bottom">
                  Agende sua sessão hoje
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>