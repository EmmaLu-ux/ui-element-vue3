<template>
  <ue-button type="primary" @click="open">保留内部状态</ue-button>
  <ue-drawer v-model="visible" title="不销毁内容" :unmountOnClose="false">
    <div>关闭后再次打开，输入内容将被保留：</div>
    <ue-input v-model="text" placeholder="输入一些文字" style="margin-top: 12px; width: 100%" />
  </ue-drawer>
</template>

<script setup>
import { ref } from "vue"

const visible = ref(false)
const text = ref("")
const open = () => (visible.value = true)
</script>

