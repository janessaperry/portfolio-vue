import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import LogRocket from 'logrocket'

import App from './App.vue'
import router from './router'

if (import.meta.env.PROD && window.location.hostname === 'janessaperry.com') {
  LogRocket.init(import.meta.env.VITE_LOGROCKET_ID)
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
