<template>
  <ue-row :gutter="16" style="align-items:center">
    <ue-switch v-model="a" type="primary" />
    <ue-switch v-model="b" type="success" />
    <ue-switch v-model="c" type="warning" />
    <ue-switch v-model="d" type="error" />
  </ue-row>
</template>

<script setup>
import { ref } from 'vue'
const a = ref(true)
const b = ref(false)
const c = ref(true)
const d = ref(false)
</script>

