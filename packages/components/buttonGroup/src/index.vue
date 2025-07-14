<script setup>
import { provide, toRefs } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"

const ns = useNamespace("button-group")

defineOptions({
  name: "ue-button-group",
})

const props = defineProps({
  size: {
    type: String,
    default: "md",
  },
})

provide("buttonGroupKey", { ...toRefs(props) }) // 使props具备响应式
</script>

<template>
  <div :class="[ns.b()]"><slot></slot></div>
</template>

<style lang="scss" scoped></style>
