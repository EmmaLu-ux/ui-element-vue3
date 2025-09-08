<template>
  <ue-button @click="open600">宽度 600px</ue-button>
  <ue-button @click="openNatural">自然高度（fixedScreen=false）</ue-button>

  <ue-modal v-model="show600" title="600px 宽度" width="600">
    通过 <code>width</code> 设置宽度为 600px。
  </ue-modal>

  <ue-modal v-model="showNatural" title="自然高度布局" :fixedScreen="false">
    关闭 fixedScreen 后，内容按自然高度铺开。
    <br />
    <br />
    这里放一些占位内容：
    <br />
    • 文字 A
    <br />
    • 文字 B
    <br />
    • 文字 C
  </ue-modal>
</template>

<script setup>
import { ref } from "vue"

const show600 = ref(false)
const showNatural = ref(false)

const open600 = () => (show600.value = true)
const openNatural = () => (showNatural.value = true)
</script>
