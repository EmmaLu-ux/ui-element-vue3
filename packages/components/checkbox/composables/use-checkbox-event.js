import { getCurrentInstance, computed } from "vue";
import { types } from "@ui-element-vue3/utils";

export function useCheckboxEvent({ props, model, checkboxGroupKey, isDisabled, isGroup, isLoading }) {
    const { emit } = getCurrentInstance()
    const typeUtils = types()

    const beforeChange = computed(() => isGroup ? checkboxGroupKey?.beforeChange?.value : props.beforeChange)
    const isBeforeChange = computed(() => typeUtils.isFunction(beforeChange.value))

    const changeEvent = (e) => {
        return emit('change', e.target.checked, e)
    }
    const clickEvent = (e) => {
        if (isBeforeChange.value || isDisabled.value || isLoading.value) {
            // const ev = e || window.event
            e.preventDefault()
            if (isBeforeChange.value && !isDisabled.value && !isLoading.value) {
                isLoading.value = true
                beforeChange.value().then(() => {
                    updateData()
                    isLoading.value = false
                }).catch(() => {
                    isLoading.value = false
                })
            }
        }
        // console.log('clickEvent')
    }

    const updateData = () => {
        if (isGroup) {
            const index = model.value.findIndex(v => v === props.value)
                // index !=== -1：用户在做取消勾选动作，反之，则相反
                (index !== -1) ? model.value.splice(index, 1) : model.value.push(props.value)
        } else {
            model.value = !model.value
        }
    }

    return {
        changeEvent,
        clickEvent
    }
}

