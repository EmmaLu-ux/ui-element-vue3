<template>
  <ue-input v-model="val" placeholder="请输入用户名" style="max-width: 360px" />
  <div style="margin-top: 8px; color: #888">当前：{{ val || '（空）' }}</div>
</template>

<script setup>
import { ref } from 'vue'
const val = ref('')
</script>

