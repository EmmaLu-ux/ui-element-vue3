import { inject } from "vue"
import { FORM_KEY, FORM_ITEM_KEY } from "../constant.js"
export function useFormItem() {
    const formContent = inject(FORM_KEY, undefined)
    const formItemContent = inject(FORM_ITEM_KEY, undefined)
    return { formContent, formItemContent }
}