// 默认的命名空间
export const defaultNamespace = 'ue'

const _bem = (namespace, block, element, modifierArr, modifierValue) => {
    // block
    let classname = `${namespace}-${block}`
    // element
    element && (classname += `__${element}`)
    // modifier
    modifierArr && (classname += `--${modifierArr}`)
    modifierValue && (classname += `_${modifierValue}`)
    return classname
}

export const useNamespace = (block) => {
    const namespace = defaultNamespace

    // block
    const b = () => _bem(namespace, block)
    // element
    const e = (element) => element ? _bem(namespace, block, element) : ''
    //modifier
    const m = (modifierArr, modifierValue) => modifierArr ? _bem(namespace, block, '', modifierArr, modifierValue) : ''
    const is = (name, state) => name && state ? `is-${name}` : ''

    return {
        namespace,
        b,
        e,
        m,
        is
    }
}