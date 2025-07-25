<template>
  <ue-input placeholder="请输入邮箱" :maxlength="3">
    <!-- 前置内容 -->
    <template #prepend>
      <ue-button type="default" prefix="icon-search1"></ue-button>
    </template>
    <!-- 后置内容 -->
    <template #append>
      <ue-button type="primary">后置按钮</ue-button>
    </template>
  </ue-input>
  <hr />
  <ue-input
    placeholder="请输入邮箱"
    prepend="https://"
    append=".com"></ue-input>
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
    placeholder="请输入邮箱"
    :maxlength="12"
    size="xl"
    :prefix-icon="Search"
    :suffix-icon="Search"
    v-model="inputValue"
    @input="handleInput"></ue-input>
  <!-- 通过@input的形式订阅input事件 -->
  <div>双向绑定数据：{{ inputValue }}</div>
  <hr />
</template>

<script setup>
import { Search } from "@ui-element-vue3/icons"
import { ref } from "vue"

const inputValue = ref("")
const handleInput = (value, event) => {
  //   console.log("recieved from child: ", value, event)
}
</script>

<style lang="scss" scoped></style>
