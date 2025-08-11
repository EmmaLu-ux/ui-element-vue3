<template>
  <component
    :is="tag"
    :class="[ns.b(), ns.is(`justify-${justify}`, !!justify)]"
    :style="[styleMargin, styleRowGap]">
    <slot />
  </component>
</template>

<script setup>
import { computed, provide } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"

defineOptions({ name: "ue-row" })
const ns = useNamespace("row")

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  gutter: {
    type: [String, Number],
    default: 0,
  },
  justify: {
    type: String,
    default: "",
  },
  gap: {
    type: Number,
    default: 0,
  },
})

// 为子元素提供 gutter 值
provide(
  "ue-row-gutter",
  computed(() => props.gutter)
)

const styleMargin = computed(() => {
  const gutter = props.gutter
  const value = gutter ? -gutter / 2 + "px" : null
  return value ? { marginLeft: value, marginRight: value } : {}
})

const styleRowGap = computed(() =>
  props.gap ? { "row-gap": `${props.gap}px` } : {}
)
</script>
