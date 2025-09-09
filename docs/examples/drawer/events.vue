<template>
  <ue-button type="primary" @click="open">事件监听</ue-button>
  <ue-drawer
    v-model="visible"
    title="事件监听"
    @open="log('open')"
    @opened="log('opened')"
    @close="log('close')"
    @closed="log('closed')"
    @ok="log('ok')"
    @cancel="log('cancel')">
    打开/关闭会在控制台打印事件。
  </ue-drawer>
</template>

<script setup>
import { ref } from "vue"

const visible = ref(false)
const open = () => (visible.value = true)
const log = (e) => console.log(`[drawer] event:`, e)
</script>

