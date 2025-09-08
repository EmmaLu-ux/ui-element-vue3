<template>
  <div style="display: grid; gap: 12px;">
    <ue-textarea v-model="a" width="360" placeholder="宽度 360px" />
    <ue-textarea v-model="b" width="520" placeholder="宽度 520px" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const a = ref('')
const b = ref('')
</script>

