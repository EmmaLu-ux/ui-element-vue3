<template>
  <ue-row :gutter="12" style="align-items:center">
    <ue-switch v-model="val" :checkedValue="1" :uncheckedValue="0" />
    <span style="color:#888">当前值：{{ val }}</span>
  </ue-row>
</template>

<script setup>
import { ref } from 'vue'
const val = ref(0)
</script>

