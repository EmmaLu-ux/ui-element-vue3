#### 初始化组件库

```bash
mkdir ui-element-vue3

cd ui-element-vue3

mkdir packages examples docs
```

##### 1. 建立 workspace 工作区

在项目根目录中创建 pnpm-workspace.yaml 文件。

```yaml
# pnpm-workspace.yaml
packages:
  - docs。 #组件文档
  - examples # 组件测试代码
  - packages/* # 组件包
```

##### 2. 建立 UI 组件库包

分别进入到 packages、examples 和 docs 文件夹中，创建各自的 package.json 文件（`pnpm init`），并将其"name"修改为“@ui-element-vue3/packages”、“@ui-element-vue3/examples”和“@ui-element-vue3/docs”。

```json
{
  "name": "@ui-element-vue3/components",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

##### 3. UI 组件库包的调用

在根目录下初始化 package.json，添加依赖。

```json
{
  ...
  "dependencies": {
    "@ui-element-vue3/utils": "workspace:*",
    "@ui-element-vue3/hooks": "workspace:*",
    "@ui-element-vue3/components": "workspace:*"
  }
}
```

在项目根目录下执行`pnpm install`，安装成功

![image-20250709141041387](https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_09_14_10_41_1752041441_1752041441507_gnarQd_image-20250709141041387.png)

> [!CAUTION]
>
> 在没有 package.json 文件或文件中没有上述三个依赖包的情况下去添加这几个依赖的话，一般会在根目录下的终端中执行命令`pnpm install @ui-element-vue3/components -w`。但是，我会报错，导致无法安装成功。
>
> ![image-20250709140759858](https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_09_14_08_09_1752041289_1752041289198_VwxdRC_2025_07_09_14_08_00_1752041280_1752041280638_tzMyRV_image-20250709140759858.png)
>
> 或者
>
> ![image-20250709140841683](https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_09_14_08_41_1752041321_1752041321833_U1d1Tc_image-20250709140841683.png)

##### 4. 初始化演示库

演示库用于组件开发过程的各种调试，开发人员可以直观查看组件库的开发效果。执行`pnpm create vite@6 examples`，记得选择 Vue 开发框架、Javascript 语言这两项。

##### 5. 构建Button组件

<img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_09_15_48_09_1752047289_1752047289810_pfAWp2_image-20250709154808599.png" alt="image-20250709154808599" style="zoom:33%;" />

```vue
<!-- index.vue -->
<template>
  <div>button</div>
</template>

<script setup>
defineOptions({ name: "ue-button" })
</script>

<style lang="scss" scoped></style>

```

###### 5.1 按需加载导出

要将 button 组件按需导出，需要在 components/index.js 文件中引入 components/button/index.js文件，在 components/button/index.js 文件中引入 components/button/src/index.vue 文件，并提供按需加载的方式，最后使用 export default 导出。缺点是需要用到该组件的时候，每次都需要 import 一下，有不少重复语句。

```javascript
// components/button/index.js
import { componentInstall } from "@ui-element-vue3/utils";
import Button from "./src/button.vue";

// 按需加载
export const UeButton = componentInstall(Button);

// 导出组件
export default UeButton
```

```javascript
// utils/install.js
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
    com.install = (app) => { // app是要注册的组件
        app.component(com.name, com);
    }
    return com;
}
```

###### 5.2 全局注册导出

全局注册导出组件同样是所有组件汇聚到一个文件，使用循环的方式批量注册组件。

```javascript
// packages/components.js
import { UeButton } from "./components/button/index.js"

export default [
    UeButton
]
```

```javascript
// packages/index.js
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
```

##### 6. 演示库测试Button组件

###### 6.1 全局注册

全局注入是最常见的一种方法，一次注入，任意位置使用。但是会增加项目的整体体积。

```javascript
// example/src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import UElement from "../../packages/index"

const app = createApp(App)
app.use(UElement)
app.mount('#app')
```

```vue
<!-- example/src/App.vue -->
<script setup></script>
<template>
  123
  <ue-button></ue-button>
</template>
<style scoped></style>
```

###### 6.2 按需加载

按需加载可以减小项目的整体体积，提升性能。无需像全局注册那样在 main.js 文件中全局注册。

```vue
<!-- example/src/App.vue -->
<script setup>
import { UeButton } from "../../packages/components/button"
</script>

<template>
  <ue-button></ue-button>
</template>

<style scoped></style>
```

#### UI组件开发

##### 1. UI组件库元素规范

UI组件库元素规范模仿市面上不错的现有组件库，如：Element Plus、Ant Design、Mantine等

##### 2. CSS规范

BEM 命名规则：Block（块）、Element（元素）、Modifier（修改器）。命名格式：

```
block-name__<element-name>--<modifier-name>_<modifier-value>
```

- `a-button--size_small`： 样式作用于a-button 组件，而不是其内部其他元素，a-button 的 size 设置为 small 
- `a-tabs--size_small`： a-tabs 组件内还有一层元素，该元素的 size 设置为 small 

##### 3. 命明空间





















