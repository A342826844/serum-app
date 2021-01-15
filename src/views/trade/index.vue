<template>
    <div class="trade">
        <TradeHeader :title="state.market.name" collect @leftClick="leftClick"></TradeHeader>
        <van-popup position="left" v-model:show="showPopup">
            <SelectCoin @change="changeMarket" :defaultMarket="state.market"></SelectCoin>
        </van-popup>
        <div>
            {{state.market.address}}
            <div>
                <div>数量</div>
                <div class="scale-1px">
                    <!-- maska: 只能输入4位小数的数字 -->
                    <input v-model="state.form.amount" v-maska="'#*.####'">
                    <p>{{state.form.amount}}</p>
                </div>
            </div>
            <div>
                <div>价格</div>
                <div class="scale-1px">
                    <!-- maska: 只能输入2位小数的数字 -->
                    <input v-model="state.form.price" v-maska="'#*.##'">
                    <p>{{state.form.price}}</p>
                </div>
            </div>
            <div>
                <div>价格</div>
                <div class="item-border">
                    <!-- maska: 只能输入2位小数的数字 -->
                    <input v-model="state.form.price" v-maska="'#*.##'">
                    <p>{{state.form.price}}</p>
                </div>
            </div>
        </div>
        <div>
            <OrderBook :data="state.bids"></OrderBook>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';

import {
    Connection,
    // Account, AccountInfo, , PublicKey,
} from '@solana/web3.js';
// import tuple from 'immutable-tuple';

import {
    // MARKETS,
    Market,
    Orderbook,
} from '@project-serum/serum';

import TradeHeader from '@/components/header/TradeHeader.vue';
import SelectCoin from '@/components/symbol/SelectCoin.vue';
import OrderBook from '@/components/symbol/OrderBook.vue';
import { getMarkets } from '@/utils/market';

const endpoint = 'https://solana-api.projectserum.com';

export default defineComponent({
    name: 'Trade',
    components: {
        TradeHeader,
        SelectCoin,
        OrderBook,
    },
    setup() {
        const count = ref(0);

        const showPopup = ref(false);
        const leftClick = () => {
            showPopup.value = true;
        };

        const state = reactive({
            market: getMarkets()[0],
            bids: [{}],
            form: {
                price: '',
            },
        });
        const connection = new Connection(endpoint, 'recent');
        const marketLoad = () => {
            // console.log(marketInfo);
            Market.load(connection, state.market.address, {}, state.market.programId)
                .then((market: any) => {
                    connection.getAccountInfo(market._decoded.bids).then((res: any) => {
                        // console.log(market);
                        const bidOrderbook = Orderbook.decode(market, res.data);
                        // market.loadFills(connection, 100).then((trades: any) => {
                        //     // console.log(trades, 'trades');
                        // });
                        // console.log(bidOrderbook, 'bidOrderbook');
                        const bids = bidOrderbook.getL2(20).map(([price, size]) => [price, size]);
                        // console.log(bids);
                        state.bids = (bids as Array<any>);
                        console.log(state.bids[0]);
                    });
                })
                .catch((e: any) => {
                    console.error(e.message);
                });
        };

        setInterval(() => {
            marketLoad();
        }, 2000);

        const changeMarket = (market: MarketItem) => {
            state.market = market;
            showPopup.value = false;
        };

        return {
            count,
            leftClick,
            showPopup,
            state,
            changeMarket,
        };
    },
});
</script>

<style lang="less" scoped>
.trade{
    .item-border{
        border: 1px solid #C3C3CD;
    }
}
</style>
