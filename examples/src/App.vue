<script setup>
// import ButtonExamples from "./components/ButtonExamples.vue"
// import ButtonGroupExp from "./components/ButtonGroupExp.vue"
// import IconExamp from "./components/IconExamp.vue"
// import InputExamp from "./components/InputExamp.vue"
// import TextareaExamp from "./components/TextareaExamp.vue"
// import RowandColExamp from "./components/RowandColExamp.vue"
// import LayoutExamp from "./components/LayoutExamp.vue"
// import CheckBoxExamp from "./components/CheckBoxExamp.vue"
// import SwitchExamp from "./components/SwitchExamp.vue"
// import FormExamp from "./components/FormExamp.vue"
// import MessageExamp from "./components/MessageExamp.vue"
// import { UeButton } from "flori-ui-vue3"
/** 全局方法 */
// import { getCurrentInstance } from "vue"
// const { appContext } = getCurrentInstance()
// const test = () => {
//   appContext.config.globalProperties.$message()
//   console.log(appContext.config.globalProperties.$message._context) // // 访问Vue3实例
// }
/** 按需加载 */
import { UeMessage } from "@ui-element-vue3/components"
const test = () => {
  // UeMessage({
  //   type: "error",
  //   background: true,
  //   onClose: () => {
  //     console.log("关闭了")
  //   },
  //   // showClose: true,
  //   content: "这是一条消息提示",
  //   // duration: 1000,
  // })
  UeMessage.success("这是一条成功消息提示")
  UeMessage.info("这是一条信息消息提示")
  UeMessage.warning("这是一条警告消息提示")
  UeMessage.error("这是一条错误消息提示")
  console.log("UeMessage", UeMessage._context) // 访问Vue3实例
}
</script>

<template>
  <!-- <UeButton type="primary">Primary Button</UeButton> -->
  <!-- <IconExamp></IconExamp> -->
  <!-- <ButtonExamples></ButtonExamples> -->
  <!-- <ButtonGroupExp></ButtonGroupExp> -->
  <!-- <InputExamp></InputExamp> -->
  <!-- <TextareaExamp></TextareaExamp> -->
  <!-- <RowandColExamp></RowandColExamp> -->
  <!-- <LayoutExamp></LayoutExamp> -->
  <!-- <CheckBoxExamp></CheckBoxExamp> -->
  <!-- <SwitchExamp></SwitchExamp> -->
  <!-- <FormExamp></FormExamp> -->
  <!-- <MessageExamp></MessageExamp> -->
  <ue-button @click="test">消息提示</ue-button>
</template>

<style scoped></style>
