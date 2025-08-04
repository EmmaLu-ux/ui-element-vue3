import { computed } from 'vue'

export function useCheckboxModel({ props, checkboxModel, checkboxGroupKey, isGroup, checkboxAllKey, isAll }) {
    const model = computed({
        get() {
            return isGroup ? checkboxGroupKey.checkboxGroupModel.value : checkboxModel.value
        },
        set(val) {
            if (isGroup && Array.isArray(val)) {
                checkboxGroupKey?.changeEvent?.(val) // 如果checkboxGroupKey存在，且changeEvent存在且是函数，则用val参数调用它
                checkboxAllKey?.chengEvent?.(val)
            }
            else checkboxModel.value = val
        }
    })

    // 如果是子复选框（非全选框），将自己的 value 添加到父组件的 list 数组中
    // 临时存储
    isAll && !props.all && checkboxAllKey?.setValuesEvent?.(props.value)
    return {
        model
    }
}