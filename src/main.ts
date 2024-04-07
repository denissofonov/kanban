import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia, Pinia } from 'pinia'
import 'element-plus/theme-chalk/dark/css-vars.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './../router'

const pinia: Pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .use(ElementPlus)
    .mount('#app')
