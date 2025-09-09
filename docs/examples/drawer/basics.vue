<template>
  <ue-button type="primary" @click="open">打开抽屉</ue-button>
  <ue-drawer v-model="visible" title="基础抽屉" @ok="onOk">
    这里是抽屉内容。
    <br />
    你可以在此放置任意组件或文本。
  </ue-drawer>
 </template>

<script setup>
import { ref } from "vue"

const visible = ref(false)
const open = () => (visible.value = true)
const onOk = () => (visible.value = false)
</script>

