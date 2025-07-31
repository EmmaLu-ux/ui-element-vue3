<template>
  <div :class="[ns.b()]">
    <slot></slot>
  </div>
</template>

<script setup>
import { provide, toRefs } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"
import { CHECKBOX_GROUP_KEY } from "./constant"

defineOptions({ name: "ue-checkbox-group" })
const ns = useNamespace("checkbox-group")

const props = defineProps({
  size: {
    type: String,
    default: "sm",
  },
})
// 双向绑定数据变量
// NOTE: checkboxGroupModel.value的值与<ue-checkbox-group></ue-checkbox-group>的v-model的值同步
const checkboxGroupModel = defineModel({
  type: Array,
  default: () => [],
})
const changeEvent = async value => {
  checkboxGroupModel.value = value
}
provide(CHECKBOX_GROUP_KEY, {
  ...toRefs(props),
  checkboxGroupModel,
  changeEvent,
})
</script>
