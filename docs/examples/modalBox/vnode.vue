<template>
  <ue-button @click="open">VNode 内容</ue-button>
</template>

<script setup>
import { h } from "vue"
import { UeModalBox } from "flori-ui-vue3"

const open = () => {
  UeModalBox({
    title: "自定义内容",
    content: h(
      "div",
      { style: "line-height:1.8;" },
      [
        "这里可以是任意 VNode，例如：",
        h("div", { style: "color: var(--ue-color-success-6)" }, "• 支持渲染 VNode"),
        h("div", { style: "color: var(--ue-color-warning-6)" }, "• 可组合自定义样式"),
      ]
    ),
    icon: "info",
  })
}
</script>

