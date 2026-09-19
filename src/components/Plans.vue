<template>
    <section id="plans" class="py-12 bg-cream">
        <v-container class="py-6" fluid>

            <v-row justify="center" class="text-center mb-6">
                <v-col cols="8">
                    <span class="section-overline">INVESTIMENTO EM BEM-ESTAR</span>
                    <h2 class="section-title mt-1 mb-3">Planos Contratuais</h2>
                    <p class="section-subtitle max-w-600 mx-auto">
                        Escolha o modelo ideal para levar mais qualidade de vida, produtividade e equilíbrio para a sua
                        equipe.
                    </p>
                </v-col>
            </v-row>

            <v-row justify="center">
                <v-col cols="8">

                    <v-row justify="center" class="align-stretch">
                        <v-col v-for="(plan, index) in plans" :key="index" cols="12" md="4" lg="4" xl="4" class="d-flex">
                            <!-- Card de Plano do Vuetify -->
                            <v-card flat rounded="xl" class="plan-card flex-grow-1 d-flex flex-column pa-6"
                                :class="{ 'plan-card-featured': plan.featured }">
                                <!-- Tag de Destaque no Plano do Meio -->
                                <v-chip v-if="plan.featured" color="#E2B5B7" variant="flat" size="x-small"
                                    class="featured-chip text-white font-weight-bold px-3 py-1 text-uppercase">
                                    Mais Popular
                                </v-chip>

                                <!-- Cabeçalho do Card -->
                                <div class="text-center pt-2">
                                    <span class="section-overline">{{ plan.category }}</span>
                                    <h3 class="plan-title mt-1 mb-2">{{ plan.title }}</h3>
                                    <p class="plan-description text-body-2 text-medium-emphasis">
                                        {{ plan.description }}
                                    </p>
                                </div>

                                <v-divider class="my-5 border-color"></v-divider>

                                <!-- Lista de Itens com Vuetify List -->
                                <div class="flex-grow-1">
                                    <div class="includes-title mb-3">O QUE INCLUI:</div>
                                    <v-list density="compact" bg-color="transparent" class="pa-0">
                                        <v-list-item v-for="(feature, fIndex) in plan.includes" :key="fIndex"
                                            class="px-0 py-1 min-h-0">
                                            <template #prepend>
                                                <v-avatar size="18" class="mr-3">
                                                    <v-icon color="#E2B5B7" size="14">mdi-circle-small</v-icon>
                                                </v-avatar>
                                            </template>
                                            <v-list-item-title class="feature-text text-wrap">
                                                {{ feature }}
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </div>

                                <!-- Rodapé / Ideal para -->
                                <div v-if="plan.idealFor" class="mt-6 pt-4 text-center border-top-subtle">
                                    <span class="text-caption text-medium-emphasis">
                                        <strong class="text-high-emphasis">Ideal para:</strong> {{ plan.idealFor }}
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
const plans = [
    {
        category: 'PLANO',
        title: 'Essencial',
        description: 'Para empresas que desejam oferecer ações periódicas de bem-estar.',
        includes: [
            'Quick Massagem',
            'Atendimento programado',
            'Equipe especializada',
            'Relatório de atendimento',
            'Planejamento personalizado'
        ],
        idealFor: 'pequenas e médias empresas.',
        featured: false
    },
    {
        category: 'PLANO',
        title: 'Corporativo',
        description: 'Uma solução contínua para empresas que desejam investir na qualidade de vida dos colaboradores.',
        includes: [
            'Quick Massagem recorrente',
            'Ginástica Laboral',
            'Ações de relaxamento',
            'Programação mensal',
            'Equipe profissional',
            'Relatórios de atendimento',
            'Planejamento de ações corporativas'
        ],
        idealFor: null,
        featured: true
    },
    {
        category: 'PLANO',
        title: 'Premium',
        description: 'Uma experiência completa de bem-estar corporativo desenvolvida de acordo com as necessidades da empresa.',
        includes: [
            'Quick Massagem',
            'Ginástica Laboral',
            'Programas para SIPAT',
            'Eventos corporativos',
            'Ações especiais de saúde e bem-estar',
            'Atendimento personalizado',
            'Planejamento anual',
            'Relatórios e acompanhamento'
        ],
        idealFor: null,
        featured: false
    }
]
</script>

<style scoped>
/* Tipografia e cores idênticas ao restante da landing page */
.section-overline {
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #E2B5B7;
}

.section-title {
    font-family: 'Playfair Display', 'Didot', serif;
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

/* Customizações do v-card com Vuetify */
.plan-card {
    border: 1px solid #F2E8E6 !important;
    background-color: #FFFFFF !important;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.plan-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.04) !important;
}

/* Destaque sutil para o plano principal */
.plan-card-featured {
    border-color: #E2B5B7 !important;
    box-shadow: 0 8px 20px rgba(226, 181, 183, 0.12) !important;
}

.featured-chip {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: 0.1em;
}

.plan-title {
    font-family: 'Playfair Display', 'Didot', serif;
    font-size: 2rem;
    font-weight: 400;
    color: #2C2C2C;
}

.plan-description {
    min-height: 48px;
}

.includes-title {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #888888;
}

.feature-text {
    font-size: 0.9rem !important;
    color: #444444;
    white-space: normal !important;
}

.border-color {
    border-color: #F8F1F0 !important;
}

.border-top-subtle {
    border-top: 1px solid #F8F1F0;
}

.min-h-0 {
    min-height: auto !important;
}

.bg-cream {
    background-color: #FAF8F5;
}
</style>