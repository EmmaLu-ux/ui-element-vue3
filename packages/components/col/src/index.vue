<template>
  <component :is="tag" :class="[ns.b(), classCol]" :style="[styleGutter]">
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue"
import { useNamespace, useParent } from "@ui-element-vue3/hooks"
defineOptions({ name: "ue-col" })

const ns = useNamespace("col")
const uParent = useParent("row")

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  span: {
    type: Number,
    default: 0,
  },
  offset: {
    type: Number,
    default: 0,
  },
})
const classCol = computed(() => {
  let className = ns.b(props.span)
  const offset = props.offset ? ns.b(`offset-${props.offset}`) : false
  className = offset ? `${className} ${offset}` : className
  return [ns.b(), className]
})

const styleGutter = computed(() => {
  const gutter = uParent.props("gutter")
  // console.log("gutter", gutter)
  const value = gutter ? gutter / 2 + "px" : null
  return value ? { paddingLeft: value, paddingRight: value } : {}
})
</script>
