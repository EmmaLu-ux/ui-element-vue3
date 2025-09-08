<template>
  <ue-switch v-model="val" />
  <span style="margin-left: 8px; color:#888">当前：{{ val }}</span>
</template>

<script setup>
import { ref } from 'vue'
const val = ref(false)
</script>

