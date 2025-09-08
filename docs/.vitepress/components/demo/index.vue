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
          <label class="icon-popup-label">复制{{ iconCopy.text }}</label>
          <i class="iconfont" :class="iconCopy.icon"></i>
        </li>
        <li @click="toggleSource">
          <label class="icon-popup-label">
            {{ source ? "收起" : "显示" }}代码
          </label>
          <i class="iconfont icon-code-s-slash-fill"></i>
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
import "prismjs/themes/prism.min.css" // TODO: 自定义合适主题
import modules from "../../components"

const props = defineProps({
  path: {
    type: String,
    default: "",
  },
})
const slots = useSlots()
const source = ref(false)
const isCopySuccess = ref("")

const demo = computed(() => {
  const key = `examples/${props.path}.vue`
  // console.log("key", key)
  return modules[key] || null
})
const iconCopy = computed(() => {
  if (isCopySuccess.value === true) {
    return {
      icon: "icon-chenggong",
      text: "成功",
    }
  } else if (isCopySuccess.value === false) {
    return {
      icon: "icon-shibai",
      text: "失败",
    }
  } else {
    return {
      icon: "icon-fuzhi",
      text: "代码",
    }
  }
})
// TODO: bug：必须显示代码后才能复制代码
const copy = async event => {
  const sourceElement = event.target
    .closest(".examples-container")
    .querySelector(".source-inner pre code")

  console.log("sourceElement", sourceElement)
  if (!sourceElement) {
    console.error("找不到源代码元素")
    return
  }

  // 获取代码文本，并保持缩进格式
  const clipboard = new Clipboard(event.target, {
    text: () => {
      console.log("sourceElement.innerHTML", sourceElement.innerHTML)
      // 获取原始文本内容，通过innerHTML来保持格式
      const content = sourceElement.innerHTML
        // 移除 Prism 的 HTML 标签
        .replace(/<span class="[^"]*">/g, "")
        .replace(/<\/span>/g, "")
        // 处理 HTML 实体
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        // 保持换行和缩进
        .split("\\n")
        .join("\n")
        // 移除首尾空行但保持中间格式
        .replace(/^\n+|\n+$/g, "")

      return content
    },
  })

  clipboard.on("success", e => {
    console.log("复制的内容：", e.text)
    isCopySuccess.value = true
    clipboard.destroy()
  })

  clipboard.on("error", e => {
    console.error("复制失败")
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

<style lang="scss" scoped>
.examples-container {
  .description {
    font-size: 14px;
  }
  .examples-body {
    border: 0.5px solid #dcdfe6;
    border-radius: 5px;
    overflow-x: hidden;
    overflow-y: visible;
  }
  .examples-inner {
    /* 增加左右内边距，抵消 Row 的左右负外边距以及列的水平内边距，避免右侧内容被裁剪 */
    padding: 30px 40px;
  }
  .examples-control {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    border-top: 0.5px solid #dcdfe6;
    height: 41px;
    padding: 12px 0;
    text-align: center;
    li {
      position: relative;
      list-style: none;
      text-align: center;
      margin-top: 0;
      &:hover {
        .icon-popup-label {
          transform: translateX(-50%) scale(1);
        }
      }
      i {
        opacity: 0.5;
        cursor: pointer;
        transition: all 0.1s ease 0s;
        font-size: 16px;
        &:hover {
          opacity: 1;
          font-size: 17px;
        }
      }
    }
    li:not(:first-child) {
      margin-left: 16px;
    }
  }
  .icon-popup-label {
    display: block;
    position: absolute;
    left: 50%;
    bottom: 115%;
    font-size: 13px;
    color: #fff;
    padding: 8px 10px;
    border-radius: 5px;
    transform: translateX(-50%) scale(0);
    transition: 0.1s;
    background-color: rgba(0, 0, 0, 0.7);
    white-space: nowrap;
    line-height: 1;
    &:before {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-top: 5px solid rgba(0, 0, 0, 0.7);
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
    }
  }
}
</style>
