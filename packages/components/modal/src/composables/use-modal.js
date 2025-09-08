import { getCurrentInstance, ref, computed } from "vue";
import { useModalEvent } from "./use-modal-event";
import { useModalState } from "./use-modal-state"
import { useStyle } from "@ui-element-vue3/hooks";

export function useModal({ props, visible }) {
    const { emit } = getCurrentInstance()
    const rendered = ref(false)
    const uStyle = useStyle()

    const { isLoading } = useModalState({ props })
    const { useBeforeCancel, useBeforeChange, useClose } = useModalEvent({ props, visible, isLoading })

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