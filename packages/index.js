// 组件库的入口文件
// 按需加载
export * from "./components/index.js";

// 全局注册
import components from "./components.js"
// 全局安装
const install = function (app) {
    if (install.installed) return;
    // 安装组件
    components.forEach((comp) => {
        app.use(comp);
    });
}

export default install