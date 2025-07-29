// 默认的命名空间
export const defaultNamespace = 'ue'

const _bem = (namespace, block, blockSuffix, element, modifierArr, modifierValue) => {
    // block
    let classname = `${namespace}-${block}`
    blockSuffix && (classname += `-${blockSuffix}`)
    // element
    element && (classname += `__${element}`)
    // modifier
    modifierArr && (classname += `--${modifierArr}`)
    modifierValue && (classname += `_${modifierValue}`)
    // if (modifierArr || modifierValue) console.log('modifierArr, modifierValue', modifierArr, modifierValue)
    return classname
}

export const useNamespace = (block) => {
    const namespace = defaultNamespace

    // block
    const b = (blockSuffix = "") => _bem(namespace, block, blockSuffix)
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