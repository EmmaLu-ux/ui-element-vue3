<template>
  <ue-textarea
    :width="600"
    :rows="3"
    v-model="modelValue"
    show-count
    maxlength="400"></ue-textarea>
  <hr />
  <ue-textarea :rows="3" disabled v-model="modelValue"></ue-textarea>
</template>

<script setup>
import { ref } from "vue"

const modelValue = ref(
  "舍得发染发舍得发染发舍得发染发舍得发染发舍得发染发舍得发染发舍得发染发舍得发染发舍得发染发"
)
</script>

<style lang="scss" scoped></style>
