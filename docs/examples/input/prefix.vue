<template>
  <div style="display: grid; gap: 12px; max-width: 420px">
    <!-- 文本前后缀 -->
    <ue-input v-model="a" prefix="https://" suffix=".com" placeholder="域名主体" />

    <!-- iconfont 前后缀 -->
    <ue-input
      v-model="b"
      :prefixIconfont="'icon-search1'"
      :suffixIconfont="b ? 'icon-clear' : ''"
      placeholder="搜索内容"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const a = ref('flori-ui')
const b = ref('')
watch(b, (v) => {
  // 仅示例：当有值时展示“清除”图标类名
})
</script>

