<template>
  <section id="events" class="py-12 bg-cream">
    <v-container>
      <v-row justify="center" class="text-center">
        <v-col cols="12" md="10" lg="8">
          
          <!-- Overline padrão do site -->
          <span class="section-overline">
            SOLUÇÕES PARA EMPRESAS
          </span>

          <!-- Título principal -->
          <h2 class="section-title mt-2 mb-4">
            Eventos Corporativos
          </h2>

          <!-- Descrição principal -->
          <p class="section-subtitle max-w-600 mx-auto mb-10">
            Levamos nossa estrutura até sua empresa. Nossa equipe trabalha com formatos flexíveis de atendimento, adaptados ao número de colaboradores, duração e objetivos da sua ação.
          </p>

          <!-- Título secundário -->
          <p class="section-overline mb-6">
            ATENDEMOS
          </p>

          <!-- Grade de Serviços/Eventos em Cards Suaves -->
          <v-row justify="center" dense class="mb-8">
            <v-col
              v-for="(item, index) in eventTypes"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              class="d-flex justify-center"
            >
              <div class="d-flex align-center py-2 px-3 text-body-2 text-grey-darken-3">
                <v-icon color="success" size="small" class="mr-2">
                  mdi-check-circle-outline
                </v-icon>
                <span>{{ item }}</span>
              </div>
            </v-col>
          </v-row>

        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const eventTypes = [
  'Convenções',
  'SIPAT',
  'Datas comemorativas',
  'Feiras',
  'Semana da Saúde',
  'Eventos internos',
  'Congressos',
  'Endomarketing',
  'Programas de qualidade de vida'
]
</script>

<style scoped>
/* Estilos para alinhar com o design do Sollemnis Spa */
.section-overline {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #E2B5B7; /* Tom rosa característico das outras seções */
}

.section-title {
  font-family: 'Playfair Display', 'Didot', serif; /* Ajuste para a fonte serifada do seu projeto */
  font-size: 2.75rem;
  font-weight: 400;
  color: #2C2C2C;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
}

.max-w-600 {
  max-width: 600px;
}

/* Cards estilizados como os da seção "O que dizem nossos clientes" */
.event-card {
  background-color: #FFFFFF;
  border: 1px solid #F2E8E6;
  border-radius: 16px;
  padding: 16px 20px;
  font-size: 0.95rem;
  color: #333333;
  font-weight: 500;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.event-card:hover {
  border-color: #E2B5B7;
  transform: translateY(-2px);
}

.bg-cream {
  background-color: #FAF8F5; /* Fundo levemente off-white/creme igual ao restante da página */
}
</style>