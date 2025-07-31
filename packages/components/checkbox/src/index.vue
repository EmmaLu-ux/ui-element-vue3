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
      ns.m(type),
      ns.is('checked', true),
    ]">
    <span :class="[ns.e('wrapper')]">
      <input
        :class="[ns.e('input')]"
        type="checkbox"
        :disabled="isDisabled"
        v-model="model" />
      <span :class="[ns.e('inner')]">
        <ue-icon>
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
  type: {
    type: String,
    default: "",
  },
})
// 双向绑定数据变量
// NOTE: checkboxModel.value的值与<ue-checkbox></ue-checkbox>的v-model的值同步
const checkboxModel = defineModel({
  type: [String, Number, Boolean],
  default: "",
})

const { isDisabled, checkboxSize, model } = useCheckbox({
  props,
  checkboxModel,
})
console.log("model", model.value)

// const checkboxGroupKey = inject("checkboxGroupKey", undefined)
</script>
