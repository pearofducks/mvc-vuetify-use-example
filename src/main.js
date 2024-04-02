import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { mount } from 'mount-vue-component'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { VCard } from 'vuetify/components/VCard'

const vuetify = createVuetify({ components })

const app = createApp(App).use(vuetify)

mount(VCard, { element: document.querySelector('#mvc'), app })

app.mount('#app')
