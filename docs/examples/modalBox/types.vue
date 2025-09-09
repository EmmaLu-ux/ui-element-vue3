<template>
  <ue-row :gutter="10">
    <ue-button @click="open('info')">信息</ue-button>
    <ue-button type="success" @click="open('success')">成功</ue-button>
    <ue-button type="warning" @click="open('warning')">警告</ue-button>
    <ue-button type="error" @click="open('error')">错误</ue-button>
  </ue-row>
</template>

<script setup>
import { UeModalBox } from "flori-ui-vue3"

const open = (icon) => {
  UeModalBox({
    title: "提示",
    content: `这是一条 ${icon} 类型提示`,
    icon,
  })
}
</script>

