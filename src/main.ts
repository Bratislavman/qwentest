import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'
import '@vueform/vueform/dist/vueform.css'

// Импорт самописного плагина
import { myCustomPlugin } from './plugins/myCustomPlugin'

// Импорт самописной директивы
import { vClickOutside } from './directives/clickOutside'

const app = createApp(App)

// Подключение Pinia
app.use(createPinia())

// Подключение Vue Query
app.use(VueQueryPlugin)

// Подключение роутера
app.use(router)

// Подключение самописного плагина
app.use(myCustomPlugin)

app.use(Vueform, vueformConfig)

// Регистрация самописной директивы глобально
app.directive('click-outside', vClickOutside)

app.mount('#app')
