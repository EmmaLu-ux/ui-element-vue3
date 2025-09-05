<template>
  <transition :name="ns.b()" @leave="onClose">
    <div
      ref="messageRef"
      :class="[ns.b(), ns.m(theme), ns.is('background', background)]"
      :style="[customStyle]"
      v-show="visible"
      @mouseenter="onMouseEnter"
      @mouseleave="startTime">
      <!-- 左侧图标 -->
      <div :class="[ns.e('icon')]">
        <ue-icon size="18">
          <component :is="icon" />
        </ue-icon>
      </div>
      <!-- 中间文本 -->
      <div :class="[ns.e('content')]">{{ content }}</div>
      <!-- 右侧关闭图标 -->
      <div :class="[ns.e('close')]" @click.stop="close" v-if="showClose">
        <ue-icon size="18">
          <component :is="typeIcon['close']" />
        </ue-icon>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useNamespace } from "@ui-element-vue3/hooks"
import { computed, onMounted, ref } from "vue"
import { useZindex } from "@ui-element-vue3/hooks"
import { getPrevBottomOffset } from "./instance"
import { useResizeObserver, useTimeoutFn } from "@vueuse/core"
import { typeIcon, themeType } from "@ui-element-vue3/utils"

defineOptions({ name: "ue-message" })
const ns = useNamespace("message")
const { currentZindex, nextZindex } = useZindex()
const messageRef = ref(null)
const height = ref(0)
const visible = ref(false)

const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  offset: {
    type: Number,
    default: 16,
  },
  onClose: Function,
  duration: {
    type: Number,
    default: 3000,
  },
  showClose: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "info",
  },
  background: {
    type: Boolean,
    default: false,
  },
})
// 上一个message的底部位置
const prevButtonPosition = computed(() => getPrevBottomOffset(props.id))
// 偏移
const offsetTop = computed(() => props.offset + prevButtonPosition.value)
const bottomPosition = computed(() => height.value + offsetTop.value)

const customStyle = computed(() => {
  return {
    top: offsetTop.value + "px",
    zIndex: currentZindex.value,
  }
})
const icon = computed(() => typeIcon[props.type] || typeIcon["info"])
const theme = computed(() => themeType?.[props.type] || props.type)

const close = () => (visible.value = false)
const startTime = async () => {
  if (props.duration === 0)
    return false
    // 自动关闭消息弹窗
  ;({ stop } = useTimeoutFn(() => {
    close()
  }, props.duration))
}
const onMouseEnter = () => stop?.() // 取消当前定时,停止自动关闭动作

onMounted(() => {
  visible.value = true
  nextZindex()

  useResizeObserver(messageRef, entries => {
    const entry = entries[0]
    height.value = entry.contentRect.height // message元素内容矩形的高度
  })
  startTime()
})
</script>
