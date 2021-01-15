<template>
  <div class="spot">
    <h1>Spot</h1>
    <LargeBtn @click="connectWallet"></LargeBtn>
    <SmallBtn></SmallBtn>
  </div>
</template>

<script lang="ts">
import Wallet from '@project-serum/sol-wallet-adapter';
import { defineComponent } from 'vue';
import LargeBtn from './component/LargeBtn.vue';
import SmallBtn from './component/SmallBtn.vue';

export default defineComponent({
    name: 'Spot',
    components: {
        LargeBtn,
        SmallBtn,
    },
    setup() {
        const providerUrl = 'https://www.sollet.io';
        const endpoint = 'https://solana-api.projectserum.com';
        const wallet = new Wallet(providerUrl, endpoint);

        const connectWallet = () => {
            console.log('链接全部');
            console.log(wallet);
            wallet.connect();
        };

        wallet.on('connect', () => {
            console.log('connected');
            localStorage.removeItem('feeDiscountKey');
            const walletPublicKey = wallet.publicKey.toBase58();
            const keyToDisplay = walletPublicKey.length > 20
                ? `${walletPublicKey.substring(0, 7)}.....${walletPublicKey.substring(
                    walletPublicKey.length - 7,
                    walletPublicKey.length,
                )}`
                : walletPublicKey;
            console.log(keyToDisplay, walletPublicKey);
        });

        return {
            connectWallet,
        };
    },
});
</script>
