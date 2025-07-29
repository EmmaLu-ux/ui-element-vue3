<template>
  <component :is="tag" :class="[ns.b()]">
    <slot />
  </component>
</template>

<script setup>
import { useNamespace } from "@ui-element-vue3/hooks"

defineOptions({ name: "ue-row" })
const ns = useNamespace("row")

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
})
</script>
