<template>
  <div style="display:flex; gap: 12px; align-items: center;">
    <ue-tooltip content="Hello" @visible-change="onChange">
      <ue-button>悬停查看</ue-button>
    </ue-tooltip>
    <span>当前状态：{{ visible ? '显示' : '隐藏' }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
const onChange = (v) => { visible.value = v }
</script>

