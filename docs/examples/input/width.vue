<template>
  <div style="display: grid; gap: 8px;">
    <ue-input v-model="a" width="240" placeholder="宽度 240px（数字字符串）" />
    <ue-input v-model="b" width="420" placeholder="宽度 420px" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const a = ref('')
const b = ref('')
</script>

