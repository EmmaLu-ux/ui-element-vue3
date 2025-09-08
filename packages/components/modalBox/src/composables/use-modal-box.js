import { computed } from "vue";
import { useModalBoxEvent } from "./use-modal-box-event";
import { useModalBoxState } from "./use-modal-box-state"

export function useModalBox({ props, visible }) {

    const { isLoading } = useModalBoxState({ props })
    const { useBeforeCancel, useBeforeChange, useClose } = useModalBoxEvent({ props, visible, isLoading })



    return {
        useBeforeCancel, useBeforeChange, useClose, isLoading,

    }
}