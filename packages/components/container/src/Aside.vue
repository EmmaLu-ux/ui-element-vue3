<template>
  <aside :class="[ns.b()]" :style="[styleWidth, styleBgColor]"><slot /></aside>
</template>

<script setup>
import { computed } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"

defineOptions({
  name: "ue-aside",
})
const ns = useNamespace("aside")
const props = defineProps({
  width: {
    type: String,
    default: "200px",
  },
  bgColor: {
    type: String,
    default: "#D3DCE6",
  },
})

const styleWidth = computed(() => (props.width ? { width: props.width } : {}))
const styleBgColor = computed(
  () => props.bgColor && { backgroundColor: props.bgColor }
)
</script>
