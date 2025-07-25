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
  <ue-input placeholder="请输入邮箱" :maxlength="3" size="lg"></ue-input>
  <hr />
  <ue-input
    placeholder="请输入邮箱"
    :maxlength="3"
    size="xl"
    :prefix-icon="Search"
    :suffix-icon="Search"></ue-input>
  <hr />
</template>

<script setup>
import { Search } from "@ui-element-vue3/icons"
</script>

<style lang="scss" scoped></style>
