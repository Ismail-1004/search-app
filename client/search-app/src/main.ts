import './assets/main.css'
import formatNumber from './directives/formatNumber';
import ToastifyPlugin from './plugins/toastify';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ToastifyPlugin)

app.directive('format-number', formatNumber);
app.mount('#app')
