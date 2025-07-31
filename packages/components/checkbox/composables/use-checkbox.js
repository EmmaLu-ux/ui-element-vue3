import { useCheckboxState } from "./use-checkbox-state"
export function useCheckbox({ props, checkboxModel }) {

    const { isDisabled, checkboxSize } = useCheckboxState({ props })

    return {
        isDisabled,
        checkboxSize
    }
}