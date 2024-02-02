import { createApp } from 'vue'
import App from './App.vue'
// import YCIT from 'ycit-ui'
import YCIT from './view/index'
const app=createApp(App)
app.use(YCIT)
app.mount('#app')
