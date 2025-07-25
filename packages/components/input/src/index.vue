<script setup>
import { computed, useSlots, ref } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"
import { Eye, EyeOff, ClearFill } from "@ui-element-vue3/icons"

defineOptions({
  name: "ue-input",
})
const ns = useNamespace("input")
const slots = useSlots()
const passwordVisible = ref(false)
const emits = defineEmits(["input", "clear"])
const modelValue = defineModel()

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
  size: {
    type: String,
    default: "sm",
  },
  round: Boolean,
  prefixIcon: {
    type: [String, Object],
    default: "",
  },
  suffixIcon: {
    type: [String, Object],
    default: "",
  },
  prefixIconfont: {
    type: String,
    default: "",
  },
  suffixIconfont: {
    type: String,
    default: "",
  },
  prepend: {
    type: String,
    default: "",
  },
  append: {
    type: String,
    default: "",
  },
  prefix: {
    type: String,
    default: "",
  },
  suffix: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  showPassword: Boolean,
  clearable: Boolean,
  showCount: Boolean,
})

const isPrefix = computed(
  () => props.prefixIcon || props.prefixIconfont || props.prefix
)
const isSuffix = computed(
  () =>
    props.suffixIcon ||
    props.suffixIconfont ||
    props.suffix ||
    props.showPassword ||
    showClear.value ||
    showLimit.value
)
// 是否有前置、后置内容
const isAside = computed(() => {
  return isPrepend.value || isAppend.value
})
const isPrepend = computed(() => slots.prepend || props.prepend) // 前置内容
const isAppend = computed(() => slots.append || props.append) // 后置内容
const passwordIcon = computed(() => (passwordVisible.value ? Eye : EyeOff))
const showClear = computed(
  () =>
    props.clearable && // 配置清除动作
    modelValue.value && // 有值
    !props.disabled && // 未禁用
    props.type === "text" // 类型为text
)
const showLimit = computed(
  () => props.showCount && !props.disabled && props.maxlength
)
const valueLength = computed(() => modelValue.value.length)
const isColorError = computed(
  () =>
    props.maxlength && props.showCount && valueLength.value > props.maxlength
)

const handleInput = event => {
  //   console.log(123, event.target.value)
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
</script>

<template>
  <div
    :class="[
      ns.b(),
      ns.is('disabled', disabled),
      ns.m('size', size),
      ns.is('round', round),
    ]">
    <!-- 前置内容 -->
    <div v-if="isPrepend" :class="[ns.e('aside-wrapper')]">
      <div :class="[ns.e('prepend'), (prepend || append) && ns.e('aside')]">
        <slot v-if="$slots.prepend" name="prepend" />
        <div v-if="prepend">
          {{ prepend }}
        </div>
      </div>
    </div>
    <div
      :class="[
        ns.e('wrapper'),
        ns.is('aside-prepend', isPrepend),
        ns.is('aside-append', isAppend),
        ns.is('aside', isAside),
      ]">
      <!-- 前缀 -->
      <div v-if="isPrefix" :class="[ns.e('fix-wrapper')]">
        <div :class="[ns.e('fix'), ns.e('prefix')]">
          <span v-if="prefix">{{ prefix }}</span>
          <!-- svg图标 -->
          <ue-icon v-if="prefixIcon">
            <component :is="prefixIcon" />
          </ue-icon>
          <!-- iconfont图标 -->
          <ue-icon v-if="prefixIconfont">
            <i class="iconfont" :class="prefixIconfont"></i>
          </ue-icon>
        </div>
      </div>
      <!-- input部分 -->
      <input
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :disabled="disabled"
        :class="[ns.e('inner'), ns.is('color-error', isColorError)]"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :value="modelValue"
        @input="handleInput" />
      <!-- 后缀 -->
      <div v-if="isSuffix" :class="[ns.e('fix-wrapper')]">
        <div :class="[ns.e('fix'), ns.e('suffix')]">
          <template v-if="!showPassword || !showClear || !showLimit">
            <span v-if="suffix">{{ suffix }}</span>
            <ue-icon v-if="suffixIcon">
              <component :is="suffixIcon" />
            </ue-icon>
            <ue-icon v-if="suffixIconfont">
              <i class="iconfont" :class="suffixIconfont"></i>
            </ue-icon>
          </template>
          <ue-icon
            v-if="showPassword"
            class="pointer"
            @click="passwordVisible = !passwordVisible">
            <component :is="passwordIcon" />
          </ue-icon>
          <ue-icon v-if="showClear" class="pointer" @click="handleClear">
            <component :is="ClearFill" />
          </ue-icon>
          <div v-if="showLimit" :class="[ns.e('limit')]">
            {{ valueLength }} / {{ maxlength }}
          </div>
        </div>
      </div>
    </div>
    <!-- 后置内容 -->
    <div v-if="isAppend" :class="[ns.e('aside-wrapper')]">
      <div :class="[ns.e('append'), (prepend || append) && ns.e('aside')]">
        <slot v-if="$slots.append" name="append" />
        <div v-if="append">
          {{ append }}
        </div>
      </div>
    </div>
  </div>
</template>
