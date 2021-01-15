import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home/index.vue';
import Assets from '../views/assets/index.vue';
import Future from '../views/future/index.vue';
import Spot from '../views/spot/index.vue';
import Trade from '../views/trade/index.vue';

import CreateWallet from './createWallet';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            name: 'Home',
        },
    },
    {
        path: '/assets',
        name: 'Assets',
        component: Assets,
        meta: {
            name: 'Assets',
        },
    },
    {
        path: '/future',
        name: 'Future',
        component: Future,
        meta: {
            name: 'Future',
        },
    },
    {
        path: '/spot',
        name: 'Spot',
        component: Spot,
        meta: {
            name: 'Spot',
        },
    },
    {
        path: '/trade',
        name: 'Trade',
        component: Trade,
        meta: {
            name: 'Trade',
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes.concat(CreateWallet),
});

export default router;
