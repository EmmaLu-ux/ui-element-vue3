<template>
  <component
    :is="tag"
    @click="clickEvent"
    :class="[
      ns.b(),
      ns.is('disabled', isDisabled || isLoading),
      ns.m('size', checkboxSize),
      ns.m(type),
      ns.is('checked', isChecked || indeterminate),
      ns.is('loading', isLoading),
    ]">
    <!-- 视觉元素，多选框框 -->
    <span :class="[ns.e('wrapper')]">
      <!-- 隐藏原生input -->
      <input
        :class="[ns.e('input')]"
        type="checkbox"
        :disabled="isDisabled"
        v-model="model"
        :value="value"
        @change="changeEvent"
        @click.stop />
      <!-- 多选框框的替代 -->
      <span :class="[ns.e('inner'), ns.is('indeterminate', indeterminate)]">
        <template v-if="indeterminate">
          <i :class="[ns.e('indeterminate', indeterminate)]"></i>
        </template>
        <ue-icon v-else>
          <Loading
            v-if="isLoading"
            :class="[`${ns.is('loading-transition', isLoading)}`]" />
          <Check v-else />
        </ue-icon>
      </span>
    </span>
    <!-- chekbox文本 -->
    <span :class="[ns.e('label')]">
      <slot />
    </span>
  </component>
</template>

<script setup>
import { useNamespace } from "@ui-element-vue3/hooks"
import { Check, Loading } from "@ui-element-vue3/icons"
import { useCheckbox } from "../composables"

defineOptions({ name: "ue-checkbox" })
const ns = useNamespace("checkbox")
const emit = defineEmits(["change"])

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
  // 复选框的值
  // NOTE: 如果checkboxGroup的v-model的值（数组）中包含checkbox的value的值，则复选框是选中状态，反之，则相反
  value: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  // 异步操作前可以做的事情的函数
  beforeChange: Function,
  indeterminate: Boolean,
  all: Boolean, //全选组件的标志
})
// 双向绑定数据变量
// NOTE: checkboxModel.value的值与<ue-checkbox></ue-checkbox>的v-model的值同步
const checkboxModel = defineModel({
  type: [String, Number, Boolean],
  default: "",
})

const {
  isDisabled,
  checkboxSize,
  isChecked,
  model,
  changeEvent,
  isLoading,
  clickEvent,
} = useCheckbox({
  props,
  checkboxModel,
})
</script>
