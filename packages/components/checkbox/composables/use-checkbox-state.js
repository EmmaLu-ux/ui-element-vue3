import { ref, computed } from "vue"
export function useCheckboxState({ props, model, checkboxGroupKey, isGroup }) {
    const isDisabled = computed(() => props.disabled)

    /**
   * size
   */
    const checkboxSize = computed(() => isGroup ? checkboxGroupKey?.size.value : props.size)
    return {
        isDisabled,
        checkboxSize
    }
}