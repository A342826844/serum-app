<template>
    <div class="footer">
        <!-- <h1>{{route}}</h1> -->
        <div class="circle"></div>
        <ul class="nav-boxs flex-around-c">
            <li
                v-for="(item, index) in tabList"
                :key="item.name"
                @click="linkTo(item)"
                :class="{active: route.meta.name === item.name}"
            >
                <img
                    class="tar-icon"
                    :class="{'center-icon': index === 2}"
                    :src="item.name !== route.meta.name ? item.defaultIcon : item.activeIcon "
                    :alt="item.title"
                >
                <p>{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
// import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

const homeN = require('@/assets/img/footer/home_n.png');
const homeS = require('@/assets/img/footer/home_s.gif');
const contractN = require('@/assets/img/footer/contract_n.png');
const contractS = require('@/assets/img/footer/contract_s.gif');
const spotN = require('@/assets/img/footer/spot_n.png');
const spotS = require('@/assets/img/footer/spot_s.gif');
const optionN = require('@/assets/img/footer/option_n.png');
const optionS = require('@/assets/img/footer/option_s.gif');
const assetsN = require('@/assets/img/footer/assets_n.png');
const assetsS = require('@/assets/img/footer/assets_s.gif');

interface LinkItem {
    path: string;
    name: string;
    title: string;
    defaultIcon: unknown;
    activeIcon: unknown;
}

export default defineComponent({
    setup() {
        // const store = useStore();

        const router = useRouter();

        const route = useRoute();

        const test = ref(122);

        const tabList = reactive([
            {
                path: '/home',
                name: 'Home',
                title: '首页',
                defaultIcon: homeN,
                activeIcon: homeS,
            }, {
                path: '/future',
                name: 'Future',
                title: '永续',
                defaultIcon: contractN,
                activeIcon: contractS,
            }, {
                path: '/spot',
                name: 'Spot',
                title: '期货',
                defaultIcon: spotN,
                activeIcon: spotS,
            }, {
                path: '/trade',
                name: 'Trade',
                title: '期权',
                defaultIcon: optionN,
                activeIcon: optionS,
            }, {
                path: '/assets',
                name: 'Assets',
                title: '资产',
                defaultIcon: assetsN,
                activeIcon: assetsS,
            },
        ]);

        const linkTo = (item: LinkItem) => {
            // store.commit('changeLoading', true);
            // setTimeout(() => {
            //     store.commit('changeLoading', false);
            // }, 2000);
            // tabList[index].activeIcon = item.activeIcon;
            router.push(item.path);
        };

        return {
            test,
            tabList,
            route,
            linkTo,
        };
    },
});
</script>

<style lang="less" scoped>
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    // height: 100px;
    // background: pink;
    box-shadow: 0 -0.026667rem 0.133333rem 0 hsla(0,0%,79.6%,.75);
    .tar-icon{
        width: 8vw;
        &.center-icon{
            // width: 12vw;
            transform: scale(1.5) translateY(-1.2vw);
            // transform: translateY(1vw);
            // position: absolute;
        }
        // height: auto;
    }
    .nav-boxs{
        position: relative;
        z-index: 2;
        background: #fff;
        // height: 100%;
        padding: 6px 0;
    }
    .circle{
        position: absolute;
        width: 100%;
        height: 100%;
        &::before{
            content: '';
            position: absolute;
            top: -5vw;
            left: 0;
            right: 0;
            margin: auto;
            height: 16vw;
            width: 16vw;
            border-top: 1px solid #cecece;
            border-radius: 50%;
            background: #fff;
            box-shadow: 0px -2px 10px 0px rgba(203, 203, 203, 0.75);
        }
    }
}
</style>
