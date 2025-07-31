/**
 * 检测数据类型
 */
export function types() {
    const type = {}
    const types = ['Number', 'String', 'Boolean', 'Array', 'Function', 'Null', 'Undefined', 'Set', 'Map', 'Object', 'Promise']
    types.forEach((item) => {
        const fun = `is${item}`
        type[fun] = (value) => Object.prototype.toString.call(value) === `[object ${item}]`
    })
    return type
}