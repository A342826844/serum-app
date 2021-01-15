import { App } from 'vue';

// import TradeHeader from './header/TradeHeader.vue';
import BackHeader from './header/BackHeader.vue';

const installComponent = (app: App) => {
    if (app) {
        // app.component('TradeHeader', TradeHeader);
        app.component('BackHeader', BackHeader);
    }
};

export default installComponent;
