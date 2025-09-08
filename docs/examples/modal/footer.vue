<template>
  <ue-button @click="open">自定义页脚</ue-button>
  <ue-modal v-model="visible" title="自定义页脚示例" :footer="true">
    自定义底部后，可以完全接管按钮与交互。
    <template #footer>
      <ue-button @click="close">我再想想</ue-button>
      <ue-button type="primary" @click="confirm">好的，提交</ue-button>
    </template>
  </ue-modal>
</template>

<script setup>
import { ref } from "vue"

const visible = ref(false)
const open = () => (visible.value = true)
const close = () => (visible.value = false)
const confirm = () => (visible.value = false)
</script>
