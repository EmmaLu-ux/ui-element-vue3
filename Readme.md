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

<img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_09_14_32_03_1752042723_1752042723738_cID4A5_SCR-20250709-mxmg.png" alt="SCR-20250709-mxmg" style="zoom:50%;" />

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

按需加载导出



全局导出















