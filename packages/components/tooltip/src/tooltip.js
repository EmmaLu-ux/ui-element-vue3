import { popperProps } from "@ui-element-vue3/components/popper"

export const tooltipProps = {
    // ...popperProps, // role
    trigger: {
        type: String,
        default: "hover", // hover/click/
    },
    placement: {
        type: String,
        default: "bottom", // "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end"
    },
    theme: {
        type: String,
        default: 'dark', // light/dark/...
    },
    // 自定义主题颜色（可选）：优先级高于内置 light/dark
    bgColor: {
        type: String,
        default: '', // 自定义背景色（如 '#333'、'rgba(0,0,0,.85)'、'var(--my-color)）
    },
    textColor: {
        type: String,
        default: '', // 自定义文字颜色
    },
    // 手动控制
    manual: {
        type: Boolean,
        default: false,
    },
    content: {
        type: String,
        default: "",
    },
    // 偏移量：对应 Popper `modifiers: [{ name: 'offset', options: { offset } }]`
    // 支持传入数字（主轴距离，等同于 [0, value]）或元组 [skidding, distance]
    offset: {
        type: Number,
        default: 15,
    },
}
