<template>
  <ue-checkbox-all v-model="selected" style="display:block">
    <ue-checkbox value="A">选项 A</ue-checkbox>
    <ue-checkbox value="B">选项 B</ue-checkbox>
    <ue-checkbox value="C">选项 C</ue-checkbox>
  </ue-checkbox-all>
  <div style="margin-top: 8px; color: #888">当前全选值：{{ selected.join('，') || '无' }}</div>
</template>

<script setup>
import { ref } from 'vue'
const selected = ref(["A"]) // 初始选中 B 可自定义
</script>

