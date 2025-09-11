<template>
  <div style="display:flex; gap: 12px; align-items: center;">
    <ue-tooltip manual ref="tip" content="手动控制">
      <ue-button>目标</ue-button>
    </ue-tooltip>
    <ue-button type="primary" @click="tip?.show()">显示</ue-button>
    <ue-button @click="tip?.hide()">隐藏</ue-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tip = ref(null)
</script>

