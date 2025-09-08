<template>
  <div :class="[ns.b()]" @click="handleSwitch">
    <div
      :class="[
        ns.e('input'),
        ns.m(type),
        ns.is('checked', isChecked),
        ns.m('size', size),
        ns.is('disabled', isDisabled || isLoading),
      ]">
      <input
        type="checkbox"
        v-model="modelValue"
        :checked="isChecked"
        :disabled="isDisabled" />
      <span :class="[ns.e('handle')]">
        <button
          type="button"
          :class="[
            ns.e('button'),
            ns.is('checked', isChecked),
            ns.is('disabled', isDisabled || isLoading),
          ]">
          <template v-if="isLoading">
            <ue-icon :class="ns.e('loading-icon')">
              <Loading :class="[ns.is('loading-transition', isLoading)]" />
            </ue-icon>
          </template>
          <template v-else="centerIcon">
            <ue-icon v-if="onIcon && isChecked">
              <component :is="onIcon" />
            </ue-icon>
            <ue-icon v-if="offIcon && !isChecked">
              <component :is="offIcon" />
            </ue-icon>
          </template>
        </button>
        <span
          :class="[
            ns.e('inner'),
            ns.is('disabled', isDisabled),
            transitionModule,
          ]"
          v-if="!centerIcon">
          <span :class="[ns.e('inner-checked'), ns.is('checked', isChecked)]">
            <span v-if="onLabel">{{ firstChatAt(onLabel) }}</span>
            <ue-icon v-if="onIcon">
              <component :is="onIcon" />
            </ue-icon>
          </span>
          <span
            :class="[ns.e('inner-unchecked'), ns.is('checked', !isChecked)]">
            <span v-if="offLabel">{{ firstChatAt(offLabel) }}</span>
            <ue-icon v-if="offIcon">
              <component :is="offIcon" />
            </ue-icon>
          </span>
        </span>
      </span>
    </div>
  </div>

  <!-- <div :class="[ns.b()]">
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
  </div> -->
</template>

<script setup>
import { computed, ref } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"
import { Loading } from "@ui-element-vue3/icons"
import { types } from "@ui-element-vue3/utils"

defineOptions({ name: "ue-switch" })
const ns = useNamespace("switch")

const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "sm",
  },
  onLabel: {
    type: String,
    default: "",
  },
  offLabel: {
    type: String,
    default: "",
  },
  onIcon: {
    type: [String, Object],
    default: "",
  },
  offIcon: {
    type: [String, Object],
    default: "",
  },
  centerIcon: Boolean,
  disabled: Boolean,
  checkedValue: {
    type: [Boolean, String, Number],
    default: true,
  },
  uncheckedValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  beforeChange: [Function, Promise],
  transition: {
    type: String,
    default: "scale",
  },
})

const isLoading = ref(false)
const modelValue = defineModel()
const emits = defineEmits(["change"])
const isChecked = computed(() => modelValue.value === props.checkedValue)
const isDisabled = computed(() => props.disabled)
const transitionModule = computed(() => `transition-${props.transition}`)
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
const handleSwitch = () => {
  if (isDisabled.value || isLoading.value) return
  const { beforeChange } = props
  // 未传钩子：直接切换
  if (!beforeChange) {
    changeEvent()
    return
  }
  // 统一只调用一次 beforeChange，兼容同步/异步
  const result = beforeChange(props?.params)
  if (types().isPromise(result)) {
    isLoading.value = true
    result
      .then(res => {
        // 返回值为 false 时视为拦截
        if (res !== false) changeEvent()
      })
      .finally(() => {
        isLoading.value = false
      })
  } else {
    // 同步：返回 false 拦截，否则立即切换
    if (result !== false) changeEvent()
  }
}
const changeEvent = () => {
  const val = isChecked.value ? props.uncheckedValue : props.checkedValue
  modelValue.value = val
  // emits("change", val)
}
</script>
