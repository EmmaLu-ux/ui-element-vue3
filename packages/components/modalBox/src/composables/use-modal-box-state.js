import { computed, ref } from "vue"

export function useModalBoxState({ props }) {
    const loading = ref(false)
    const isLoading = computed({
        get() {
            return props.confirmLoading || loading.value
        },
        set(val) {
            loading.value = val
        }
    })
    return { isLoading }
}