<template>
  <ue-row :gutter="10">
    <ue-button @click="openA">默认遮罩（可点击关闭）</ue-button>
    <ue-button @click="openB">禁止遮罩点击关闭</ue-button>
  </ue-row>
</template>

<script setup>
import { UeModalBox } from "flori-ui-vue3"

const openA = () => {
  UeModalBox({ title: "默认遮罩", content: "点击遮罩可关闭", icon: "info" })
}

const openB = () => {
  UeModalBox({
    title: "禁止遮罩点击关闭",
    content: "点击遮罩不会关闭该弹窗",
    icon: "warning",
    maskClose: true,
  })
}
</script>

