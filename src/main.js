import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

import './assets/styles/main.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
