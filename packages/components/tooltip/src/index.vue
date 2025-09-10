<template>
  <div :class="[ns.b()]" ref="tooltipRef" v-on="outerEvents">
    <!-- 触发区域 -->
    <div :class="[ns.e('trigger')]" ref="triggerRef" v-on="events">
      <slot />
    </div>
    <!-- 展示区域 -->
    <div
      v-if="isOpen"
      :class="[ns.e('content'), ns.m('theme', theme)]"
      ref="contentRef">
      <slot name="content">{{ content }}</slot>
      <div :class="[ns.e('arrow')]" data-popper-arrow></div>
    </div>
  </div>
  <!-- <ue-popper ref="popperRef" :role="role">tooltip</ue-popper> -->
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"
import { createPopper } from "@popperjs/core"
import { tooltipProps } from "./tooltip"

defineOptions({ name: "ue-tooltip" })
const ns = useNamespace("tooltip")

const isOpen = ref(false)
const tooltipRef = ref(false)
const triggerRef = ref(null)
const contentRef = ref(null)

const props = defineProps(tooltipProps)
const emits = defineEmits(["visible-change"])

let events = reactive({}) // 多种鼠标事件
let outerEvents = reactive({}) // tooltip出现后，鼠标移动到tooltip上，tooltip也不会消失。鼠标离开整个Tooltip区域才关闭提示
let popperInstance = null
// const props = defineProps(tooltipProps)

// const popperRef = ref(null)
const popperOptions = computed(() => {
  const base = {
    strategy: "fixed",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 9],
        },
      },
      { name: "flip", enabled: false },
      { name: "preventOverflow", enabled: false },
    ],
  }
  return {
    ...base,
    ...(props.popperOptions || {}),
    placement: props.placement,
  }
})

const tooltipOpen = () => {
  isOpen.value = true
  //   popperInstance.update()
  emits("visible-change", true)
}
const tooltipClose = () => {
  isOpen.value = false
  emits("visible-change", false)
}
const handlePopper = () => {}
const attachEvents = () => {
  if (props.trigger === "hover") {
    // tooltipOpen()
    events["mouseenter"] = tooltipOpen
    outerEvents["mouseleave"] = tooltipClose
  } else {
    events["click"] = handlePopper
  }
}
// 没有设置手动触发的情况下
if (!props.manual) {
  attachEvents()
}
watch(
  () => props.manual,
  isManual => {
    if (isManual) {
      events = {}
      outerEvents = {}
    } else {
      attachEvents()
    }
  }
)
watch(
  () => props.trigger,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      events = {}
      outerEvents = {}
      attachEvents()
    }
  }
)
watch(
  isOpen,
  newVal => {
    if (newVal) {
      // 打开状态
      if (triggerRef.value && contentRef.value) {
        popperInstance = createPopper(
          triggerRef.value,
          contentRef.value,
          popperOptions.value
        )
      }
    } else {
      // 关闭状态
      popperInstance?.destroy()
    }
  },
  // 这里需要在 DOM 更新完成之后进行监听
  { flush: "post" }
)
onMounted(() => popperInstance?.destroy())

// React to placement changes while open
watch(
  () => props.placement,
  () => {
    if (popperInstance) {
      popperInstance.setOptions({ placement: props.placement })
      popperInstance.update()
    }
  }
)

// React to popper options changes while open
watch(
  () => props.popperOptions,
  () => {
    if (popperInstance) {
      popperInstance.setOptions({ ...popperOptions.value })
      popperInstance.update()
    }
  },
  { deep: true }
)

defineExpose({ show: tooltipOpen, hide: tooltipClose })
</script>
