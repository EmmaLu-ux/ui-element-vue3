<template>
  <div style="display: grid; gap: 8px">
    <ue-switch v-model="val" :beforeChange="confirmChange"
      >需要确认（1s）</ue-switch
    >
    <ue-switch v-model="val2" :beforeChange="alwaysBlock"
      >返回 false 阻止切换</ue-switch
    >
  </div>
</template>

<script setup>
import { ref } from "vue"
const confirmChange = () =>
  new Promise(resolve => setTimeout(() => resolve(true), 1000))

const alwaysBlock = () => false

const val = ref(false)
const val2 = ref(true)
</script>
