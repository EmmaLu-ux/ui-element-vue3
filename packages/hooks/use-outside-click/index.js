import { onUnmounted, unref, watch } from "vue"

/**
 * useOutsideClick
 * 通用的“点击外部关闭”监听器。
 *
 * @param {Ref<HTMLElement|null>|HTMLElement|Array|Function} roots - 根元素（或多个根元素），用于判断 inside/outside。
 *   可传：单个 ref/元素、由多个 ref/元素组成的数组，或返回前两者之一的函数。
 * @param {Function} handler - 在判定为 outside 时触发的回调。
 * @param {Object} options
 * @param {boolean|Ref<boolean>} [options.enabled] - 是否启用监听（可响应式）。
 * @param {boolean} [options.capture=true] - 是否在捕获阶段监听。
 * @param {string} [options.eventName="click"] - 监听的事件类型。
 *
 * @returns {{ start: Function, stop: Function, isActive: () => boolean }}
 */
export const useOutsideClick = (roots, handler, options = {}) => {
    const capture = options.capture ?? true
    const eventName = options.eventName ?? "click"
    let listening = false

    const resolveElements = () => {
        const r = typeof roots === "function" ? roots() : roots
        const list = Array.isArray(r) ? r : [r]
        return list
            .map(el => unref(el))
            .filter(Boolean)
    }

    // 判断是否是 tooltipRef 范围内的dom元素
    const containsTarget = (target) => {
        const elements = resolveElements()
        // 没有有效根时，视为不拦截（认为是 outside）
        if (!elements.length) return false
        return elements.some(el => el === target || el.contains(target))
    }

    const listener = (evt) => {
        const target = evt.target // 鼠标点击的地方所在元素
        // tooltipRef 范围外的元素
        if (!containsTarget(target)) {
            handler?.(evt)
        }
    }

    // 开始监听
    const start = () => {
        if (listening) return
        document.addEventListener(eventName, listener, capture)
        listening = true
    }

    // 停止监听
    const stop = () => {
        if (!listening) return
        document.removeEventListener(eventName, listener, capture)
        listening = false
    }

    if ("enabled" in options) {
        watch(
            () => unref(options.enabled),
            (val) => {
                if (val) start()
                else stop()
            },
            { immediate: true }
        )
    }

    onUnmounted(() => stop())

    return {
        start,
        stop,
        isActive: () => listening, // 当前是否在监听
    }
}
