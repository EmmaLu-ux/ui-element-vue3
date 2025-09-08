<template>
  <ue-row :gutter="16" style="align-items:center">
    <ue-switch v-model="a" :disabled="true" />
    <ue-switch v-model="b" :disabled="true" />
  </ue-row>
</template>

<script setup>
import { ref } from 'vue'
const a = ref(false)
const b = ref(true)
</script>

