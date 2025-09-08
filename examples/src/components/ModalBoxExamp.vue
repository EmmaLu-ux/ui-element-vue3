<template>
  <ue-button @click="test">消息提示</ue-button>
</template>

<script setup>
import { h } from "vue"
import { UeModalBox } from "@ui-element-vue3/components"

const test = () => {
  //   UeModalBox({ content: "modalBox内容", title: "这是标题" })
  UeModalBox({
    title: "这是标题",
    content: h("div", { style: "color: red" }, "这是描述内容..."),
  })
}
</script>
