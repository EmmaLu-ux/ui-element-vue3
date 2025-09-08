<template>
  <ue-input v-model="val" clearable placeholder="可清空" style="max-width: 360px" />
</template>

<script setup>
import { ref } from 'vue'
const val = ref('点右侧图标可清空')
</script>

