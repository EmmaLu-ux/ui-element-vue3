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
    // 临时存储
    // 条件：1. 是全选组件状态；2. 多选框没有被全部选中
    isAll && !props.all && checkboxAllKey?.setValuesEvent?.(props.value)
    // console.log('model', model.value)
    return {
        model
    }
}