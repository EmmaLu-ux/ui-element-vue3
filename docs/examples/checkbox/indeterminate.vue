<template>
  <!-- 父级：根据子项数量动态半选，并可一键全选/全不选 -->
  <ue-checkbox v-model="checkAll" :indeterminate="isIndeterminate">全选</ue-checkbox>

  <!-- 子项组：任意勾选会联动父级半选/全选状态 -->
  <ue-checkbox-group v-model="checkedList" style="display:block; margin-top: 8px;">
    <ue-checkbox v-for="opt in options" :key="opt" :value="opt">{{ opt }}</ue-checkbox>
  </ue-checkbox-group>

  <div style="margin-top: 8px; color: #888">选中：{{ checkedList.join('，') || '无' }}</div>
</template>

<script setup>
import { ref, computed } from 'vue'

const options = ['苹果', '香蕉', '橙子']
const checkedList = ref(['苹果'])

// 父级“全选”复选框：由子项数量推导（get），由用户点击时批量设置（set）
const checkAll = computed({
  get: () => checkedList.value.length === options.length,
  set: (val) => {
    checkedList.value = val ? options.slice() : []
  }
})

// 半选：子项数量处于 (0, options.length) 区间
const isIndeterminate = computed(() => {
  const len = checkedList.value.length
  return len > 0 && len < options.length
})
</script>
