<template>
  <div :class="[ns.b()]"></div>
</template>

<script setup>
import { useNamespace } from "@ui-element-vue3/hooks"

defineOptions({ name: "ue-switch" })
const ns = useNamespace("switch")
</script>
