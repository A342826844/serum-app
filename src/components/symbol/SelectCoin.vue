<template>
    <ul class="select-coin">
        <li
            class="select-coin-li border-b"
            v-for="item in markets"
            @click="change(item)"
            :class="{'primary-bg': item.name === state.market.name}"
            :key="item"
        >
            {{item.name}}
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { getMarkets } from '@/utils/market';
// import { MarketItem } from '@/types/market.d';

export default defineComponent({
    name: 'orderbook',
    props: {
        data: Object,
        defaultMarket: Object,
    },
    setup(props, { emit }) {
        const markets = getMarkets();

        const state = reactive({
            market: markets[0],
        });

        // 展示默认币种
        if (props.defaultMarket) {
            state.market = (props.defaultMarket as MarketItem);
        }

        const change = (item: MarketItem) => {
            state.market = item;
            emit('change', item);
        };

        return {
            markets,

            state,

            change,
        };
    },
});
</script>

<style lang="less" scoped>
.select-coin{
    width: 66vw;
    height: 100%;
    &-li{
        height: 44px;
        line-height: 44px;
    }
}
</style>
