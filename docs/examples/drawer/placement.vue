<template>
  <div>
    <ue-button type="primary" @click="open('right')">右侧</ue-button>
    <ue-button @click="open('left')" style="margin-left: 8px">左侧</ue-button>
    <ue-button @click="open('top')" style="margin-left: 8px">顶部</ue-button>
    <ue-button @click="open('bottom')" style="margin-left: 8px">底部</ue-button>
  </div>

  <ue-drawer v-model="showRight" title="右侧" placement="right">右侧抽屉内容...</ue-drawer>
  <ue-drawer v-model="showLeft" title="左侧" placement="left">左侧抽屉内容...</ue-drawer>
  <ue-drawer v-model="showTop" title="顶部" placement="top">顶部抽屉内容...</ue-drawer>
  <ue-drawer v-model="showBottom" title="底部" placement="bottom">底部抽屉内容...</ue-drawer>
</template>

<script setup>
import { ref } from "vue"

const showRight = ref(false)
const showLeft = ref(false)
const showTop = ref(false)
const showBottom = ref(false)

const open = (pos) => {
  if (pos === 'right') showRight.value = true
  if (pos === 'left') showLeft.value = true
  if (pos === 'top') showTop.value = true
  if (pos === 'bottom') showBottom.value = true
}
</script>

