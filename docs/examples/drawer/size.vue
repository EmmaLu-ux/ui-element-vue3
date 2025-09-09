<template>
  <div>
    <ue-button type="primary" @click="open('right')">右侧 480px</ue-button>
    <ue-button @click="open('left')" style="margin-left: 8px">左侧 360px</ue-button>
  </div>

  <ue-drawer v-model="showRight" title="右侧" placement="right" width="480" />
  <ue-drawer v-model="showLeft" title="左侧" placement="left" width="360" />
</template>

<script setup>
import { ref } from "vue"

const showRight = ref(false)
const showLeft = ref(false)

const open = (pos) => {
  if (pos === 'right') showRight.value = true
  if (pos === 'left') showLeft.value = true
  // 仅演示左右宽度设置
}
</script>
