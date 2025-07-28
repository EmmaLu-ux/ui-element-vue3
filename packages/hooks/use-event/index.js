import { ref, getCurrentInstance } from "vue"

export const useEvent = () => {
    let isFocus = ref(false)

    const { emit } = getCurrentInstance()
    // 获取焦点
    const focusEvent = (e) => {
        isFocus.value = true
        emit('focus', e)
    }
}