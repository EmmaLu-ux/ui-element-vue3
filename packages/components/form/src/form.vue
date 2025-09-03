<template>
  <form :class="[ns.b()]">
    <slot />
  </form>
</template>

<script setup>
import { provide, toRefs } from "vue"
import { FORM_KEY } from "./constant"
import { useNamespace } from "@ui-element-vue3/hooks"

defineOptions({ name: "ue-form" })
const ns = useNamespace("form")
const modelFields = [] // 所有字段
const pushField = context => modelFields.push(context) // 获取所有字段

const props = defineProps({
  model: {
    type: Object,
    default: () => {},
  },
  rules: {
    type: Object,
    default: () => {},
  },
  size: {
    type: String,
    default: "sm",
  },
})

const filterFields = fields => {
  if (!fields) return null
  const fieldArr = modelFields.filter(v => fields.includes(v.name))
  return !!fieldArr.length ? fieldArr : null
}

const validate = async fields => {
  const validateFields = filterFields(fields) || modelFields
  let varificationError = []
  // console.log("modelFields", modelFields)
  for (const field of validateFields) {
    try {
      await field.validate()
    } catch (fields) {
      varificationError = [...varificationError, ...fields]
    }
  }
  if (!varificationError.length) return Promise.resolve(true)
  return Promise.reject(varificationError)
}
provide(FORM_KEY, { ...toRefs(props), pushField })

const reset = () => {
  const validateFields = modelFields
  for (const field of validateFields) {
    field?.resetField()
  }
}

defineExpose({ validate, reset }) // 暴露 validate 方法
</script>
