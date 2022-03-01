import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Router from './routers';

const app = createApp(App);

app.use(Router);
app.use(PrimeVue);
app.mount("#app");
