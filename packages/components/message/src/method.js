import { createVNode, render } from "vue";
import MessageNode from "./index.vue";
import { types } from "@ui-element-vue3/utils";
import { messageInstances } from "./instance.js"

let onlyId = 0
const messageDefaults = { type: 'info', content: '默认消息提示内容' }
const messageTheme = ['info', 'success', 'warning', 'error']

const createMessage = (options = {}) => {
    const id = `message_${onlyId++}`
    const container = document.createElement("div");
    const appendTo = document.body;
    const userOnClose = options?.onClose

    // 创建消息组件 vnode
    const vnode = createVNode(MessageNode, {
        ...options, id, onClose() {
            userOnClose?.()
            closeMessage(instance)
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
                vm.setupState.visible = false
            }
        },
        props: vm.props
    }
    return instance
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

const initOptions = (params) => {
    const options = !params || types().isString(params) ? { message: params } : params
    const config = { ...messageDefaults, ...options }
    return config
}

const closeMessage = (instance) => {
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
message.closeAll = closeAll

export default message
