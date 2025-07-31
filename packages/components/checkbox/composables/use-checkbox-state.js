import { ref, computed } from "vue"
import { types } from "@ui-element-vue3/utils"

export function useCheckboxState({ props, model, checkboxGroupKey, isGroup }) {
    const isDisabled = computed(() => props.disabled)
    const isChecked = computed(() => {
        const value = model.value
        // console.log('value', value)
        if (types().isBoolean(value)) return value
        if (types().isArray(value)) return value.includes(props.value)
        return false
    })
    /**
   * size
   */
    const checkboxSize = computed(() => isGroup ? checkboxGroupKey?.size.value : props.size)
    return {
        isDisabled,
        checkboxSize,
        isChecked
    }
}