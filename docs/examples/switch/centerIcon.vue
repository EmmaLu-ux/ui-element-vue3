<template>
  <ue-row :gutter="16" style="align-items: center">
    <ue-switch v-model="a" centerIcon :onIcon="Success" :offIcon="Close" />
    <ue-switch
      v-model="b"
      centerIcon
      type="success"
      :onIcon="Success"
      :offIcon="Error" />
  </ue-row>
</template>

<script setup>
import { ref } from "vue"
// 图标需从子路径导入，而非包根
import { Success, Close, Error } from "flori-ui-vue3/es/icons"
const a = ref(true)
const b = ref(false)
</script>
