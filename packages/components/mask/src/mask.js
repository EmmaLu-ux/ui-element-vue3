import { createVNode, renderSlot, defineComponent, h } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks";
import { useZindex } from "@ui-element-vue3/hooks";

export default defineComponent({
    name: 'ue-mask',
    props: {
        mask: {
            type: Boolean,
            default: true
        },
        maskClose: {
            type: Boolean,
            default: false // 默认点击遮罩层会关闭遮罩层和modal组件
        }
    },
    setup(props, { emit, slots }) {
        const ns = useNamespace('mask')
        const { nextZindex, currentZindex } = useZindex()
        nextZindex()

        const onClose = () => {
            if (props.maskClose) return
            emit('close')
        }

        return () => createVNode(
            'div',
            {
                class: [ns.b()],
                style: [{ zIndex: currentZindex.value }]
            },
            [
                h('span', {
                    class: props.mask ? ns.e('wrap') : "",
                    onClick: () => onClose()
                }),
                renderSlot(slots, 'default')
            ])
    }
})