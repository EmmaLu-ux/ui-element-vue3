<template>
  <div style="display: grid; gap: 12px; max-width: 520px">
    <ue-textarea v-model="a" :disabled="true" placeholder="禁用（空）" />
    <ue-textarea v-model="b" :disabled="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const a = ref('')
const b = ref('不可编辑的已有内容')
</script>

