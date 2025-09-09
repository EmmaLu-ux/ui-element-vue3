import { getCurrentInstance } from "vue";
import { types } from "@ui-element-vue3/utils";

export function useDrawerEvent({ props, visible, isLoading }) {
    // console.log('isLoading', isLoading)
    const { emit } = getCurrentInstance()
    // 取消按钮事件
    const useBeforeCancel = () => {
        useClose()
        emit('cancel')
    }
    // 确定按钮事件
    const useBeforeChange = () => {
        const isFunction = types().isFunction(props.beforeChange)
        if (isFunction) {
            isLoading.value = true
            props.beforeChange().then(() => {
                isLoading.value = false
                emit('ok')
            }).catch(() => {
                isLoading.value = false
            })
            return
        }
        emit('ok')
    }
    // 关闭窗口事件
    const useClose = () => visible.value = false
    return {
        useBeforeCancel, useBeforeChange, useClose
    }
}