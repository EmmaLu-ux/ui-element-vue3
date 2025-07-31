import { useCheckboxState } from "./use-checkbox-state"
import { useCheckboxGroup } from "./use-checkbox-group"
import { useCheckboxModel } from "./use-checkbox-model"

export function useCheckbox({ props, checkboxModel }) {
    const { isGroup, checkboxGroupKey } = useCheckboxGroup()

    const { isDisabled, checkboxSize } = useCheckboxState({ props, checkboxGroupKey, isGroup })
    const { model } = useCheckboxModel({ props, checkboxModel, checkboxGroupKey, isGroup })

    return {
        isDisabled,
        checkboxSize,
        model
    }
}