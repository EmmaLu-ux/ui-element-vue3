<template>
  <ue-button type="primary" @click="open">监听事件</ue-button>

  <ue-modal
    v-model="visible"
    title="事件演示"
    @open="tip('open')"
    @opened="tip('opened')"
    @close="tip('close')"
    @closed="tip('closed')"
    @cancel="tip('cancel')"
    @ok="onOk"
  >
    打开/关闭生命周期与确定、取消事件都会提示。
  </ue-modal>
</template>

<script setup>
import { ref } from 'vue'
import { UeMessage } from 'flori-ui-vue3'

const visible = ref(false)
const open = () => (visible.value = true)

const tip = (msg) => UeMessage.info(`modal event: ${msg}`)
const onOk = () => {
  tip('ok')
  visible.value = false
}
</script>

