<template>
  <button
    :disabled="disabled"
    :style="buttonStyle"
    :class="[
      ns.b(),
      ns.m(type),
      ns.is('round', round),
      ns.is('block', block),
      ns.m('size', buttonGroup?.size?.value || size),
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
      :class="[ns.is('loading', loading)]"></i>
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

const emits = defineEmits(["click"])
const ns = useNamespace("button")

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
  beforeChange: Function,
})
defineOptions({
  name: "ue-button",
})

const buttonGroup = inject("buttonGroupKey", undefined)

const _loading = ref(false)
const isLoading = computed(() => props.loading || _loading.value)
const handleEvent = e => {
  const isFunction =
    Object.prototype.toString.call(props.beforeChange) === "[object Function]"
  // console.log("isFunction", isFunction)
  if (!isFunction) {
    emits("click", e)
    return
  }
  _loading.value = true
  props
    .beforeChange()
    .then(() => {
      _loading.value = false
      console.log("success")
    })
    .catch(() => {
      _loading.value = false
      console.log("error")
    })
}
</script>
<style lang="scss" scoped></style>
