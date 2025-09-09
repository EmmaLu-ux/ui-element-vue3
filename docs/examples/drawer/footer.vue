<template>
  <ue-button type="primary" @click="open">自定义页脚</ue-button>
  <ue-drawer v-model="visible" title="自定义页脚" :footer="true">
    可以通过 footer 插槽自定义底部内容。
    <template #footer>
      <ue-button @click="visible = false">关闭</ue-button>
      <ue-button type="primary" @click="submit">保存</ue-button>
    </template>
  </ue-drawer>
</template>

<script setup>
import { ref } from "vue"

const visible = ref(false)
const open = () => (visible.value = true)
const submit = () => {
  // 模拟提交
  visible.value = false
}
</script>

