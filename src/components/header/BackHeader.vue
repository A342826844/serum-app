<template>
    <div id="headers" :class="{[theme]: theme}">
        <img v-if="isBack" @click="back" class="goBack img light-img" src="@/assets/img/common/previous_page.png" alt="">
        <img v-if="isBack" @click="back" class="goBack img dark-img" src="@/assets/img/common/baise_go.png" alt="">
        <span class="title ellipsis">{{title}}</span>
        <span class="rightTitle" @click="valueclick">{{value}}</span>
        <span class="right"><slot></slot></span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    props: {
        isBack: {
            type: Boolean,
            default: true,
        },
        title: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
        theme: {
            type: String,
            default: '',
        },
    },
    setup(props, { emit }) {
        const valueclick = () => {
            emit('vlueClick');
        };

        const router = useRouter();
        const back = () => {
            router.go(-1);
            emit('back');
        };

        return {
            valueclick,
            back,
        };
    },
});
</script>

<style lang="less">
    #headers {
        background: #fff;
        height: 88px;
        width: 100%;
        text-align: left;
        line-height: 88px;
        padding-left: 41px;
        padding-right: 21px;
        position: sticky;
        top: 0;
        z-index: 1000;
        &.dark{
            background: transparent;
            .rightTitle{
                color: #FFFFFF;
            }
            .goBack.dark-img{
                display: inline-block;
            }
            .goBack.light-img{
                display: none;
            }
        }
        .img{
            position: absolute;
            top:25px;
            left:41px
        }
        .goBack.dark-img{
            display: none;
        }
        .goBack.light-img{
            display: inline-block;
        }
        .rightTitle {
            font-family: MicrosoftYaHei;
            font-size: 28px;
            font-weight: normal;
            font-stretch: normal;
            color: #3e80ca;
            float: right;
            margin-right: 30px;

        }
        .right {
            font-size: 28px;
            font-weight: normal;
            font-stretch: normal;
            float: right;
        }
        .title {
            display: inline-block;
            transform: translateX(-50%);
            font-family: MicrosoftYaHei;
            font-size: 34px;
            font-weight: normal;
            font-stretch: normal;
            position: absolute;
            left:50%;
            color: #202025;
            width: 50%;
            text-align: center;
        }

        .goBack {
            width: 19px;
            height: 33px;
        }
    }
</style>
