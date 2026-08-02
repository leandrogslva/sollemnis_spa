<template>
  <section id="testimonials" class="py-16 bg-white">
    <v-container fluid>
      <v-row no-gutters justify="center">
        <v-col cols="8">
          <div class="text-center mb-12">
            <span class="text-overline text-primary font-weight-bold d-block mb-2">
              Experiências Reais
            </span>
            <h2 class="text-h3">O que dizem nossos clientes</h2>
          </div>
          <v-row align="center" justify="center">
            <v-col v-for="t in testimonials" :key="t.name" cols="12" sm="6" lg="4" xl="4">
              <v-card class="h-100 pa-6 rounded-xl bg-cream border" variant="flat">
                <v-rating :model-value="t.rating" color="primary" density="compact" readonly class="mb-4" />
                <p class="text-body-1 font-italic text-medium-emphasis mb-6">
                  "{{ t.content }}"
                </p>
                <div>
                  <h4 class="text-h6 font-weight-bold">{{ t.name }}</h4>
                  <span class="text-caption text-primary text-uppercase font-weight-bold">
                    {{ t.role }}
                  </span>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: "Ana Silva",
    role: "Empresária",
    content: "A melhor experiência de massagem que já tive. O ambiente é acolhedor e a profissional realmente entende o que o corpo precisa. Saí renovada!",
    rating: 5
  },
  {
    name: "Carlos Mendes",
    role: "Atleta",
    content: "Como corredor, a massagem terapêutica do Sollemnis Spa é essencial para minha recuperação. Profissionalismo e técnica impecáveis.",
    rating: 5
  },
  {
    name: "Mariana Costa",
    role: "Designer",
    content: "O slogan não mente: realmente salva mentes! Estava em uma semana super estressante e o Ritual do Sono me trouxe de volta ao equilíbrio.",
    rating: 5
  },
];
</script>