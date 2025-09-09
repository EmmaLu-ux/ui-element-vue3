<template>
  <ue-button type="primary" @click="open">打开确认框</ue-button>
  <ue-button @click="openSimple" style="margin-left: 8px">快速演示</ue-button>
  
</template>

<script setup>
import { UeModalBox } from "flori-ui-vue3"

const open = () => {
  UeModalBox({
    title: "温馨提示",
    content: "确定要执行该操作吗？",
    icon: "warning",
  })
}

const openSimple = () => {
  // 也支持仅传入字符串作为内容
  UeModalBox("这是一条简单的确认")
}
</script>

