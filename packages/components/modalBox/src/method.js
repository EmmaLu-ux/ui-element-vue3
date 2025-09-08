import { createVNode, render, shallowReactive } from "vue";
import ModalBoxNode from "./index.vue";
import { types } from "@ui-element-vue3/utils";
export const messageInstances = shallowReactive([])

let onlyId = 0
const messageDefaults = {
    type: 'info', onClose: null
}
const messageTheme = ['info', 'success', 'warning', 'error']

const initOptions = (params) => {
    // TODO: 未来可支持传入duration和onClose字段
    // 支持直接传入字符串：UeMessage.info('text')
    const options = !params || types().isString(params) ? { content: params } : params
    const config = { ...messageDefaults, ...options }
    return config
}

const createMessage = (options = {}) => {
    const id = `message_${onlyId++}`
    const container = document.createElement("div");
    const appendTo = document.body;
    const userOnClose = options?.onClose

    // 创建消息组件 vnode
    const vnode = createVNode(ModalBoxNode, {
        ...options, id, onClose() {
            userOnClose?.()
            closeMessage(instance)
        },
        onUnmount() {
            render(null, container);
        }
    });

    // 关键：为 vnode 注入应用上下文，确保全局组件/指令可用（如 <ue-icon>）
    if (message && message._context) {
        vnode.appContext = message._context;
    }

    // 渲染并挂载到 body
    render(vnode, container);
    appendTo.appendChild(container.firstElementChild);

    // 获取组件对象
    const vm = vnode.component
    const instance = {
        id,
        vnode,
        vm,
        handler: {
            close: () => {
                // 优先调用组件暴露的 close，避免直接修改 setupState
                if (vm?.exposed && typeof vm.exposed.close === 'function') {
                    vm.exposed.close()
                } else if (vm?.setupState && 'visible' in vm.setupState) {
                    // 兜底：兼容开发态，仍保持旧逻辑
                    vm.setupState.visible = false
                }
            }
        },
        props: vm.props
    }
    return instance
}
const closeMessage = (instance) => {
    // console.log('closeMessage', instance)
    const idx = messageInstances.indexOf(instance)
    if (idx === -1) return
    messageInstances.splice(idx, 1)
    instance?.handler?.close()
}
// TODO: 有待使用
export function closeAll() {
    for (const instance of messageInstances) {
        instance.handler.close()
    }
}

const message = (params = {}) => {
    const normalized = initOptions(params)
    const message = createMessage(normalized)
    // console.log('message', message);
    messageInstances.push(message)
}
messageTheme.forEach(theme => {
    message[theme] = (options = {}) => {
        const config = initOptions(options)
        return message({ ...config, type: theme })
    }
})
message.closeAll = closeAll

export default message
