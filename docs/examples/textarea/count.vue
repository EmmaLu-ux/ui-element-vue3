<template>
  <ue-textarea
    v-model="val"
    placeholder="最多 60 字，超过将提示"
    :maxlength="60"
    showCount
    style="max-width: 620px"
  />
</template>

<script setup>
import { ref } from 'vue'
const val = ref('')
</script>

