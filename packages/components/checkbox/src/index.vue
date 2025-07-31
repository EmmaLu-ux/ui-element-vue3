<template>
  <!-- NOTE: 根据HTML规范，当label标签包含input元素时，点击label内的任何区域（包括文本）都会触发input的点击事件，从而切换复选框状态。
       另外，label标签也可能通过原生属性for的值与原生属性id的值进行关联。
   -->
  <component
    :is="tag"
    :class="[
      ns.b(),
      ns.is('disabled', isDisabled),
      ns.m('size', checkboxSize),
    ]">
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
import { useCheckbox } from "../composables"

defineOptions({ name: "ue-checkbox" })
const ns = useNamespace("checkbox")

const props = defineProps({
  tag: {
    type: String,
    default: "label",
  },
  disabled: Boolean,
  size: {
    type: String,
    default: "sm",
  },
})

const checkboxModel = defineModel()
const { isDisabled, checkboxSize } = useCheckbox({ props, checkboxModel })
</script>
