import { computed } from 'vue'

export function useCheckboxModel({ props, checkboxModel, checkboxGroupKey, isGroup }) {
    const model = computed({
        get() {
            return isGroup ? checkboxGroupKey.checkboxGroupModel.value : checkboxModel.value
        },
        set(val) {
            if (isGroup && Array.isArray(val)) checkboxGroupKey?.changeEvent?.(val) // 如果checkboxGroupKey存在，且changeEvent存在且是函数，则用val参数调用它
            else checkboxModel.value = val
        }
    })
    // console.log('model', model.value)
    return {
        model
    }
}