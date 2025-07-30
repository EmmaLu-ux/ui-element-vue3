<template>
  <component :is="tag" :class="[ns.b(), ns.m(type), ns.is('checked', true)]">
    <span :class="[ns.e('wrapper')]">
      <input :class="[ns.e('input')]" type="checkbox" />
      <span :class="[ns.e('inner')]">
        <ue-icon size="11">
          <Check />
        </ue-icon>
      </span>
    </span>
    <span :class="[ns.e('label')]">
      <slot />
    </span>
  </component>
</template>

<script setup>
import { useNamespace } from "@ui-element-vue3/hooks"
import { Check } from "@ui-element-vue3/icons"

defineOptions({ name: "ue-checkbox" })
const ns = useNamespace("checkbox")

const props = defineProps({
  tag: {
    type: String,
    default: "label",
  },
  type: {
    type: String,
    default: "",
  },
})
</script>
