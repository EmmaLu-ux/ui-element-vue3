<template>
  <button
    :type="nativeType"
    :disabled="disabled || isLoading"
    :aria-disabled="(disabled || isLoading) ? 'true' : 'false'"
    :aria-busy="isLoading ? 'true' : 'false'"
    :style="buttonStyle"
    :class="[
      ns.b(),
      ns.m(type),
      ns.is('round', round),
      ns.is('block', block),
      ns.m('size', controlSize),
      ns.is('circle', circle),
      ns.is('subtle', subtle),
      ns.is('link', link),
      ns.is('outline', outline),
      ns.is('dashed', dashed),
      ns.is('disabled', isLoading || disabled),
    ]"
    @click="handleEvent">
    <i
      v-if="isLoading"
      class="iconfont icon-loading is-loading-transition"
      :class="[ns.is('loading', isLoading)]"></i>
    <i
      v-if="!isLoading && prefix"
      class="iconfont"
      :class="[ns.e('icon'), prefix]"></i>
    <span>
      <slot></slot>
    </span>
    <i v-if="suffix" class="iconfont" :class="[ns.e('icon'), suffix]"></i>
  </button>
</template>

<script setup>
import { ref, computed, inject } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"
import { useFormItem } from "@ui-element-vue3/components"

const emits = defineEmits(["click"])
const ns = useNamespace("button")
const { formContent } = useFormItem()

// 获取父级 Row 组件的 gutter 值
const gutter = inject(
  "ue-row-gutter",
  computed(() => 0)
)
const buttonStyle = computed(() => {
  const gutterValue = gutter.value
  return gutterValue
    ? {
        marginLeft: gutterValue / 2 + "px",
        marginRight: gutterValue / 2 + "px",
      }
    : {}
})

const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  /**
   * Native button type attribute to avoid unintended form submit.
   * Does not affect visual style (use `type` above for variants).
   */
  nativeType: {
    type: String,
    default: "button", // 'button' | 'submit' | 'reset'
  },
  round: Boolean,
  disabled: Boolean,
  subtle: Boolean,
  link: Boolean,
  block: Boolean,
  outline: Boolean,
  dashed: Boolean,
  size: {
    type: String,
    default: "sm", // sm, md, lg, xl
  },
  circle: Boolean,
  prefix: {
    type: String,
    default: "",
  },
  suffix: {
    type: String,
    default: "",
  },
  loading: Boolean,
  /**
   * Hook before click emit. Return false to cancel; return Promise to handle async.
   * Signature: (evt) => boolean | void | Promise<boolean | void>
   */
  beforeChange: Function,
})
defineOptions({
  name: "ue-button",
})

const buttonGroup = inject("buttonGroupKey", undefined)

const _loading = ref(false)
const isLoading = computed(() => props.loading || _loading.value)
const controlSize = computed(
  () => formContent?.size?.value || buttonGroup?.size?.value || props.size
)

const isCallable = (fn) => Object.prototype.toString.call(fn) === "[object Function]"

const handleEvent = async (e) => {
  // Guard against interaction when disabled/loading
  if (disabledGuard.value) return

  const hasBefore = isCallable(props.beforeChange)
  if (!hasBefore) {
    emits("click", e)
    return
  }

  try {
    _loading.value = true
    const result = props.beforeChange(e)
    const awaited = result && typeof result.then === "function" ? await result : result
    // If explicitly returned false, cancel emit
    if (awaited === false) return
    emits("click", e)
  } catch (err) {
    // Swallow errors but stop emit
    // console.error('beforeChange error', err)
  } finally {
    _loading.value = false
  }
}

const disabledGuard = computed(() => props.disabled || isLoading.value)
</script>
<style lang="scss" scoped></style>
