<template>
  <ue-row :gutter="10">
    <ue-button type="primary" @click="openOnce">偏移 80px</ue-button>
    <ue-button @click="openStack">连续弹出 3 条</ue-button>
  </ue-row>
</template>

<script setup>
import { UeMessage } from "flori-ui-vue3"

const openOnce = () => {
  UeMessage({ content: "我距离顶部 80px", offset: 80 })
}
const openStack = () => {
  const types = ["info", "success", "warning"]
  types.forEach((t, i) => {
    UeMessage[t]({
      content: `第 ${i + 1} 条 ${t}`,
      offset: Number(`${80 + i * 45}`),
    })
  })
}
</script>
