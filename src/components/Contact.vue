<template>
  <section id="contact" class="py-16 bg-brand-dark text-white">
    <v-container fluid>
      <v-row no-gutters justify="center">
        <v-col cols="8">
          <v-row align="center" justify="center">
            <!-- Info Contato -->
            <v-col cols="12" lg="6" xl="6">
              <span class="text-overline text-primary font-weight-bold d-block mb-2">
                Contato
              </span>
              <h2 class="font-serif text-h3 text-md-h2 mb-6">Vamos agendar <br />seu momento?</h2>
              <p class="text-white-60 mb-8 text-body-1">
                Estamos prontos para te receber e proporcionar o alívio que você merece. Entre em contato pelos canais
                abaixo ou preencha o formulário.
              </p>

              <div class="d-flex align-center ga-4 mb-6">
                <v-avatar color="white-opacity" size="48">
                  <v-icon icon="mdi-phone" color="primary" size="20" />
                </v-avatar>
                <div>
                  <div class="text-caption text-uppercase text-white-40">Telefone / WhatsApp</div>
                  <div class="text-h6 font-weight-regular">(11) 94859-6834</div>
                </div>
              </div>

              <div class="d-flex align-center ga-4 mb-6">
                <v-avatar color="white-opacity" size="48">
                  <v-icon icon="mdi-email" color="primary" size="20" />
                </v-avatar>
                <div>
                  <div class="text-caption text-uppercase text-white-40">E-mail</div>
                  <div class="text-h6 font-weight-regular">contato@sollemnisspa.com.br</div>
                </div>
              </div>

              <div class="d-flex align-center ga-4 mb-8">
                <v-avatar color="white-opacity" size="48">
                  <v-icon icon="mdi-map-marker" color="primary" size="20" />
                </v-avatar>
                <div>
                  <div class="text-caption text-uppercase text-white-40">Endereço</div>
                  <div class="text-h6 font-weight-regular">Av. Paulista, 1000 - São Paulo, SP</div>
                </div>
              </div>

              <div class="d-flex ga-4">
                <v-btn icon="mdi-instagram" variant="outlined" color="white-opacity" size="small" />
                <v-btn icon="mdi-whatsapp" variant="outlined" color="white-opacity" size="small" />
              </div>
            </v-col>

            <!-- Formulário -->
            <v-col cols="12" lg="6" xl="6">
              <v-card class="pa-8 pa-md-12 rounded-xl" color="white" elevation="0">
                <v-form @submit.prevent>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field label="NOME COMPLETO" placeholder="Seu nome" variant="underlined" color="primary" />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field label="E-MAIL" placeholder="seu@email.com" type="email" variant="underlined"
                        color="primary" />
                    </v-col>
                    <v-col cols="12">
                      <v-select label="SERVIÇO DE INTERESSE"
                        :items="['Massagem Relaxante', 'Drenagem Linfática', 'Massagem Terapêutica', 'Ritual do Sono']"
                        variant="underlined" color="primary" />
                    </v-col>
                    <v-col cols="12">
                      <v-textarea label="MENSAGEM" placeholder="Como podemos te ajudar?" rows="3" variant="underlined" active
                        color="primary" />
                    </v-col>
                    <v-col cols="12">
                      <!-- Botão com fundo rosa (#f2ced0) e texto escuro (#2d2424) -->
                      <v-btn block color="#f2ced0" size="x-large" rounded="lg" type="submit"
                        class="btn-submit font-weight-bold">
                        Enviar Mensagem
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<style scoped>
.bg-brand-dark {
  background-color: #2d2424 !important;
  /* <--- Tom marrom/café escuro */
}

.white-opacity {
  background-color: rgba(255, 255, 255, 0.1) !important;
  border-color: rgba(255, 255, 255, 0.2) !important;
}

.text-white-60 {
  color: rgba(255, 255, 255, 0.6);
}

.text-white-40 {
  color: rgba(255, 255, 255, 0.4);
}

.btn-submit {
  color: #2d2424 !important;
  /* Garante que o texto do botão fique escuro */
}
</style>