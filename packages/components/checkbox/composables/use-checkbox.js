import { useCheckboxState } from "./use-checkbox-state"
import { useCheckboxGroup } from "./use-checkbox-group"
import { useCheckboxModel } from "./use-checkbox-model"
import { useCheckboxEvent } from "./use-checkbox-event"

export function useCheckbox({ props, checkboxModel }) {

    const { isGroup, checkboxGroupKey } = useCheckboxGroup()

    const { model } = useCheckboxModel({ props, checkboxModel, checkboxGroupKey, isGroup })
    const { isDisabled, checkboxSize, isChecked, isLoading } = useCheckboxState({ props, model, checkboxGroupKey, isGroup })

    const { changeEvent, clickEvent } = useCheckboxEvent({ props, model, checkboxGroupKey, isDisabled, isGroup, isLoading })

    return {
        model,
        isDisabled,
        checkboxSize,
        isChecked,
        isLoading,
        changeEvent,
        clickEvent,
    }
}