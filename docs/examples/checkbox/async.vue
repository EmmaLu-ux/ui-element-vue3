<template>
  <ue-checkbox v-model="checked" :beforeChange="beforeChange">
    异步切换（1.2s 后生效）
  </ue-checkbox>
  <div style="margin-top: 8px; color: #888">当前：{{ checked }}</div>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
const beforeChange = () =>
  new Promise((resolve) => setTimeout(resolve, 1200))
</script>

