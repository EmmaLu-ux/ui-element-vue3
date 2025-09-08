<template>
  <div style="display: grid; gap: 12px; max-width: 520px">
    <ue-textarea v-model="a" :rows="2" placeholder="2 行" />
    <ue-textarea v-model="b" :rows="4" placeholder="4 行" />
    <ue-textarea v-model="c" :rows="6" placeholder="6 行，可拖拽调整高度" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const a = ref('')
const b = ref('')
const c = ref('')
</script>

