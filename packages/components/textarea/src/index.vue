<script setup>
import { computed, ref, shallowRef } from "vue"
import {
  useNamespace,
  useStyle,
  useEvent,
  useExpose,
} from "@ui-element-vue3/hooks"

defineOptions({ name: "ue-textarea" })
const ns = useNamespace("textarea")
const modelValue = defineModel()
const uStyle = useStyle()
const _ref = shallowRef(null)

const {
  isFocus,
  focusEvent,
  blurEvent,
  mouseEnterEvent,
  mouseLeaveEvent,
  isComposition,
  compositionStartEvent,
  compositionUpdateEvent,
  compositionEndEvent,
  changeEvent,
  keydownEvent,
  keyupEvent,
} = useEvent()
const { focusExpose, blurExpose, selectExpose } = useExpose(_ref)
const emits = defineEmits([
  "input",
  "clear",
  "focus",
  "blur",
  "mouseenter",
  "mouseleave",
  "compositionstart",
  "compositionupdate",
  "compositionend",
  "change",
  "keydown",
  "keyup",
])
const props = defineProps({
  disabled: Boolean,
  placeholder: {
    type: String,
    default: "请输入内容",
  },
  maxlength: {
    type: [Number, String],
    default: "",
  },
  showCount: Boolean,
  width: {
    type: String,
    default: "100%",
  },
  rows: {
    type: [String, Number],
    default: "",
  },
})
const showLimit = computed(
  () => props.showCount && !props.disabled && props.maxlength
)
const valueLength = computed(() => modelValue.value.length)
const isColorError = computed(
  () =>
    props.maxlength && props.showCount && valueLength.value > props.maxlength
)
const styleWidth = computed(() => uStyle.width(props.width))

const handleInput = event => {
  //   console.log(123, event.target.value)
  if (isComposition.value) {
    return false
  }
  const value = event.target.value
  modelValue.value = value
  emits("input", value, event) // 发布input事件
}
const handleClear = () => {
  modelValue.value = ""
  emits("input", "")
  emits("clear")
  // focusExpose() // 自动聚焦
}
// 输入法事件
const handleCompositionEnd = e => {
  compositionEndEvent(e).then(() => {
    handleInput(e)
  })
}
// NOTE: defineExpose: 将子组件中的任何内部状态或方法暴露给父组件，从而使父组件能够访问子组件内部的状态和方法。有助于降低组件间的耦合度。
defineExpose({
  ref: _ref,
  select: selectExpose,
  focus: focusExpose,
  blur: blurExpose,
  clear: handleClear,
})
</script>

<template>
  <div
    :class="[ns.b()]"
    :style="[styleWidth]"
    @mouseenter="mouseEnterEvent"
    @mouseleave="mouseLeaveEvent">
    <!-- textarea部分 -->
    <textarea
      ref="_ref"
      :disabled="disabled"
      :class="[
        ns.e('inner'),
        ns.is('color-error', isColorError),
        ns.is('focus', isFocus),
        ns.is('disabled', disabled),
      ]"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="modelValue"
      :rows="rows"
      @input="handleInput"
      @focus="focusEvent"
      @blur="blurEvent"
      @compositionstart="compositionStartEvent"
      @compositionupdate="compositionUpdateEvent"
      @compositionend="handleCompositionEnd"
      @change="changeEvent"
      @keydown="keydownEvent"
      @keyup="keyupEvent" />
    <!-- TODO: 显示字数div改成用伪类::after实现 -->
    <div v-if="showLimit" :class="[ns.e('limit')]">
      {{ valueLength }} / {{ maxlength }}
    </div>
  </div>
</template>
