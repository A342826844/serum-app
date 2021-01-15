import { RouteRecordRaw } from 'vue-router';
import CreateWallet from '../views/createWallet/index.vue';

const router: Array<RouteRecordRaw> = [
    {
        path: '/createWallet',
        name: 'CreateWallet',
        component: CreateWallet,
    },
];

export default router;
