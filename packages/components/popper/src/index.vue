<template>
  <slot />
</template>

<script setup>
import { ref, computed, provide } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"
import { POPPER_INJECTION_KEY } from "./constants"
import { popperProps } from "./popper"

defineOptions({ name: "ue-popper", inheritAttrs: false })
const ns = useNamespace("popper")

const props = defineProps(popperProps)

const triggerRef = ref()
const popperInstanceRef = ref()
const contentRef = ref()
const referenceRef = ref()
const role = computed(() => props.role)

const popperProvides = {
  triggerRef,
  popperInstanceRef,
  contentRef,
  referenceRef,
  role,
}

defineExpose(popperProvides)
provide(POPPER_INJECTION_KEY, popperProvides)
</script>
