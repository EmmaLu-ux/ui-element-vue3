<template>
  <div
    :class="[ns.b(), ns.is('required', isRequired), ns.m('size', controlSize)]">
    <!-- 左侧文本标签区域 -->
    <div :class="[ns.e('label'), ns.is('colon', colon)]" :style="[widthStyle]">
      <label
        v-if="label"
        :class="[
          ns.e('label-inner'),
          ns.is('colon', colon),
          ns.is('required', isRequired),
        ]"
        :style="[textAlign]">
        {{ label }}
      </label>
    </div>
    <!-- 右侧控件区域 -->
    <div :class="[ns.e('control')]">
      <div :class="[ns.e('control-inner')]"><slot /></div>
      <!-- 校验失败的提示元素 -->
      <transition :name="`${ns.namespace}-form-message`">
        <div v-if="validateMessage" :class="ns.e('message')">
          {{ validateMessage }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { computed, provide, ref, reactive, onMounted, toRefs } from "vue"
import AsyncValidator from "async-validator"
import { FORM_ITEM_KEY } from "./constant"
import { useFormItem } from "./composables/use-form-item"
import { useNamespace, useStyle } from "@ui-element-vue3/hooks"

defineOptions({ name: "ue-form-item" })
const ns = useNamespace("form-item")
const uStyle = useStyle()
const { formContent } = useFormItem()
const validateMessage = ref("") // 校验结果提示
let initValue = null

const props = defineProps({
  colon: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    default: "",
  },
  required: Boolean,
  lableWidth: {
    type: [String, Number],
    default: "",
  },
  align: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  rules: {
    type: [Object, Array],
    default: () => [],
  },
})

const widthStyle = computed(() => uStyle.width(props.lableWidth))
const textAlign = computed(() => uStyle.align(props.align))
const isRequired = computed(() => props.required || initRules.value.some(rule => rule.required))
const controlSize = computed(() => formContent?.size?.value)
const convertArray = rules =>
  rules ? (Array.isArray(rules) ? rules : [rules]) : []
// 合并formItem上的校验规则和Form上的校验规则
const initRules = computed(() => {
  const propRules = convertArray(props.rules)
  const formRules = formContent?.rules?.value
  if (props.name && formRules) {
    const _rules = formRules[props.name]
    _rules && propRules.push(...convertArray(_rules))
  }
  console.log("propRules", propRules)
  return propRules
})
// 过滤返回当前触发条件下需要执行的校验规则
const filterRules = trigger => {
  const rules = initRules.value
  return rules.filter(rule => {
    if (!rule.trigger || !trigger) return true
    if (Array.isArray(rule.trigger)) {
      return rule.trigger.includes(trigger)
    } else {
      return rule.trigger === trigger
    }
  })
}
// console.log(
//   "key: ",
//   props.name,
//   "---value: ",
//   formContent?.model.value[props.name]
// )

const validate = trigger => {
  const rules = filterRules(trigger)
  // console.log("validate rules: ", rules)
  const propName = props.name
  const formModel = formContent?.model?.value
  const validator = new AsyncValidator({
    [propName]: rules,
  })
  // console.log("validator: ", validator)
  return validator
    .validate(
      { [propName]: formModel[propName] },
      { firstFields: true } // 在指定字段的第一个规则验证错误时执行回调，不再处理相同字段的验证规则
    )
    .then(() => {
      onvalidateSuccess()
      return Promise.resolve()
    })
    .catch(({ errors, fields }) => {
      validateFailed(errors)
      return Promise.reject(errors)
    })
}
const onvalidateSuccess = () => {
  validateMessage.value = ""
}
const validateFailed = errors => {
  validateMessage.value = errors?.[0].message
}

const resetField = () => {
  props.name && (formContent.model.value[props.name] = initValue)
}

const context = reactive({
  ...toRefs(props),
  validate,
  resetField,
})
provide(FORM_ITEM_KEY, context)

onMounted(() => {
  if (props.name) {
    formContent.pushField(context)
    initValue = formContent?.model?.value?.[props.name]
  }
})
</script>
