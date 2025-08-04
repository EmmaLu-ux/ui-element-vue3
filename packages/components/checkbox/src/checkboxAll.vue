<template>
  <div :class="[ns.b()]">
    <!-- TODO: 缺label类样式 -->
    <div :class="[ns.e('label')]">
      <Checkbox
        all
        v-model="checkAll"
        :size="size"
        :indeterminate="indeterminate"
        @change="handleAll">
        全选
      </Checkbox>
    </div>
    <!-- TODO: 缺wrapper类样式 -->
    <div :class="[ns.e('wrapper')]">
      <CheckboxGroup v-model="allModel" :size="size">
        <slot />
      </CheckboxGroup>
    </div>
  </div>
</template>

<script setup>
import { ref, provide, toRefs } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"
import Checkbox from "./index.vue"
import CheckboxGroup from "./checkboxGroup.vue"
import { CHECKBOX_ALL_KEY } from "./constant"

defineOptions({ name: "ue-checkbox-all" })
const ns = useNamespace("checkbox-all")

const checkAll = ref(false) // false：全选复选框没有被选中，true: 全选复选框被选中
const allModel = defineModel({ type: Array, default: () => [] }) // 存储所有选中项
const emit = defineEmits(["change"])
const indeterminate = ref(false) // 半选状态
const list = ref([]) //用于存储所有可选项的值

const props = defineProps({
  size: {
    type: String,
    default: "sm",
  },
})
// NOTE: 只要是全选复选框组件，组件初始化的时候就会将子复选框的value添加到list中，临时存储，用于全选复选框的状态更新
const setValuesEvent = val => {
  // console.log("setValuesEvent", val)
  list.value.push(val)
  // console.log("list", list.value)
}
/**
 * @param val: Boolean
 * 如果全选复选框被选中(true)，则将allModel的值设置为list的值
 * 如果全选复选框没有被选中，则将allModel的值设置为空数组
 * 同时将indeterminate设置为false
 */
const handleAll = val => {
  allModel.value = val ? list.value : []
  indeterminate.value = false
}
// 处理选择变更
const chengEvent = value => {
  console.log("change", value)
  allModel.value = value
  changeAllEvent(value)
  emit("change", value)
}
// 更新全选状态
const changeAllEvent = val => {
  const checkedCount = val.length
  checkAll.value = checkedCount === list.value.length
  indeterminate.value = checkedCount > 0 && checkedCount < list.value.length
}

provide(CHECKBOX_ALL_KEY, {
  ...toRefs(props),
  allModel,
  chengEvent,
  setValuesEvent,
})
</script>
