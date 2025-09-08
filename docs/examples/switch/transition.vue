<template>
  <ue-row :gutter="16" style="align-items:center">
    <ue-switch v-model="a" onLabel="开" offLabel="关" transition="scale" />
    <ue-switch v-model="b" onLabel="ON" offLabel="OFF" transition="slide" />
  </ue-row>
  
</template>

<script setup>
import { ref } from 'vue'
const a = ref(true)
const b = ref(false)
</script>

