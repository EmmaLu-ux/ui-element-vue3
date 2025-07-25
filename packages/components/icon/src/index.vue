<template>
  <i :class="[ns.b(), $attrs.class]" :style="[styleSize, styleColor]">
    <slot></slot>
  </i>
</template>

<script setup>
import { computed } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"
import { useStyle } from "@ui-element-vue3/hooks"

const ns = useNamespace("icon")
const uStyle = useStyle()
defineOptions({
  name: "ue-icon",
})

const props = defineProps({
  size: {
    type: [String, Number],
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
})

const styleSize = computed(() => uStyle.fontSize(props.size))
const styleColor = computed(() => uStyle.color(props.color))
</script>

<style lang="scss" scoped></style>
