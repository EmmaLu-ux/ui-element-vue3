<template>
  <div :class="[ns.b()]" ref="tooltipRef">
    <!-- 触发区域 -->
    <div :class="[ns.e('trigger')]" ref="triggerRef" v-on="events">
      <slot />
    </div>
    <!-- 展示区域 -->
    <teleport to="body">
      <div
        v-if="isOpen"
        :class="[ns.e('content'), ns.m('theme', theme)]"
        :style="contentStyle"
        ref="contentRef"
        v-on="contentEvents">
        <slot name="content">{{ content }}</slot>
        <!-- NOTE: Popper 将自动拾取 data-popper-arrow 标记的元素并将其定位，伪类相对于.arrow元素的定位 -->
        <div :class="[ns.e('arrow')]" data-popper-arrow></div>
      </div>
    </teleport>
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

let events = ref({}) // 触发器上的事件集合
let contentEvents = ref({}) // 内容层上的事件集合（Teleport 到 body 后需要单独监听）
let popperInstance = null
const popperOptions = computed(() => {
  const base = {
    strategy: "fixed", // 定位策略，默认是 absolute
    modifiers: [
      {
        name: "offset",
        options: {
          // 将 props.offset 映射到 Popper 的 offset 选项
          // 数字等同于 [0, 数值]；数组则按 [skidding, distance] 透传
          offset: [0, props.offset],
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
  emits("visible-change", true)
}
const tooltipClose = () => {
  isOpen.value = false
  emits("visible-change", false)
  // 关闭时确保移除 outside 监听（若为 click 模式已开启）
  unbindOutside()
}
// 通用外部点击关闭（捕获阶段）
const { start: bindOutside, stop: unbindOutside } = useOutsideClick(
  () => [triggerRef.value, contentRef.value],
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
// hover 从触发器或内容移出时的处理：仅当真正离开两者之外才关闭
const handleHoverLeave = e => {
  const toEl = e.relatedTarget
  const t = triggerRef.value
  const c = contentRef.value
  if (toEl && (t?.contains(toEl) || c?.contains(toEl))) return
  tooltipClose()
}

const attachEvents = () => {
  events.value = {}
  contentEvents.value = {}
  if (props.trigger === "hover") {
    // 触发器事件
    events.value["mouseenter"] = tooltipOpen
    events.value["focusin"] = tooltipOpen
    events.value["focusout"] = tooltipClose
    events.value["mouseleave"] = handleHoverLeave

    // 内容层事件（Teleport 到 body 后需要）
    contentEvents.value["mouseenter"] = tooltipOpen
    contentEvents.value["mouseleave"] = handleHoverLeave
  } else {
    // 点击触发
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
      contentEvents.value = {}
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
      contentEvents.value = {}
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

// // React to offset changes while open
// watch(
//   () => props.offset,
//   () => {
//     if (popperInstance) {
//       popperInstance.setOptions({ ...popperOptions.value })
//       popperInstance.update()
//     }
//   },
//   { deep: true }
// )

defineExpose({ show: tooltipOpen, hide: tooltipClose })
</script>
