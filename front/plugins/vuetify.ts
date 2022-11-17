import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'

// materialdesign iconのfont これないとiconが表示されない
import '@mdi/font/css/materialdesignicons.css'
// SCSS Custom Variable
// import 'assets/main.scss'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    },
    display: {
      mobileBreakpoint: 'sm',
      thresholds: {
        xs: 599,
        sm: 720,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
