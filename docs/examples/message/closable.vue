<template>
  <ue-button type="primary" @click="open">可关闭（常驻）</ue-button>
</template>

<script setup>
import { UeMessage } from "flori-ui-vue3"

const open = () => {
  UeMessage({ content: "可以手动关闭的消息", showClose: true, duration: 0 })
}
</script>
