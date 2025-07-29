<template>
  <component :is="tag" :class="[ns.b(), classCol]">
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"
defineOptions({ name: "ue-col" })

const ns = useNamespace("col")

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  span: {
    type: Number,
    default: 0,
  },
})
const classCol = computed(() => (props.span ? ns.b(props.span) : ""))
</script>
