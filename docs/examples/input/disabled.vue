<template>
  <div style="display: grid; gap: 8px; max-width: 360px">
    <ue-input v-model="a" placeholder="禁用（无值）" :disabled="true" />
    <ue-input v-model="b" placeholder="禁用（有值）" :disabled="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const a = ref('')
const b = ref('已不可编辑')
</script>

