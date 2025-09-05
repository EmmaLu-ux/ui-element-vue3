<template>
  <ue-row :gutter="10">
    <ue-button type="primary" @click="open1000">1 秒关闭</ue-button>
    <ue-button @click="openKeep">不自动关闭</ue-button>
  </ue-row>
</template>

<script setup>
import { UeMessage } from "flori-ui-vue3"

const open1000 = () => {
  UeMessage({ content: "1 秒后自动关闭", duration: 1000 })
}
const openKeep = () => {
  UeMessage({
    content: "不会自动关闭，手动点击关闭",
    duration: 0,
    showClose: true,
  })
}
</script>
