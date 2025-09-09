import { getCurrentInstance, ref, computed } from "vue";
import { useDrawerEvent } from "./use-drawer-event";
import { useDrawerState } from "./use-drawer-state"
import { useStyle } from "@ui-element-vue3/hooks";


export function useDrawer({ props, visible }) {
    const { emit } = getCurrentInstance()
    const rendered = ref(false)
    const uStyle = useStyle()

    const { isLoading } = useDrawerState({ props })
    const { useBeforeCancel, useBeforeChange, useClose } = useDrawerEvent({ props, visible, isLoading })

    // 进入动画之前
    const useBeforeEnter = () => rendered.value = true
    const useEnter = () => emit('open') // 开始进入动画
    const useAfterEnter = () => emit('opened') // 动画过度完之后
    const useBeforeLeave = () => emit('close') // 离开动画之前
    // 离开动画完成后
    const useAfterLeave = () => {
        props.unmountOnClose && (rendered.value = false)
        emit('closed')
    }
    const width = computed(() => uStyle.width(props.width))

    return {
        useBeforeCancel, useBeforeChange, useClose, isLoading,
        useEnter,
        useBeforeEnter,
        useAfterEnter,
        useBeforeLeave,
        useAfterLeave,
        rendered,
        width
    }
}