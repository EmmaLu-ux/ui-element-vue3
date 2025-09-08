<template>
  <ue-row :gutter="16" style="align-items:center">
    <ue-switch v-model="a" onLabel="开" offLabel="关" />
    <ue-switch v-model="b" onLabel="ON" offLabel="OFF" />
    <ue-switch v-model="c" onLabel="启用" offLabel="停用" />
  </ue-row>
</template>

<script setup>
import { ref } from 'vue'
const a = ref(true)
const b = ref(false)
const c = ref(true)
</script>

