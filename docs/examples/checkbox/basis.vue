<template>
  <ue-checkbox v-model="checked">同意协议</ue-checkbox>
  <div style="margin-top: 8px; color: #888">当前：{{ checked }}</div>
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(false)
</script>

