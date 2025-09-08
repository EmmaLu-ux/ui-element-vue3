<template>
  <ue-input
    v-model="val"
    placeholder="最多 20 字"
    :maxlength="20"
    showCount
    style="max-width: 420px"
  />
</template>

<script setup>
import { ref } from 'vue'
const val = ref('')
</script>

