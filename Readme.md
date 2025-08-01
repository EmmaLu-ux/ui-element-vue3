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

##### 5. 构建 Button 组件

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

要将 button 组件按需导出，需要在 components/index.js 文件中引入 components/button/index.js 文件，在 components/button/index.js 文件中引入 components/button/src/index.vue 文件，并提供按需加载的方式，最后使用 export default 导出。缺点是需要用到该组件的时候，每次都需要 import 一下，有不少重复语句。

```javascript
// components/button/index.js
import { componentInstall } from "@ui-element-vue3/utils"
import Button from "./src/button.vue"

// 按需加载
export const UeButton = componentInstall(Button)

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
export const componentInstall = com => {
  com.install = app => {
    // app是要注册的组件
    app.component(com.name, com)
  }
  return com
}
```

###### 5.2 全局注册导出

全局注册导出组件同样是所有组件汇聚到一个文件，使用循环的方式批量注册组件。

```javascript
// packages/components.js
import { UeButton } from "./components/button/index.js"

export default [UeButton]
```

```javascript
// packages/index.js
// 组件库的入口文件
// 按需加载
export * from "./components/index.js"

// 全局注册
import components from "./components.js"
// 全局安装
const install = function (app) {
  if (install.installed) return
  // 安装组件
  components.forEach(comp => {
    app.use(comp)
  })
}

export default install
```

##### 6. 演示库测试 Button 组件

###### 6.1 全局注册

全局注入是最常见的一种方法，一次注入，任意位置使用。但是会增加项目的整体体积。

```javascript
// example/src/main.js
import { createApp } from "vue"
import App from "./App.vue"
import UElement from "../../packages/index"

const app = createApp(App)
app.use(UElement)
app.mount("#app")
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

#### UI 组件开发

##### 1. UI 组件库元素规范

UI 组件库元素规范模仿市面上不错的现有组件库，如：Element Plus、Ant Design、Mantine 等

##### 2. CSS 规范

BEM 命名规则：Block（块）、Element（元素）、Modifier（修改器）。命名格式：

```
block-name__<element-name>--<modifier-name>_<modifier-value>
```

- `a-button--size_small`： 样式作用于 a-button 组件，而不是其内部其他元素，a-button 的 size 设置为 small
- `a-tabs--size_small`： a-tabs 组件内还有一层元素，该元素的 size 设置为 small

##### 3. 命明空间

##### 4. 主题颜色

##### 5. button 组件样式

按钮类型：default、primary、light、outline、subtle/text、dashed、link、Gradient\*

| 按钮类型   | 按钮默认样式                                                                                                                                                                                                             | 鼠标悬浮样式                                                                                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| deafult    | <img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_10_14_39_16_1752129556_1752129556240_vU0vHI_image-20250710143915628.png" alt="image-20250710143915628" style="zoom:40%;" /> | <img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_10_14_51_47_1752130307_1752130307210_wyV15B_image-20250710145146873.png" alt="image-20250710145146873" style="zoom:40%;" /> |
| primary    | <img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_10_14_40_05_1752129605_1752129605513_BNuHIA_image-20250710144005241.png" alt="image-20250710144005241" style="zoom:40%;" /> | <img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_10_14_51_09_1752130269_1752130269973_xIN8I6_image-20250710145109818.png" alt="image-20250710145109818" style="zoom:40%;" /> |
| light      | <img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_10_14_49_41_1752130181_1752130181832_xXNSsq_image-20250710144941621.png" alt="image-20250710144941621" style="zoom:40%;" /> | <img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_10_14_50_03_1752130203_1752130203748_ZL0mD6_image-20250710145003603.png" alt="image-20250710145003603" style="zoom:40%;" /> |
| outline    | <img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_10_14_48_28_1752130108_1752130108748_Rypkkb_image-20250710144828534.png" alt="image-20250710144828534" style="zoom:40%;" /> | <img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_10_14_48_55_1752130135_1752130135513_nFYtDN_image-20250710144855297.png" alt="image-20250710144855297" style="zoom:40%;" /> |
| subtle     | <img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_10_14_46_14_1752129974_1752129974002_fzr7RS_image-20250710144613749.png" alt="image-20250710144613749" style="zoom:40%;" /> | <img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_10_14_46_41_1752130001_1752130001919_TQoC0E_image-20250710144641654.png" alt="image-20250710144641654" style="zoom:40%;" /> |
| dashed     | <img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_10_15_11_08_1752131468_1752131468242_mtzo3e_image-20250710151107943.png" alt="image-20250710151107943" style="zoom:40%;" /> |                                                                                                                                                                                                                          |
| Link       | <img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_10_15_11_45_1752131505_1752131505643_Bpagk0_image-20250710151145325.png" alt="image-20250710151145325" style="zoom:40%;" /> |                                                                                                                                                                                                                          |
| Gradient\* | <img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_10_14_53_53_1752130433_1752130433588_tqOpbT_image-20250710145353277.png" alt="image-20250710145353277" style="zoom:40%;" /> | <img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_10_14_54_19_1752130459_1752130459834_IUW9ah_image-20250710145419683.png" alt="image-20250710145419683" style="zoom:40%;" /> |

<img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_07_10_15_21_05_1752132065_1752132065713_ZMRTo9_image-20250710152105554.png" alt="image-20250710152105554" style="zoom:40%;" />

##### 6. 自动触发加载

自动触发加载属于一种业务类型的操作，根据 API 接口请求的过程实现 loading 加载的自动变更，无需手动改变状态。

##### 7. checkbox 实现逻辑

通过`Boolean`值去控制是否被勾选，**true：勾选，false：未勾选**。同时与相应的勾选/未勾选样式类对应，从而达到勾选/未勾选的视觉效果。

具体描述：隐藏原生`<input>`元素，用`<span>`替代。虽然原生`<input>`隐藏了，但当用户点击`<label>`或其内部元素的时候，原生`<input>`标签会响应被点击的事件，在**被勾选**和**未被勾选**两状态之间切换。由于自定义了`<span>`为`<input>`元素的替身视觉元素，因此，`<input>`元素如果是被勾选状态，则`<span>`元素也得显示被勾选状态。要做到这点的话，需要在最外层`<label>`元素上添加一个 `is-checked` 类名（`ns.is('checked', isChecked)`），如果 `isChecked` 为 `true`，那么就将`<span>`元素的边框、背景、图标、文本做一个选中样式。反之，则相反。那`isChecked`变量又跟`model`绑定，**当用户点击复选框时，原生 `input` 的勾选状态变化会触发 Vue 更新 `model` 值**。所以能做到勾选/未勾选效果。

> [!CAUTION]
>
> 为什么一点击 checkbox，他的状态会同步切换呢？其中用到了**`defineModel`**，具体解释在下文。

>  根据HTML规范，当label标签包含input元素时，点击label内的任何区域（包括文本）都会触发input的点击事件，从而切换复选框状态。
>      另外，label标签也可能通过原生属性for的值与原生属性id的值进行关联。

```html
<!-- checkbox.vue -->
<template>
  <component
    :is="tag"
    :class="[
      ns.b(),
      ns.is('disabled', isDisabled),
      ns.m('size', checkboxSize),
      ns.m(type),
      ns.is('checked', isChecked),
    ]">
    <!-- 视觉元素，多选框框 -->
    <span :class="[ns.e('wrapper')]">
      <!-- 隐藏原生input -->
      <input
        :class="[ns.e('input')]"
        type="checkbox"
        :disabled="isDisabled"
        v-model="model"
        :value="value" />
      <!-- 多选框框的替代 -->
      <span :class="[ns.e('inner')]">
        <ue-icon>
          <Check />
        </ue-icon>
      </span>
    </span>
    <!-- chekbox文本 -->
    <span :class="[ns.e('label')]">
      <slot />
    </span>
  </component>
</template>

<script setup>
import { useNamespace } from "@ui-element-vue3/hooks"
import { Check } from "@ui-element-vue3/icons"
import { useCheckbox } from "../composables"

defineOptions({ name: "ue-checkbox" })
const ns = useNamespace("checkbox")

const props = defineProps({
  tag: {
    type: String,
    default: "label",
  },
  disabled: Boolean,
  size: {
    type: String,
    default: "sm",
  },
  type: {
    type: String,
    default: "",
  },
  // 复选框的值
  // NOTE: 如果checkboxGroup的v-model的值（数组）中包含checkbox的value的值，则复选框是选中状态，反之，则相反
  value: {
    type: [String, Number, Boolean],
    default: undefined,
  },
})
// 双向绑定数据变量
// NOTE: checkboxModel.value的值与<ue-checkbox></ue-checkbox>的v-model的值同步
const checkboxModel = defineModel({
  type: [String, Number, Boolean],
  default: "",
})

const { isDisabled, checkboxSize, isChecked, model } = useCheckbox({
  props,
  checkboxModel,
})
</script>

```

###### 数据同步的原理

**核心是将组件的`v-model`绑定到统一的`model`属性。**

1. **checkox**

   每个`<ue-checkbox>`组件在`setup`阶段会调用`useCheckbox()`，该函数接收`props`和`checkboxModel`两参数，`checkboxModel` 变量就是 <ue-checkbox>元素上的`v-model`属性的值。因为，在`useCheckbox()`函数中，会执行`useCheckboxGroup()`、`useCheckboxModel()`和`useCheckboxState()`三个函数。在`useCheckboxModel()`函数中会将`checkboxModel`参数传递过去，从而得到`checkbox`的`model`，具体逻辑可查看 use-checkbox.js代码块、 ue-check-model.js 代码块和 checkbox.vue 代码块。

   ```javascript
   // use-checkbox.js
   import { useCheckboxState } from "./use-checkbox-state"
   import { useCheckboxGroup } from "./use-checkbox-group"
   import { useCheckboxModel } from "./use-checkbox-model"
   
   export function useCheckbox({ props, checkboxModel }) {
       const { isGroup, checkboxGroupKey } = useCheckboxGroup()
   
       const { model } = useCheckboxModel({ props, checkboxModel, checkboxGroupKey, isGroup })
       const { isDisabled, checkboxSize, isChecked } = useCheckboxState({ props, model, checkboxGroupKey, isGroup })
   
       return {
           isDisabled,
           checkboxSize,
           isChecked,
           model,
       }
   }
   ```

   ```javascript
   // ue-check-model.js
   import { computed } from 'vue'
   export function useCheckboxModel({ props, checkboxModel, checkboxGroupKey, isGroup }) {
       const model = computed({
           get() {
               return isGroup ? checkboxGroupKey.checkboxGroupModel.value : checkboxModel.value
           },
           set(val) {
               if (isGroup && Array.isArray(val)) checkboxGroupKey?.changeEvent?.(val) // 如果checkboxGroupKey存在，且changeEvent存在且是函数，则用val参数调用它
               else checkboxModel.value = val
           }
       })
       // console.log('model', model.value)
       return {
           model
       }
   }
   ```

2. **checkboxGroup**

   checkboxGroup.vue 中使用`provide`共享了数据和方法，每个`<ue-checkbox>`组件在`setup`阶段会调用`useCheckbox()`，该函数的执行就会去调用`useCheckboxGroup()`，`useCheckboxGroup()`方法中就`inject`了`<ue-checkbox-group>`组件提供的依赖`provide`提供的数据：`...toRefs(props)`、 `checkboxGroupModel`、  `changeEvent`，即`checkboxGroupKey`，还会判断数据是`checkboxGroup`的还是`checkbox`的，根据是否在 `group` 内决定数据的绑定方式（绑定到 `group` 的 `model` 还是自身的 `model`）。

```javascript
<!-- checkboxGroup.vue -->
<template>
  <div :class="[ns.b()]">
    <slot></slot>
  </div>
</template>

<script setup>
import { provide, toRefs } from "vue"
import { useNamespace } from "@ui-element-vue3/hooks"
import { CHECKBOX_GROUP_KEY } from "./constant"

defineOptions({ name: "ue-checkbox-group" })
const ns = useNamespace("checkbox-group")

const props = defineProps({
  size: {
    type: String,
    default: "sm",
  },
})
// 双向绑定数据变量
// NOTE: checkboxGroupModel.value的值与<ue-checkbox-group></ue-checkbox-group>的v-model的值同步
const checkboxGroupModel = defineModel({
  type: Array,
  default: () => [],
})
const changeEvent = async value => {
  checkboxGroupModel.value = value
}
provide(CHECKBOX_GROUP_KEY, {
  ...toRefs(props),
  checkboxGroupModel,
  changeEvent,
})
</script>


```

```html
<ue-checkbox-group size="lg" v-model="valueGroup">
  <ue-checkbox>吃饭</ue-checkbox>
  <ue-checkbox>睡觉</ue-checkbox>
</ue-checkbox-group>
```

```javascript
// use-checkbox-group.js
import { inject } from "vue"
import { CHECKBOX_GROUP_KEY } from "../src/constant"

export function useCheckboxGroup() {
    const checkboxGroupKey = inject(CHECKBOX_GROUP_KEY, undefined) // checkboxGroupKey是provide函数的参数：props和checkboxGroupModel数据

    const isGroup = checkboxGroupKey !== undefined

    return {
        isGroup,
        checkboxGroupKey
    }
}
```

```javascript
// use-checkbox-model.js
import { computed } from 'vue'
export function useCheckboxModel({ props, checkboxModel, checkboxGroupKey, isGroup }) {
    const model = computed({
        get() {
            return isGroup ? checkboxGroupKey.checkboxGroupModel.value : checkboxModel.value
        },
        set(val) {
            if (isGroup && Array.isArray(val)) checkboxGroupKey?.changeEvent?.(val) // 如果checkboxGroupKey存在，且changeEvent存在且是函数，则用val参数调用它
            else checkboxModel.value = val
        }
    })
    // console.log('model', model.value)
    return {
        model
    }
}
```





















---

#### SASS 制定组件库全局变量

##### 1. 主题色、主题色层次、中性色及其他颜色定义

为了主题色能够复用，需要将主题色、尺寸、大小等公共属性抽离到单独的文件，作为变量的形式引用，使 UI 组件库根据变量的变化而变化。

sass:map 是 Sass 提供的一种数据结构 map，用于存储键值对。Sass 的 map 常常被称为数据地图，因为他总是以 key:value 成对的出现，Sass 的 map 与 JSON 相似。它类似于其他语言中的字典或哈希表。

```scss
// packages/theme/src/common/var.scss
@use "sass:map";
@use "sass:color";

$types: primary, success, warning, error;
// 主题色变更
$colors: () !default;
// 主题色
$colors: map.deep-merge(
  (
    "white": #ffffff,
    "black": #000000,
    "primary": (
      "base": #238be6,
    ),
    "warning": (
      "base": #fcc418,
    ),
    "success": (
      "base": #22c997,
    ),
    "error": (
      "base": #ff6b6b,
    ),
  ),
  $colors
);

$color-white: map.get($colors, "white");

// 文字颜色
$text-color: () !default;
$text-color: map.deep-merge(
  (
    "primary": #000,
  ),
  $text-color
);
// 字体大小
$font-size: () !default;
$font-size: map.deep-merge(
  (
    "sm": 14px,
    "md": 16px,
    "lg": 18px,
    "xl": 20px,
  ),
  $font-size
);
// 控件大小
$component-size: () !default;
$component-size: map.deep-merge(
  (
    "sm": 36px,
    "md": 42px,
    "lg": 50px,
    "xl": 60px,
  ),
  $component-size
);
// 生成主题层次色
@mixin set-light-color($type, $number, $mode, $mix-color) {
  $colors: map.deep-merge(
    (
      $type: (
        "base": "#238BE6",
        "#{$mode}-#{$number}": color.mix($mix-color, map.get($colors, $type, "base"), $number *
              10),
      ),
    ),
    $colors
  ) !global;
}
@each $type in $types {
  @for $i from 1 through 9 {
    @include set-light-color($type, $i, "light", $color-white);
  }
}

@debug map.get($colors, "primary");
$color-primary: map.get($colors, "primary", "base");
```

##### 2. :root 伪类选择器

:root 伪类可以定义 CSS 全局变量，通过 var 使用定义的全局变量。我们可以通过手动定义变量的方式去给组件赋予样式，但效率特慢，尤其是“层次”颜色，数量会有几十种。因此推荐采用自动生成的方式来处理，如 Sass 的合并、混入、mix 等方法。

```scss
// packages/theme/src/index.scss
@use "./common/var.scss" as *;
@use "./isLoading.scss";
@use "./button.scss";
@use "./buttonGroup.scss";
@use "./common/config.scss";

:root {
  --ue-color-white: #{$color-white};
  --ue-color-primary: #{$color-primary};
}
```

定义“主色”、“层次色”等变量需要规划成统一格式，如 "--ue" 中的 “ue” 是整个 UI 组件库的前缀，这是前期就定义好的，因此现在也需要定义相同的规则。

```scss
// packages/theme/src/config.scss
// 定义的变量与hook/use-namespace的命名规则完全一致，全包UI组件库定义CSS类名规则的统一性
$namespace: "ue" !default; // 前缀
$connect: "-" !default; // 块、子集
$element-connect: "__" !default; // 元素
$modifier-connect: "--" !default; // 修改器
$modifier-value-connect: "_" !default; // 修改器的值
$state-prefix: "is" !default; // 状态前缀

// packages/theme/src/function.scss
@use "./config.scss" as *;

// 生成主题色变量
@function createVarName($list) {
  $name: "--" + $namespace;
  @each $item in $list {
    @if $item != "" {
      $name: $name + "-" + $item;
    }
  }
  @return $name;
}

// packages/theme/src/mixins.scss
@use "sass:map";
@use "./function.scss" as *;
@use "./var.scss" as *;
// 生成主题色
@mixin set-main-color() {
  @each $type in $types {
    $color: map.get($colors, $type, "base");
    #{createVarName(('color', $type))}: #{$color};
  }
}
// 生成层次色
@mixin set-main-light-color() {
  @each $type in $types {
    @for $i from 1 through 9 {
      $color: map.get($colors, $type, "light-" + $i);
      #{createVarName(('color', $type, 'light', $i))}: #{$color}; // --ue-color-primary-light-1
    }
  }
}

// packages/theme/src/index.scss
@use "./common/var.scss" as *;
@use "./common/mixins.scss" as *;
@use "./isLoading.scss";
@use "./button.scss";
@use "./buttonGroup.scss";
@use "./common/config.scss";

:root {
  @include set-main-color(); // 生成主题色
  @include set-main-light-color(); // 生成层次色
}
```

:root 目前生成了大量的全局变量，此时可以直接使用变量名称。但如果直接这么使用，还是要写 “--a” 前缀，如果变量名称非常多的情况下，可能无法知道有哪些可以使用。因此，可以定义方法通过传参的方式来获取 :root 的变量名称。

```scss

```









Sass 是 CSS 预处理器，它用一种新的语言为 CSS 增加了一些编程的特性，将 CSS 作为目标生成文件。

> CSS 的缺陷：
>
> 1. CSS 作为一种标记语言，自定义变量的使用不够灵活；
> 2. 语法不够强大；
> 3. 没有变量和合理的样式复用机制，使得逻辑上相关的属性值必须以字面量的形式重复输出，导致难以维护。

##### 6. UI 组件库全局规划

##### 7. UI 组件库规范应用

#### Git 贡献提交规范

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中
