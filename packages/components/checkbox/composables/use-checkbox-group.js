import { inject } from "vue"
import { CHECKBOX_GROUP_KEY } from "../src/constant"

export function useCheckboxGroup() {
    const checkboxGroupKey = inject(CHECKBOX_GROUP_KEY, undefined) // checkboxGroupKey是provide函数的参数：props和checkboxGroupModel数据

    const isGroup = checkboxGroupKey !== undefined

    return {
        isGroup,
        checkboxGroupKey
    }
}