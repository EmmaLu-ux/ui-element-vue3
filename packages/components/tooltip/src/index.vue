<template>
  <div :class="[ns.b()]" ref="tooltipRef" v-on="outerEvents">
    <!-- 触发区域 -->
    <div :class="[ns.e('trigger')]" ref="triggerRef" v-on="events">
      <slot />
    </div>
    <!-- 展示区域 -->
    <div
      v-show="isOpen"
      :class="[ns.e('content'), ns.m('theme', theme)]"
      :style="contentStyle"
      ref="contentRef">
      <slot name="content">{{ content }}</slot>
      <!-- NOTE: Popper 将自动拾取 data-popper-arrow 标记的元素并将其定位，伪类相对于.arrow元素的定位 -->
      <div :class="[ns.e('arrow')]" data-popper-arrow></div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, reactive, ref, watch } from "vue"
import { useNamespace, useOutsideClick } from "@ui-element-vue3/hooks"
import { createPopper } from "@popperjs/core"
import { tooltipProps } from "./tooltip"

defineOptions({ name: "ue-tooltip" })
const ns = useNamespace("tooltip")

const isOpen = ref(false)
const tooltipRef = ref(null)
const triggerRef = ref(null)
const contentRef = ref(null)

const props = defineProps(tooltipProps)
const emits = defineEmits(["visible-change"])

let events = ref({}) // 多种鼠标事件
let outerEvents = ref({}) // tooltip出现后，鼠标移动到tooltip上，tooltip也不会消失。鼠标离开整个Tooltip区域才关闭提示
let popperInstance = null
// const props = defineProps(tooltipProps)

// const popperRef = ref(null)
const popperOptions = computed(() => {
  const base = {
    strategy: "fixed", // 定位策略，默认是 absolute
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 15],
        },
      },
      {
        // 固定箭头在 -start/-end 时靠对应边缘对齐，而不是默认对齐到触发元素中心
        name: "edgeAlignArrow",
        enabled: true,
        phase: "main", // 在 main 阶段运行，早于 beforeWrite/写样式，read/main/write
        requires: ["arrow", "popperOffsets"], // 引用的是其他modifier的name
        fn({ state }) {
          const arrowEl = state.elements.arrow
          if (!arrowEl) return
          const [side, variation] = state.placement.split("-") // e.g. 'top', 'start'
          if (!variation) return

          const isVertical = side === "top" || side === "bottom"
          const EDGE = 8
          const aw = arrowEl.offsetWidth || 9
          const ah = arrowEl.offsetHeight || 9

          if (isVertical) {
            // top/bottom：沿水平副轴定位
            state.modifiersData.arrow.x =
              variation === "start"
                ? EDGE
                : state.rects.popper.width - aw - EDGE
          } else {
            // left/right：沿垂直副轴定位
            state.modifiersData.arrow.y =
              variation === "start"
                ? EDGE
                : state.rects.popper.height - ah - EDGE
          }
        },
      },
      {
        // 箭头自动定位，无需额外scss
        name: "arrow",
        options: {
          element: "[data-popper-arrow]",
        },
      },
      //靠近视口边界时可能被遮挡或出界,让其自动调整
      { name: "flip" },
      {
        name: "preventOverflow",
        options: {
          boundary: "viewport",
          padding: 8,
        },
      },
    ],
  }
  return {
    ...base,
    ...(props.popperOptions || {}),
    placement: props.placement,
  }
})

// 自定义主题颜色
const contentStyle = computed(() => {
  const style = {}
  if (props.bgColor) style["--ue-tooltip-bg"] = props.bgColor
  if (props.textColor) style.color = props.textColor
  return style
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
// 通用外部点击关闭（捕获阶段）
const { start: bindOutside, stop: unbindOutside } = useOutsideClick(
  () => tooltipRef.value,
  () => tooltipClose(),
  { capture: true }
)
// 切换显示/隐藏，并在点击外部时关闭
const handlePopper = e => {
  e?.stopPropagation?.()
  if (isOpen.value) {
    tooltipClose()
    unbindOutside()
  } else {
    tooltipOpen()
    bindOutside()
  }
}
const attachEvents = () => {
  if (props.trigger === "hover") {
    events.value["mouseenter"] = tooltipOpen
    events.value["focusin"] = tooltipOpen
    events.value["focusout"] = tooltipClose
    outerEvents.value["mouseleave"] = tooltipClose
  } else {
    events.value["click"] = handlePopper
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
      events.value = {}
      outerEvents.value = {}
    } else {
      attachEvents()
    }
  }
)
watch(
  () => props.trigger,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      events.value = {}
      outerEvents.value = {}
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
        console.log("popperInstance", popperInstance)
      }
    } else {
      // 关闭状态
      popperInstance?.destroy()
    }
  },
  // 这里需要在 DOM 更新完成之后进行监听
  { flush: "post" }
)
onUnmounted(() => {
  popperInstance?.destroy()
  popperInstance = null
})

// React to placement changes while open
// watch(
//   () => props.placement,
//   () => {
//     if (popperInstance) {
//       popperInstance.setOptions({ placement: props.placement })
//       popperInstance.update()
//     }
//   }
// )

// // React to popper options changes while open
// watch(
//   () => props.popperOptions,
//   () => {
//     if (popperInstance) {
//       popperInstance.setOptions({ ...popperOptions.value }) // 更新popper实例的options配置
//       popperInstance.update() // 异步更新popper实例，返回一个promise，用于频繁更新
//     }
//   },
//   { deep: true }
// )

defineExpose({ show: tooltipOpen, hide: tooltipClose })
</script>
