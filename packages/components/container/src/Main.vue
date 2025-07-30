<template>
  <main :class="[ns.b()]" :style="[styleBgColor]">
    <slot />
  </main>
</template>

<script setup>
import { computed } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"

defineOptions({
  name: "ue-main",
})
const ns = useNamespace("main")
const props = defineProps({
  bgColor: {
    type: String,
    default: "#E9EEF2",
  },
})

const styleBgColor = computed(() =>
  props.bgColor ? { backgroundColor: props.bgColor } : {}
)
</script>
