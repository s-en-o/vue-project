import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useStore } from '@/stores/data';

import App from './App.vue';
import router from './router';
import { Inkline, components } from '@inkline/inkline';

import '@inkline/inkline/inkline.scss';
import './assets/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Inkline, {
    components,
});

app.mount('#app');

// Fetch data
const store = useStore();
store.fetchData();
