<template>
    <ul class="orderbook">
        <li class="flex-between-c">
            <div>价格</div>
            <div>数量</div>
        </li>
        <li class="flex-between-c" v-for="item in data.bids" :key="item">
            <div>{{item[0]}}</div>
            <div>{{item[1]}}</div>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'orderbook',
    props: {
        data: Object,
    },
    setup(...args) {
        console.log(args);
        return {

        };
    },
});
</script>
