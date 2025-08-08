<template>
  <div class="examples-container">
    <!-- 描述 -->
    <div class="description"><slot name="description"></slot></div>
    <!-- 演示主体 -->
    <div class="examples-body">
      <!-- 组件渲染 -->
      <div class="examples-inner">
        <component :is="demo" />
      </div>
      <!-- 图标元素 -->
      <ul class="examples-control">
        <li @click="copy" @mouseleave="isCopySuccess = ''">
          <i class="iconfont" :class="iconCopy"></i>
        </li>
        <li @click="toggleSource">
          <i class="iconfont icon-daima"></i>
        </li>
      </ul>
      <!-- 组件源码 -->
      <div v-if="source" class="source-inner">
        <slot name="source"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, useSlots, nextTick } from "vue"
import Clipboard from "clipboard"
import prism from "prismjs"
import "prismjs/themes/prism-tomorrow.min.css"
import modules from "../../components"

const props = defineProps({
  path: {
    type: String,
    default: "",
  },
})
const slots = useSlots()
const source = ref(false)
const isCopySuccess = ref(false)

const demo = computed(() => {
  const key = `examples/${props.path}.vue`
  return modules[key] || null
})
const iconCopy = computed(() => {
  if (isCopySuccess.value === true) {
    return "icon-chenggong"
  } else if (isCopySuccess.value === false) {
    return "icon-shibai"
  } else {
    return "icon-fuzhi"
  }
})
const copy = async event => {
  const clipboard = new Clipboard(event.target, {
    text: () => slots.source[0]?.children[0]?.children,
  })
  clipboard.on("success", e => {
    isCopySuccess.value = true
    clipboard.destroy()
  })
  clipboard.on("error", e => {
    isCopySuccess.value = false
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
const toggleSource = () => {
  source.value = !source.value
  source.value && nextTick(() => prism.highlightAll())
}
onMounted(() => {
  prism.highlightAll()
})
</script>
