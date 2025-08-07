<template>
  <div
    :class="[
      ns.b(),
      ns.m(type),
      ns.m('size', size),
      ns.is('disabled', disabled),
      ns.is('checked', isChecked),
    ]">
    <div :class="[ns.e('input')]">
      <input type="checkbox" :disabled="disabled" />
      <span :class="[ns.e('handle')]">
        <button
          type="button"
          :class="[
            ns.e('button'),
            ns.is('checked', isChecked),
            ns.is('disabled', disabled),
          ]"></button>
        <span :class="[ns.e('inner')]">
          <span :class="[ns.e('inner-checked')]">
            <span v-if="onLabel"> {{ firstChatAt(onLabel) }}</span>
          </span>
          <span :class="[ns.e('inner-unchecked')]">
            <span v-if="offLabel"> {{ firstChatAt(offLabel) }}</span>
          </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"

defineOptions({ name: "ue-switch" })
const ns = useNamespace("switch")

const props = defineProps({
  size: {
    type: String,
    default: "sm",
  },
  disabled: Boolean,
  type: {
    type: String,
    default: "primary",
  },
  onLabel: {
    type: String,
    default: "",
  },
  offLabel: {
    type: String,
    default: "",
  },
  //   checked: Boolean,
})
const isChecked = computed(() => true)
// const isDisabled = computed(() => props.disabled)

const firstChatAt = str => {
  const value = str.trim()
  if (!value) return ""

  // 判断是否包含中文字符
  const hasChinese = /[\u4e00-\u9fa5]/.test(value)

  if (hasChinese) {
    // 如果包含中文，只返回第一个字符
    return value.charAt(0)
  } else {
    // 如果是英文，最多返回3个字符
    return value.slice(0, 3)
  }
}
</script>
