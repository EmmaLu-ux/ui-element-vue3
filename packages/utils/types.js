/**
 * 检测数据类型
 */
export function types() {
    const type = {}
    const types = ['Number', 'String', 'Boolean', 'Array', 'Function', 'Null', 'Undefined', 'Set', 'Map', 'Object', 'Promise']
    types.forEach((item) => {
        const fun = `is${item}`
        type[fun] = (value) => {
            const typeStr = Object.prototype.toString.call(value);
            // 可识别普通函数和异步函数
            return item === 'Function' ? typeStr === '[object Function]' || typeStr === '[object AsyncFunction]' : typeStr === `[object ${item}]`;
        }
    })
    return type
}