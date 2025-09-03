import { ref, getCurrentInstance } from "vue"

export const useEvent = (options = {}) => {
    let isFocus = ref(false)
    let isHover = ref(false)
    const isComposition = ref(false)

    const { emit } = getCurrentInstance()
    // 获取焦点
    const focusEvent = (e) => {
        isFocus.value = true
        emit('focus', e)
    }
    // 失去焦点
    const blurEvent = (e) => {
        isFocus.value = false
        emit('blur', e)
        options?.afterBlur?.()
    }
    // 鼠标移入
    const mouseEnterEvent = (e) => {
        isHover.value = true
        emit('mouseenter', e)
    }
    // 鼠标移出
    const mouseLeaveEvent = (e) => {
        isHover.value = false
        emit('mouseleave', e)
    }
    // NOTE: 除了输入英文、数字、字符以外的都是输入法事件
    // 输入法事件：开始输入
    const compositionStartEvent = (e) => {
        isComposition.value = true
        emit('compositionstart', e)
    }
    // 输入法事件：中途输入
    const compositionUpdateEvent = (e) => {
        emit('compositionupdate', e)
    }
    // 输入法事件：结束
    const compositionEndEvent = (e) => {
        emit('compositionend', e)
        return new Promise((resolve, reject) => {
            if (isComposition.value) {
                isComposition.value = false
                resolve()
                return false
            }
            reject()
        })
    }
    // NOTE: change事件：输入完成后、元素的值改变且失去焦点时触发的事件
    const changeEvent = (e) => {
        emit('change', e)
    }
    //键盘按下事件
    const keyDownEvent = (e) => {
        emit('keydown', e)
    }
    // 键盘弹起事件
    const keyUpEvent = (e) => {
        emit('keyup', e)
    }

    return {
        focusEvent,
        isFocus,
        blurEvent,
        mouseEnterEvent,
        mouseLeaveEvent,
        isComposition,
        compositionStartEvent,
        compositionUpdateEvent,
        compositionEndEvent,
        changeEvent,
        keyDownEvent,
        keyUpEvent
    }
}