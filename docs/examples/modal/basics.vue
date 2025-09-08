<template>
  <ue-button type="primary" @click="open">打开对话框</ue-button>
  <ue-modal v-model="visible" title="基础对话框" @ok="onOk">
    这里是对话框内容。
    <br />
    你可以在此放置任意组件或文本。
  </ue-modal>
</template>

<script setup>
import { ref } from "vue"

const visible = ref(false)
const open = () => (visible.value = true)
const onOk = () => (visible.value = false)
</script>
