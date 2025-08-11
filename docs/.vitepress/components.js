const modulesFiles = import.meta.glob('../examples/*/*.vue', { eager: true }) // 同步导入，返回值是一个对象
// console.log("modulesFiles", modulesFiles)
// 自动化处理
let modules = {}
for (const [key, value] of Object.entries(modulesFiles)) {
    // console.log("key", key)
    // console.log("value", value)
    // key 是文件路径，value 是模块内容
    var keys = key.split('/')
    // console.log("keys", keys)
    const name = keys.slice(1).join('/')
    // console.log("name", name)
    modules[name] = value.default
}
// console.log("modules", modules)
export default modules