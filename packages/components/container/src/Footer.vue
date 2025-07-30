<template>
  <footer :class="[ns.b()]" :style="[styleHeight, styleBgColor]">
    <slot />
  </footer>
</template>

<script setup>
import { computed } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"

defineOptions({ name: "ue-footer" })
const ns = useNamespace("footer")

const props = defineProps({
  height: {
    type: String,
    default: "60px",
  },
  bgColor: {
    type: String,
    default: "#B2C0D1",
  },
})
const styleHeight = computed(() =>
  props.height ? { height: props.height } : {}
)
const styleBgColor = computed(
  () => props.bgColor && { backgroundColor: props.bgColor }
)
</script>
