import { createApp } from 'vue'
import App from './05_生命週期鉤子/App.vue'

const app = createApp(App)

// app.mixin({
//   data() {
//     return {

//     }
//   },
//   created() {
//     console.log("全局的mixin")
//   }
// })

app.mount('#app')
