<template>
  <ue-input
    v-model="val"
    placeholder="试试键入 / 清空 / 聚焦"
    clearable
    style="max-width: 420px"
    @input="on('input')"
    @clear="on('clear')"
    @focus="on('focus')"
    @blur="on('blur')"
    @change="on('change')"
    @keydown="on('keydown')"
    @keyup="on('keyup')"
    @mouseenter="on('mouseenter')"
    @mouseleave="on('mouseleave')"
  />
</template>

<script setup>
import { ref } from 'vue'
import { UeMessage } from 'flori-ui-vue3'

const val = ref('')
let timer
const on = (name) => {
  clearTimeout(timer)
  timer = setTimeout(() => UeMessage.info(`event: ${name}`), 0)
}
</script>
