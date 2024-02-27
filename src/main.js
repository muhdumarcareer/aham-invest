import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { registerPlugins } from '@/plugins'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'


const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(vuetify).use(router).use(VueChartkick)

registerPlugins(app)

app.mount('#app')
