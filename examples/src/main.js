import { createApp } from 'vue'
import App from './App.vue'
import UElement from "../../packages/index"
import "@ui-element-vue3/theme/src/index.scss"

const app = createApp(App)
app.use(UElement)

app.mount('#app')
