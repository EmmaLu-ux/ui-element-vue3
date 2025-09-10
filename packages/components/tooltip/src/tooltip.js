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
        default: 'dark', // light/dark
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
    // popper配置项
    popperOptions: {
        type: Object,
        default: () => ({}),
    },
}
