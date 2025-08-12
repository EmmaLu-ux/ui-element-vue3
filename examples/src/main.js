import { createApp } from 'vue'
import App from './App.vue'
import "@ui-element-vue3/theme/src/index.scss"
// 全局引入
// import UELib from "flori-ui"

const app = createApp(App)
// app.use(UELib)

app.mount('#app')
