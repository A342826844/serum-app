<template>
  <div class="spot">
    <h1>Spot</h1>
    <LargeBtn></LargeBtn>
    <SmallBtn></SmallBtn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LargeBtn from './component/LargeBtn.vue';
import SmallBtn from './component/SmallBtn.vue';

export default defineComponent({
    name: 'Spot',
    components: {
        LargeBtn,
        SmallBtn,
    },
});
</script>
