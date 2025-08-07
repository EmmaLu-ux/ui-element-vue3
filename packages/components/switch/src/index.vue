<template>
  <div :class="[ns.b()]">
    <div
      :class="[
        ns.e('input'),
        ns.m(type),
        ns.m('size', size),
        ns.is('disabled', isDisabled),
        ns.is('checked', isChecked),
      ]">
      <input type="checkbox" :disabled="isDisabled" />
      <span :class="[ns.e('handle')]">
        <button
          type="button"
          :class="[
            ns.e('button'),
            ns.is('checked', isChecked),
            ns.is('disabled', isDisabled),
          ]">
          <template v-if="centerIcon">
            <ue-icon v-if="checkedIcon && isChecked">
              <component :is="checkedIcon" />
            </ue-icon>
            <ue-icon v-if="uncheckedIcon && !isChecked">
              <component :is="uncheckedIcon" />
            </ue-icon>
          </template>
        </button>
        <span :class="[ns.e('inner')]" v-if="!centerIcon">
          <span :class="[ns.e('inner-checked')]">
            <span v-if="onLabel"> {{ firstChatAt(onLabel) }}</span>
            <ue-icon v-if="checkedIcon">
              <component :is="checkedIcon" />
            </ue-icon>
          </span>
          <span :class="[ns.e('inner-unchecked')]">
            <span v-if="offLabel"> {{ firstChatAt(offLabel) }}</span>
            <ue-icon v-if="uncheckedIcon">
              <component :is="uncheckedIcon" />
            </ue-icon>
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
  checkedIcon: {
    type: [String, Object],
    default: "",
  },
  uncheckedIcon: {
    type: [String, Object],
    default: "",
  },
  centerIcon: Boolean,
  //   checked: Boolean,
})
const isChecked = computed(() => true)
const isDisabled = computed(() => props.disabled)

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
