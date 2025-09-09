<template>
  <ue-button type="primary" @click="open">异步确认</ue-button>
  <ue-drawer v-model="visible" title="异步确认" :beforeChange="beforeChange" @ok="onOk">
    点击“确定”后会等待 1.2s 再触发 ok。
  </ue-drawer>
</template>

<script setup>
import { ref } from "vue"

const visible = ref(false)
const open = () => (visible.value = true)

const beforeChange = () =>
  new Promise((resolve) => setTimeout(resolve, 1200))

const onOk = () => (visible.value = false)
</script>

