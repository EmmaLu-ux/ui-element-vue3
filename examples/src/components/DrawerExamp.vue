<template>
  <ue-button @click="test">打开抽屉</ue-button>
  <ue-drawer v-model="show" title="修改个人信息" @ok="handleSubmit">
    <p>
      content...content...content...content...content...content...content...content...
    </p>
    <p>content...</p>
    <p>content...</p>
    <p>content...</p>
  </ue-drawer>
</template>

<script setup>
import { ref } from "vue"

const show = ref(false)
const test = () => {
  show.value = !show.value
}
const handleSubmit = () => {
  console.log("ok!submit!")
  show.value = false
}
</script>
