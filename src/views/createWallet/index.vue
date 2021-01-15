<template>
    <div class="createWallet">
        <h1>{{hasLocked ? 'resetWallet' : 'createWallet'}}</h1>
        <p>{{mnemonicAndSeed.mnemonic}}</p>
        <p>{{mnemonicAndSeed.seed}}</p>
         <van-field v-model="password" placeholder="请输入用户名" />
        <van-button
            @click="createLocalWallet"
            type="primary"
            size="normal"
        >创建本地钱包</van-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import {
    generateMnemonicAndSeed,
    hasLockedMnemonicAndSeed,
    // loadMnemonicAndSeed,
    // mnemonicToSeed,
    storeMnemonicAndSeed,
    // useWalletPublicKeys,
} from '@/utils/wallet/wallet-send';

export default defineComponent({
    name: 'createWallet',
    setup() {
        const hasLocked = ref(hasLockedMnemonicAndSeed());
        const password = ref('');
        const mnemonicAndSeed = reactive({
            mnemonic: '',
            seed: '',
        });
        generateMnemonicAndSeed().then((res) => {
            mnemonicAndSeed.mnemonic = res.mnemonic;
            mnemonicAndSeed.seed = res.seed;
        });

        // 创建本地钱包
        const createLocalWallet = () => {
            const { mnemonic, seed } = mnemonicAndSeed;
            storeMnemonicAndSeed(mnemonic, seed, password.value);
        };

        return {
            hasLocked,
            password,
            mnemonicAndSeed,
            createLocalWallet,
        };
    },
});
</script>
