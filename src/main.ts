import { createApp } from 'vue'
import App from '@/components/App.vue'
import router from './router'

import './assets/css/main.scss'
import './registerServiceWorker'

const app = createApp(App)

app.use(router)
app.mount('#app')
