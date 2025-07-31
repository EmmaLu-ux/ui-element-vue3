import { useCheckboxState } from "./use-checkbox-state"
import { useCheckboxGroup } from "./use-checkbox-group"
import { useCheckboxModel } from "./use-checkbox-model"

export function useCheckbox({ props, checkboxModel }) {
    const { isGroup, checkboxGroupKey } = useCheckboxGroup()

    const { model } = useCheckboxModel({ props, checkboxModel, checkboxGroupKey, isGroup })
    const { isDisabled, checkboxSize, isChecked } = useCheckboxState({ props, model, checkboxGroupKey, isGroup })

    return {
        isDisabled,
        checkboxSize,
        isChecked,
        model,
    }
}