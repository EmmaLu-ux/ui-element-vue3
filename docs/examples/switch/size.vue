<template>
  <ue-row :gutter="16" style="align-items:center">
    <ue-switch v-model="a" size="sm" />
    <ue-switch v-model="b" size="md" />
    <ue-switch v-model="c" size="lg" />
    <ue-switch v-model="d" size="xl" />
  </ue-row>
</template>

<script setup>
import { ref } from 'vue'
const a = ref(true)
const b = ref(false)
const c = ref(true)
const d = ref(false)
</script>

