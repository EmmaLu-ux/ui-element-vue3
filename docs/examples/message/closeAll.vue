<template>
  <ue-row :gutter="10">
    <ue-button type="primary" @click="openBatch">批量打开</ue-button>
    <ue-button type="warning" @click="closeAll">关闭全部</ue-button>
  </ue-row>
</template>

<script setup>
import { getCurrentInstance } from "vue"
const { proxy } = getCurrentInstance()

const openBatch = () => {
  proxy.$message.info({ content: "Info 消息", offset: 40 })
  proxy.$message.success({ content: "Success 消息", offset: 85 })
  proxy.$message.warning({ content: "Warning 消息", offset: 130 })
}
const closeAll = () => {
  proxy.$message.closeAll()
}
</script>
