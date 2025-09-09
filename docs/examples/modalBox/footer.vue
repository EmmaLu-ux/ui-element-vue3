<template>
  <ue-row :gutter="10">
    <ue-button @click="text">自定义按钮文本</ue-button>
    <ue-button @click="hide">隐藏取消按钮</ue-button>
  </ue-row>
</template>

<script setup>
import { UeModalBox } from "flori-ui-vue3"

const text = () => {
  UeModalBox({
    title: "操作确认",
    content: "确认要保存当前更改吗？",
    confirmButtonText: "保存",
    cancelButtonText: "稍后",
    icon: "info",
  })
}

const hide = () => {
  UeModalBox({
    title: "继续吗？",
    content: "此操作无法撤销。",
    cancelButtonShow: false,
    icon: "warning",
  })
}
</script>

