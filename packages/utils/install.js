/**
 * 安装组件
 * @param {Object} com - 需要添加安装功能的 Vue 组件对象，会自动获取组件内的 name 属性
 * @returns {Object} 返回处理后的组件对象，带有 install 方法
 * @example
 const MyComponent = {
    name: 'MyComponent',
   }
  export default componentInstall(MyComponent);
  // 然后在主文件中可以这样使用
  // app.use(MyComponent);
 */
export const componentInstall = (com) => {
    // console.log('componentInstall', com, app);
    com.install = (app) => { // app是组件本身
        app.component(com.name, com);
    }
    return com;
}

export const functionInstall = (fn, name) => {
    fn.install = (app) => {
        fn._context = app._context
        app.config.globalProperties[name] = fn // 挂载到全局
    }
    return fn
}