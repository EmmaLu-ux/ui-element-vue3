<template>
  <ue-input placeholder="请输入邮箱" :maxlength="3">
    <!-- 前置内容 -->
    <template #prepend>
      <!-- NOTE: 需要手动设置按钮大小，以达到与input大小一致 -->
      <ue-button type="default" prefix="icon-search1"></ue-button>
    </template>
    <!-- 后置内容 -->
    <template #append>
      <ue-button type="primary">后置按钮</ue-button>
    </template>
  </ue-input>
  <hr />
  <ue-input placeholder="请输入邮箱" :maxlength="3" size="md">
    <!-- 前置内容 -->
    <template #prepend>
      <ue-button type="default" prefix="icon-search1" size="md"></ue-button>
    </template>
    <!-- 后置内容 -->
    <template #append>
      <ue-button type="primary" size="md">后置按钮</ue-button>
    </template>
  </ue-input>
  <hr />
  <ue-input placeholder="请输入邮箱" :maxlength="3" size="lg">
    <!-- 前置内容 -->
    <template #prepend>
      <ue-button type="default" prefix="icon-search1" size="lg"></ue-button>
    </template>
    <!-- 后置内容 -->
    <template #append>
      <ue-button type="primary" size="lg">后置按钮</ue-button>
    </template>
  </ue-input>
  <hr />
  <ue-input placeholder="请输入邮箱" :maxlength="3" size="xl">
    <!-- 前置内容 -->
    <template #prepend>
      <ue-button type="default" prefix="icon-search1" size="xl"></ue-button>
    </template>
    <!-- 后置内容 -->
    <template #append>
      <ue-button type="primary" size="xl">后置按钮</ue-button>
    </template>
  </ue-input>
  <hr />
  <ue-input
    placeholder="请输入邮箱"
    prepend="https://"
    append=".com"
    size="sm"></ue-input>
  <hr />
  <ue-input
    placeholder="请输入邮箱"
    :maxlength="3"
    size="sm"
    prefix="¥"
    suffix="RMB"></ue-input>
  <hr />
  <ue-input
    placeholder="请输入邮箱"
    :maxlength="3"
    size="md"
    round
    :prefix-icon="Search"
    :suffix-icon="Search"
    disabled></ue-input>
  <hr />
  <ue-input
    placeholder="请输入密码"
    :maxlength="12"
    size="lg"
    type="password"
    show-password></ue-input>
  <hr />
  <ue-input
    placeholder="请输入内容"
    :maxlength="12"
    size="lg"
    clearable
    :prefix-icon="Search"
    v-model="inputValue"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @compositionstart="handleCompositionStart"
    @compositionupdate="handleCompositionUpdate"
    @compositionend="handleCompositionEnd"
    @change="handleChange"
    @keydown="handleKeyDown"
    @keyup="handleKeyUp"
    ref="inputRef"></ue-input>
  <!-- 通过@input的形式订阅input事件 -->
  <div>双向绑定数据：{{ inputValue }}</div>
  <hr />
  <ue-input
    placeholder="请输入内容"
    :maxlength="5"
    size="xl"
    width="300"
    showCount
    :prefix-icon="Search"
    v-model="inputValue1"
    @input="handleInput1"></ue-input>
</template>

<script setup>
import { Search } from "@ui-element-vue3/icons"
import { ref, onMounted } from "vue"

const inputValue = ref("这是一个inputValue")
const inputRef = ref(null)
onMounted(() => {
  inputRef.value.select()
})

const handleInput = (value, event) => {
  console.log("recieved from child: ", value, event)
}
const handleFocus = e => {
  console.log("获取焦点", e)
}
const handleBlur = e => {
  console.log("失去焦点", e)
}
const handleMouseEnter = e => {
  console.log("鼠标移入", e)
}
const handleMouseLeave = e => {
  console.log("鼠标移出", e)
}
const handleCompositionStart = e => {
  console.log("compositionstart", e)
}
const handleCompositionUpdate = e => {
  console.log("compositionupdate", e)
}
const handleCompositionEnd = e => {
  console.log("compositionend", e)
}
const handleChange = e => {
  console.log("change", e)
}
const handleKeyDown = e => {
  console.log("keydown", e)
}
const handleKeyUp = e => {
  console.log("keyup", e)
}
const inputValue1 = ref("")
const handleInput1 = (value, event) => {
  //   console.log("recieved from child: ", value, event)
}
</script>

<style lang="scss" scoped></style>
