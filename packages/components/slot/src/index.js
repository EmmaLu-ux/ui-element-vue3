import { withDirectives, cloneVNode, defineComponent, Fragment } from 'vue'

export default defineComponent({
    name: "ue-slot-ele",
    props: {},
    setup(props, { emit, slots, attrs }) {
        return () => {
            console.log('slots', slots.default?.())
            const elem = 11

            return cloneVNode(slots.default?.()[0].children[0], attrs)
        }
    }
})


