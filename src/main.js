import './assets/main.css';
import 'primeicons/primeicons.css';
import { createApp } from 'vue';
import router from './router';
import { createPinia } from 'pinia';
import App from './App.vue';
import 'vue3-toastify/dist/index.css';

const app = createApp(App);

app.use(router);

app.mount('#app');
