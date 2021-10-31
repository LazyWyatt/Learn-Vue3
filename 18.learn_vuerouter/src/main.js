import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const app = createApp(App)

//使用router插件
app.use(router)

app.mount('#app')

// createApp(App).use(router).mount('#app');