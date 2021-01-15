<template>
  <div class="home">
    <h1>Home</h1>
    <a href="javascript:onClick(0)">test</a>
    <van-cell is-link @click="changeShowPopup">{{symbol}}</van-cell>
    <van-popup position="left" v-model:show="showPopup">
        <SelectCoin></SelectCoin>
    </van-popup>
    <OrderBook :data="orderbook"></OrderBook>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
// import * as solanaWeb3 from '@solana/web3.js';
import {
    Connection,
    // Account, AccountInfo, , PublicKey,
} from '@solana/web3.js';
// import tuple from 'immutable-tuple';

import {
    MARKETS,
    Market,
    Orderbook,
} from '@project-serum/serum';

import OrderBook from './orderbook.vue';
import SelectCoin from './selectCoin.vue';

const endpoint = 'https://solana-api.projectserum.com';

export default defineComponent({
    name: 'Home',
    components: {
        OrderBook,
        SelectCoin,
    },
    setup() {
        // console.log(new serum.Orderbook());

        const coin = MARKETS.map((item) => item.name);

        const showPopup = ref(false);
        const changeShowPopup = () => {
            console.log(showPopup);
            showPopup.value = !showPopup.value;
        };

        const markets = MARKETS.filter((item) => !item.deprecated);
        // console.log(Array.from(new Set(coin)));
        // console.log(MARKETS);
        let marketInfo = markets[0];

        const connection = new Connection(endpoint, 'recent');

        // console.log(connection);
        const symbol = ref('');

        const changeSymbol = (item: any) => {
            symbol.value = item.name;
            marketInfo = item;
        };

        const orderbook = reactive({
            bids: [{}],
        });

        const marketLoad = () => {
            // console.log(marketInfo);
            Market.load(connection, marketInfo.address, {}, marketInfo.programId)
                .then((market: any) => {
                    // console.log(data, 'data');
                    // eslint-disable-next-line no-underscore-dangle
                    // const cacheKey = tuple(connection, data._decoded.bids?.toBase58());
                    // console.log(cacheKey);
                    connection.getAccountInfo(market._decoded.bids).then((res: any) => {
                        // console.log(market);
                        const bidOrderbook = Orderbook.decode(market, res.data);
                        market.loadFills(connection, 100).then(() => {
                            // console.log(trades, 'trades');
                        });
                        // console.log(bidOrderbook, 'bidOrderbook');
                        const bids = bidOrderbook.getL2(20).map(([price, size]) => [price, size]);
                        // console.log(bids);
                        orderbook.bids = (bids as Array<any>);
                    });
                })
                .catch((e: any) => {
                    console.error(e.message);
                });
        };

        setInterval(marketLoad, 5000);
        marketLoad();

        return {
            markets,
            coin,
            changeSymbol,
            symbol,
            showPopup,
            changeShowPopup,
            orderbook,
        };
    },
});
</script>

<style lang="less" scoped>
.active{
    color: #f00;
}
</style>
