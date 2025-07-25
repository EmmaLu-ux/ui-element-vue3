<script setup>
import { computed, useSlots } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"

defineOptions({
  name: "ue-input",
})
const ns = useNamespace("input")
const slots = useSlots()

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
})

const isPrefix = computed(
  () => props.prefixIcon || props.prefixIconfont || props.prefix
)
const isSuffix = computed(
  () => props.suffixIcon || props.suffixIconfont || props.suffix
)
const isPrepend = computed(() => slots.prepend || props.prepend) // 前置内容
const isAppend = computed(() => slots.append || props.append) // 后置内容
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
      <input
        :disabled="disabled"
        :class="[ns.e('inner')]"
        :placeholder="placeholder"
        :maxlength="maxlength" />
      <!-- 后缀 -->
      <div v-if="isSuffix" :class="[ns.e('fix-wrapper')]">
        <div :class="[ns.e('fix'), ns.e('suffix')]">
          <span v-if="suffix">{{ suffix }}</span>
          <ue-icon v-if="suffixIcon">
            <component :is="suffixIcon" />
          </ue-icon>
          <ue-icon v-if="suffixIconfont">
            <i class="iconfont" :class="suffixIconfont"></i>
          </ue-icon>
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

<style lang="scss" scoped></style>
