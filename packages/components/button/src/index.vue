<script setup>
import { useNamespace } from "@ui-element-vue3/hooks"

const ns = useNamespace("button")
console.log(ns.e("label"))

const props = defineProps({
  size: {
    type: String,
    default: "default",
  },
  disabled: Boolean,
  loading: Boolean,
})

defineOptions({
  name: "ue-button",
})
</script>

<template>
  <div
    :class="[
      ns.b(),
      ns.m('size', size),
      ns.is('disabled', disabled),
      ns.is('loading', loading),
    ]">
    999
    <div :class="[ns.e('label')]"></div>
    <div :class="[ns.e('content')]"></div>
  </div>
</template>

<style lang="scss" scoped></style>
