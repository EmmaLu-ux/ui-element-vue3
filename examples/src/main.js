import { createApp } from 'vue'
import App from './App.vue'
// import "@ui-element-vue3/theme/src/index.scss"
// 全局引入
import UELib from "flori-ui"
// 全局引入需要另外引入样式文件
import "flori-ui/dist/index.min.css"

const app = createApp(App)
app.use(UELib)

app.mount('#app')
