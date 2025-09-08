<template>
  <ue-textarea
    v-model="val"
    placeholder="试试输入 / 聚焦 / 换行"
    style="max-width: 620px"
    @input="on('input')"
    @focus="on('focus')"
    @blur="on('blur')"
    @change="on('change')"
    @keydown="on('keydown')"
    @keyup="on('keyup')"
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

