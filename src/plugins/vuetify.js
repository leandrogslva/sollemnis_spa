import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'spaTheme',
    themes: {
      spaTheme: {
        dark: false,
        colors: {
          primary: '#f2ced0',    // Rosa do React
          dark: '#2d2424',       // Texto escuro
          background: '#fdfbf7', // Fundo creme suave
          surface: '#ffffff',
        },
      },
    },
  },
})