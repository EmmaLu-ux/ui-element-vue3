<template>
  <div style="display: grid; gap: 8px; max-width: 360px">
    <ue-input v-model="a" size="sm" placeholder="小 sm" />
    <ue-input v-model="b" size="md" placeholder="中 md" />
    <ue-input v-model="c" size="lg" placeholder="大 lg" />
    <ue-input v-model="d" size="xl" placeholder="超大 xl" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const a = ref('')
const b = ref('')
const c = ref('')
const d = ref('')
</script>

