<template>
  <ue-row :gutter="10">
    <ue-checkbox :disabled="true">禁用（未选）</ue-checkbox>
    <ue-checkbox :disabled="true" v-model="checked">禁用（已选）</ue-checkbox>
  </ue-row>
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(true)
</script>

