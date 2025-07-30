<template>
  <section :class="[ns.b(), ns.is('vertical', isVertical)]">
    <slot />
  </section>
</template>

<script setup>
// 子级容器中存在header容器或footer容器，就会使子级容器形成纵向布局
import { computed, useSlots } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"

defineOptions({ name: "ue-container" })
const ns = useNamespace("container")
const slots = useSlots()

const props = defineProps({
  direction: {
    type: String,
    default: "",
  },
})

const isVertical = computed(() => {
  if (props.direction === "vertical") {
    return true
  }
  if (props.direction === "horizontal") {
    return false
  }
  if (slots && slots.default) {
    const slotsNodes = slots.default()
    const tag = slotsNodes.some(nodes =>
      ["ue-header", "ue-footer"].includes(nodes.type.name)
    )
    return tag
  }
  return false
})
</script>
