import { createVNode, renderSlot, defineComponent, h } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks";
import { useZindex } from "@ui-element-vue3/hooks";

export default defineComponent({
    name: 'ue-mask',
    props: {
        mask: {
            type: Boolean,
            default: true
        }
    },
    setup(props, { slots }) {
        const ns = useNamespace('mask')
        const { nextZindex, currentZindex } = useZindex()
        nextZindex()

        return () => createVNode(
            'div',
            { class: [ns.b()], style: [{ zIndex: currentZindex.value }] },
            [
                h('span', {
                    class: props.mask ? ns.e('wrap') : ""
                }),
                renderSlot(slots, 'default')
            ])
    }
})