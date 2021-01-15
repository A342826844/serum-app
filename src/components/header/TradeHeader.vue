<template>
    <div class="trade-header" :class="{sticky, [theme]: theme}">
        <div class="leftbox">
            <img v-show="goback" @click="gobackHandle('goback')" class="leftbox-goback" src="@/assets/img/common/baise_go.png" alt="">
            <img v-show="theme === 'light'" @click="clickHanlde('leftClick')" src="@/assets/img/common/menu3.png">
            <img v-show="theme === 'dark'" @click="clickHanlde('leftClick')" src="@/assets/img/common/menu2.png">
            <span class="title-value">{{title}}</span>
            <slot name="left"></slot>
        </div>
        <div v-show="!$slots.rightbox" class="rightbox">
            <img v-show="kline" @click="clickHanlde('klineClick')" src="@/assets/img/common/kline.png">
            <template v-if="collect">
                <img @click="clickHanlde('addClick')" v-show="theme === 'light'" v-if='!selectState' src="@/assets/img/common/collect.png">
                <img @click="clickHanlde('addClick')" v-show="theme === 'dark'" v-if='!selectState' src="@/assets/img/common/collect1.png">
                <img @click="clickHanlde('removeClick')" v-else src="@/assets/img/common/collection.png">
            </template>
            <template v-if="help">
                <img @click="clickHanlde('helpClick')" src="@/assets/img/common/help2.png">
            </template>
        </div>
        <div v-show="$slots.rightbox" class="rightbox">
            <slot name="rightbox"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    props: {
        selectState: Boolean, // 右上角星星选中状态
        goback: Boolean,

        // 显示币种title
        title: {
            type: String,
            default: '',
        },

        // light 白底黑字 dark light
        theme: {
            type: String,
            default: 'light',
        },

        sticky: {
            type: Boolean,
            default: true,
        },

        // 是否显示k线
        kline: {
            type: Boolean,
            default: true,
        },

        // 是否显示收藏图标
        collect: {
            type: Boolean,
            default: false,
        },

        // 是否显示帮助中心图标
        help: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { emit }) {
        const clickHanlde = (event: string) => {
            emit(event);
        };

        const router = useRouter();
        const gobackHandle = (event: string) => {
            router.go(-1);
            clickHanlde(event);
        };
        return {
            clickHanlde,
            gobackHandle,
        };
    },
});
</script>

<style lang="less" scoped>
.trade-header{
    // background-color: rgb(255,255,255);
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0 8px;
    &.sticky{
        position: sticky;
    }
    &.light{
        background-color: rgb(255,255,255);
        background: pink;
    }
    &.dark{
        background: #0e1227;
        .leftbox span{
            color: #fff;
        }
    }
    .leftbox {
        // width: 255px;
        display: flex;
        height: 44px;
        justify-content: space-between;
        align-items: center;
        img {
            width: 25px;
            height: auto;
            &.leftbox-goback{
                width: 19px;
                margin-right: 40px;
            }
        }
        .title-value {
            // width: 198px;
            margin-left: 8px;
            line-height: 44px;
            font-size: 16px;
            color: #202025;
            font-weight: bold;
            text-align: left;
        }
    }
    .rightbox {
        text-align: right;
        img {
            margin-left: 15px;
            width: 25px;
            height: auto;
            vertical-align: middle;
            // &:last-child{
            //     width: 30px;
            // }
        }
        span{
            color: #3e80ca;
            font-size: 28px;
            vertical-align: middle;
        }
    }
}
</style>
