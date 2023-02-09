import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Terminal from 'vue-web-terminal'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(Terminal)
app.mount('#app')
