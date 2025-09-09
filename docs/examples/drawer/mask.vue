<template>
  <ue-button type="primary" @click="openA">点击遮罩可关闭</ue-button>
  <ue-button @click="openB" style="margin-left: 12px">禁止遮罩点击关闭</ue-button>

  <ue-drawer v-model="showA" title="遮罩可关闭">点击遮罩关闭抽屉。</ue-drawer>
  <ue-drawer v-model="showB" title="禁止遮罩点击关闭" :maskClose="true">
    设置 <code>maskClose</code> 为 <code>true</code> 后，点击遮罩不再关闭。
  </ue-drawer>
</template>

<script setup>
import { ref } from "vue"

const showA = ref(false)
const showB = ref(false)
const openA = () => (showA.value = true)
const openB = () => (showB.value = true)
</script>

