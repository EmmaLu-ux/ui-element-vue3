import { inject } from "vue"
import { CHECKBOX_GROUP_KEY, CHECKBOX_ALL_KEY } from "../src/constant"

export function useCheckboxGroup() {
    const checkboxGroupKey = inject(CHECKBOX_GROUP_KEY, undefined) // checkboxGroupKey是provide函数的参数：props和checkboxGroupModel数据
    const checkboxAllKey = inject(CHECKBOX_ALL_KEY, undefined)

    // 是checkbox组组件状态
    const isGroup = checkboxGroupKey !== undefined
    // 是全选组件状态
    const isAll = checkboxAllKey !== undefined

    return {
        isGroup,
        isAll,
        checkboxGroupKey,
        checkboxAllKey
    }
}