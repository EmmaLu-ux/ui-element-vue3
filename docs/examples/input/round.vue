<template>
  <div style="display: grid; gap: 8px; max-width: 360px">
    <ue-input v-model="a" round placeholder="圆角输入框" />
    <ue-input v-model="b" round size="lg" placeholder="圆角 + 大尺寸" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const a = ref('')
const b = ref('')
</script>

