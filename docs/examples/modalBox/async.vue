<template>
  <ue-button type="primary" @click="open">异步确认</ue-button>
</template>

<script setup>
import { UeModalBox, UeMessage } from "flori-ui-vue3"

const open = () => {
  UeModalBox({
    title: "异步处理中",
    content: "点击确定后模拟 1 秒处理并关闭",
    icon: "info",
    beforeChange() {
      return new Promise((resolve) => {
        setTimeout(() => {
          UeMessage.success("处理完成")
          resolve()
        }, 1000)
      })
    },
  })
}
</script>

