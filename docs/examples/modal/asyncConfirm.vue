<template>
  <ue-button type="primary" @click="open">异步确认</ue-button>
  <ue-modal
    v-model="visible"
    title="提交前校验中..."
    :beforeChange="beforeChange"
    @ok="onOk">
    点击“确定”后会进入加载，1.5 秒后成功并触发 ok 事件。
  </ue-modal>
</template>

<script setup>
import { ref } from "vue"

const visible = ref(false)
const open = () => (visible.value = true)

// 返回 Promise，resolve 表示校验/提交成功
const beforeChange = () => new Promise(resolve => setTimeout(resolve, 1500))

// ok 事件触发后手动收起
const onOk = () => (visible.value = false)
</script>
