<template>
  <ue-row :gutter="10">
    <ue-checkbox v-model="a" size="sm">小 sm</ue-checkbox>
    <ue-checkbox v-model="b" size="md">中 md</ue-checkbox>
    <ue-checkbox v-model="c" size="lg">大 lg</ue-checkbox>
    <ue-checkbox v-model="d" size="xl">超大 xl</ue-checkbox>
  </ue-row>
</template>

<script setup>
import { ref } from 'vue'
const a = ref(true)
const b = ref(false)
const c = ref(false)
const d = ref(false)
</script>

