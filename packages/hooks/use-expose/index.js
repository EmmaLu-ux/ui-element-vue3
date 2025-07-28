import { nextTick } from "vue"

export const useExpose = (element) => {
    const _ref = element

    // 自动聚集
    const focusExpose = async () => {
        await nextTick()
        _ref.value?.focus()
    }

    // 失焦
    const blurExpose = async () => {
        await nextTick()
        _ref.value?.blur()
    }
    // 全选文本
    const selectExpose = () => {
        _ref.value?.select()
    }

    return {
        focusExpose,
        blurExpose,
        selectExpose
    }
}