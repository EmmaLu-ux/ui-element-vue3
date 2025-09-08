<template>
  <div style="display: grid; gap: 12px; max-width: 520px">
    <!-- 文本属性方式 -->
    <ue-input v-model="a" prepend="https://" append=".io" placeholder="项目名" />

    <!-- 插槽方式，可放按钮等元素 -->
    <ue-input v-model="b" placeholder="输入验证码">
      <template #prepend>
        <ue-button type="default">+86</ue-button>
      </template>
      <template #append>
        <ue-button type="primary">发送</ue-button>
      </template>
    </ue-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const a = ref('flori')
const b = ref('')
</script>

