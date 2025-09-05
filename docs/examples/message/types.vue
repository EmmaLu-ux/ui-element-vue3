<template>
  <ue-row :gutter="10">
    <ue-button @click="open('info')">Info</ue-button>
    <ue-button type="success" @click="open('success')">Success</ue-button>
    <ue-button type="warning" @click="open('warning')">Warning</ue-button>
    <ue-button type="error" @click="open('error')">Error</ue-button>
  </ue-row>
</template>

<script setup>
import { UeMessage } from "flori-ui-vue3"

const open = type => {
  UeMessage[type]({ content: `这是一条 ${type} 消息` })
}
</script>
