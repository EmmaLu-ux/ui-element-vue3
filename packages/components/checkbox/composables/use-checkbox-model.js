import { computed } from 'vue'

export function useCheckboxModel({ props, checkboxModel, checkboxGroupKey, isGroup }) {
    const model = computed({
        get() {
            return isGroup ? checkboxGroupKey.checkboxGroupModel.value : checkboxModel.value
        }
    })
    // console.log('model', model.value)
    return {
        model
    }
}