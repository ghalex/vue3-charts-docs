import { createApp } from 'vue'
import App from '@/components/App.vue'
import router from './router'

import './assets/css/main.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')
