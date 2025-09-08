<template>
  <ue-checkbox-group v-model="values">
    <ue-checkbox value="apple">苹果</ue-checkbox>
    <ue-checkbox value="banana">香蕉</ue-checkbox>
    <ue-checkbox value="orange">橙子</ue-checkbox>
  </ue-checkbox-group>
  <div style="margin-top: 8px; color: #888">选中：{{ values.join('，') || '无' }}</div>
</template>

<script setup>
import { ref } from 'vue'
const values = ref(["banana"])
</script>

