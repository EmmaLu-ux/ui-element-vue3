<template>
  <ue-button @click="openA">默认遮罩（可点击关闭）</ue-button>
  <ue-button @click="openB">禁用遮罩点击关闭</ue-button>

  <!-- 默认：点击遮罩会关闭 -->
  <ue-modal v-model="showA" title="默认遮罩">
    点击遮罩可关闭当前对话框。
  </ue-modal>

  <!-- 通过 maskClose 禁止点击遮罩关闭 -->
  <ue-modal v-model="showB" title="禁止遮罩点击关闭" :maskClose="true">
    设置 <code>maskClose</code> 为 <code>true</code> 后，点击遮罩不再关闭。
  </ue-modal>
</template>

<script setup>
import { ref } from "vue"

const showA = ref(false)
const showB = ref(false)

const openA = () => (showA.value = true)
const openB = () => (showB.value = true)
</script>
