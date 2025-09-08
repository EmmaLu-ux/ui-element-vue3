<template>
  <ue-textarea v-model="val" placeholder="请输入备注..." style="max-width: 520px" />
  <div style="margin-top: 8px; color: #888">长度：{{ val.length }}</div>
</template>

<script setup>
import { ref } from 'vue'
const val = ref('')
</script>

