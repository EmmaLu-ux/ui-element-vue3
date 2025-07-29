/**
 * 帮助子组件查找并访问指定名称的父组件及其属性
 */
import { getCurrentInstance } from "vue"

import { defaultNamespace } from "../config"

// NOTE: getCurrentInstance获取当前组件实例的引用。只能在 setup() 或生命周期钩子中调用，异步代码中可能失效
export const useParent = (parentName) => {
    const parent = getCurrentInstance().parent // 获取当前组件实例的父组件实例

    // 检查直接父组件是否为目标组件
    const group = () => {
        return parent.proxy.$options.name === `${defaultNamespace}-${parentName}`
    }
    // 递归查找深层父组件
    const getParent = (data) => {
        let parentComponent = null

        const getComponent = (parent) => {
            const name = parent?.proxy?.$options?.name // 获取父组件名称
            const pName = `${defaultNamespace}-${parentName}` // 目标父组件完整名称（命名空间+parentName）

            if (name === pName) {
                parentComponent = parent
                return false
            }
            // 继续向上查找
            parent.parent && getComponent(parent.parent)
        }

        getComponent(data)
        return parentComponent
    }

    // 获取父级属性
    const props = (attr) => {
        const p = getParent(parent)
        // console.log('attr', attr)
        // console.log('p', p)
        return p?.props?.[attr] || false
    }

    return {
        group,
        props
    }
}