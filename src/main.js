import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import './utils/lib/china'

import './styles/index.scss'

// rem适配(动态设置font-size)
import 'amfe-flexible'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
