<template>
  <ue-button type="primary" @click="open">打开消息</ue-button>
</template>

<script setup>
// 从已在 VitePress 中注册的同一实例导入，确保继承 app 上下文
import { UeMessage } from "flori-ui-vue3"

const open = () => {
  UeMessage.info("这是一条信息消息")
}
</script>
