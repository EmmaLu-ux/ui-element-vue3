<template>
  <ue-popper>tooltip</ue-popper>
</template>

<script setup>
import { useNamespace } from "@ui-element-vue3/hooks"

defineOptions({ name: "ue-tooltip" })
const ns = useNamespace("tooltip")
</script>
