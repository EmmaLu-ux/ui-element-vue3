<template>
  <ue-row :gutter="10">
    <ue-checkbox v-model="a">默认</ue-checkbox>
    <ue-checkbox v-model="b" type="primary">Primary</ue-checkbox>
    <ue-checkbox v-model="c" type="success">Success</ue-checkbox>
    <ue-checkbox v-model="d" type="warning">Warning</ue-checkbox>
    <ue-checkbox v-model="e" type="error">Error</ue-checkbox>
  </ue-row>
</template>

<script setup>
import { ref } from 'vue'
const a = ref(false)
const b = ref(true)
const c = ref(false)
const d = ref(false)
const e = ref(false)
</script>

