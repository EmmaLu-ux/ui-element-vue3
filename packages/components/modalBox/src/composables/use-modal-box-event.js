import { types } from "@ui-element-vue3/utils";

export function useModalBoxEvent({ props, visible, isLoading }) {
    // 取消按钮事件
    const useBeforeCancel = () => useClose()

    // 确定按钮事件
    const useBeforeChange = () => {
        const isFunction = types().isFunction(props.beforeChange)
        if (isFunction) {
            isLoading.value = true
            props.beforeChange().then(() => {
                isLoading.value = false
                useClose()
            }).catch(() => {
                isLoading.value = false
                useClose()
            })
            return
        }
        useClose()
    }
    // 关闭窗口事件
    const useClose = () => visible.value = false
    return {
        useBeforeCancel, useBeforeChange, useClose
    }
}