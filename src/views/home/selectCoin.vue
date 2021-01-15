<template>
    <ul class="select-coin">
        <li
            class="select-coin-li border-b"
            v-for="item in markets"
            :class="{'primary-bg': item.name === 'BTC/USDT'}"
            :key="item"
        >{{item.name}}</li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
    MARKETS,
} from '@project-serum/serum';

export default defineComponent({
    name: 'orderbook',
    props: {
        data: Object,
    },
    setup(...args) {
        console.log(args);
        const markets = MARKETS.filter((item) => !item.deprecated);

        return {
            markets,
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
