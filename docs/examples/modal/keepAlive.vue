<template>
  <ue-button @click="open">保留内容状态</ue-button>
  <ue-modal v-model="visible" title="不销毁内容" :unmountOnClose="false">
    关闭后再次打开将保留输入内容：
    <br />
    <ue-input
      v-model="text"
      placeholder="在此输入一些文字"
      style="margin-top: 8px; width: 100%" />
    <div style="margin-top: 12px; color: #888">当前：{{ text }}</div>
  </ue-modal>
</template>

<script setup>
import { ref } from "vue"

const visible = ref(false)
const text = ref("")
const open = () => (visible.value = true)
</script>
