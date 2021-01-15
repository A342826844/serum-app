import { createApp } from 'vue';
import Vant from 'vant';
import Maska from 'maska';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

import 'vant/lib/index.css';
import '@/assets/less/index.less';

import installComponent from '@/components';

const app = createApp(App);
app.use(Maska);
app.use(store)
    .use(router)
    .use(Vant)
    .mount('#app');

installComponent(app);
console.log(app);
