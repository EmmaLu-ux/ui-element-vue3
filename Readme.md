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
  - docs # 组件文档
  - examples # UI组件库文档测试代码
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

**`@change`或`v-on:change`**：是原生 HTML `input` 元素的标准事件之一。当复选框的状态发生改变时（比如用户点击选中/取消选中），input 元素会触发一个原生的 `change` 事件。这不需要特别定义，它是 HTML 规范中就内置的事件。

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
        :value="value" 
        @change="changeEvent"
        />
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
// v-model="model"：model为true，说明是checkbox组件，且被选中了，然后在ue-checkbox-state.js中，isChecked又是根据这个model的值来确定的，所以v-model="model"跟isChecked是同步的
const { isDisabled, checkboxSize, isChecked, model, changeEvent } = useCheckbox({
  props,
  checkboxModel,
})
</script>
```

###### 7.1 数据同步的原理

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

###### 7.2 全选功能

全选的交互逻辑：用户勾选“全选”按钮或勾选所有复选框。即，以用户勾选的个数与选项总和为判断条件，如果勾选的个数与选项总和相等，表示全选，否则表示部分勾选或未勾选。因此，首先需要获取所有选项，将其存储为临时数据，供后期用户勾选时进行比较，以显示正确的状态。

要存储除“全选”复选框以外的选项数据，就需要获取<ue-checkbox-group>上的`v-model`属性的值，在 checkboxAll.vue 组件中，提供了一个依赖`provide`共享了`v-model`、`props`和其他数据。然后在哪里会获取注入这些数据呢？每个`<ue-checkbox>`组件在`setup`阶段会调用`useCheckbox()`，该函数的执行就会去调用`useCheckboxGroup()`，`useCheckboxGroup()`方法中就`inject`了`<ue-checkbox-all>`组件提供的依赖`provide`提供的数据：`...toRefs(props)`、 `allModel`、  `changeEvent`、`setValuesEvent`，即`checkboxAllKey`。只要`checkboxAllKey`不是`undefined`，就是全选组件状态。然后在 use-checkbox-model.js 中会根据是否是复选框组进行判断后给出`model`的值。

###### 7.3 composables 组合式函数

composables 是 Vue3 的一个组合式 API，用来封装和复用有状态逻辑的函数。它是一种设计模式，允许开发人员将可复用的逻辑抽象成单独的函数，这些函数可在组件之间共享。

定义模块 -> 应用模块

- use-checkbox.js
- use-checkbox-state.js
- use-checkbox-group.js
- use-checkbox-model.js
- use-checkbox-event.js



###### 7.4 全选复选框组件总结

1. 首先，当 CheckboxAll 组件**初始化**时：
- 创建了 `checkAll` (`ref(false)`) 用于控制全选框的选中状态
- 创建了 `allModel` (`defineModel`) 用于存储所有选中的项
- 创建了 `indeterminate` (`ref(false)`) 用于控制半选状态
- 创建了 `list` (`ref([])`) 用于收集所有可选项的值
- 通过 provide 注入了 `CHECKBOX_ALL_KEY`，向下传递了 `allModel`、`chengEvent` 和 `setValuesEvent` 等

2. 当子 Checkbox 组件**被渲染**时：
- 每个子 Checkbox 组件通过 `useCheckboxGroup` 获取注入的 `CHECKBOX_ALL_KEY`
- 在 `useCheckboxModel` 中，发现自己是子复选框（通过判断 `isAll && !props.all`），就会调用 `setValuesEvent` 将自己的 value 添加到父组件的 `list` 数组中
- 此时 `list` 数组就收集到了所有可选项的值

3. 当用户**点击全选框**时：
- 触发 `handleAll` 函数
- 如果选中全选框（val 为 true），则将 `allModel.value` 设置为 `list.value`（即选中所有选项）
- 如果取消全选框（val 为 false），则将 `allModel.value` 设置为空数组（即取消所有选中）
- 同时将 `indeterminate` 设置为 false（清除半选状态）

4. 当用户**点击单个复选框**时：
- 复选框值改变，触发 `useCheckboxModel` 中的 computed 的 set 方法
- 因为是组内复选框，所以调用 `checkboxAllKey.chengEvent`
- `chengEvent` 函数执行：
  1. 更新 `allModel.value` 为新的选中值数组
  2. 调用 `changeAllEvent` 更新全选框状态
  3. 触发 change 事件向外部通知变化

5. 在 `changeAllEvent` 中：
- 计算当前选中的数量 `checkedCount`
- 如果选中数量等于总数量，将 `checkAll.value` 设为 true（显示全选）
- 如果选中数量大于0但小于总数量，将 `indeterminate` 设为 true（显示半选）
- 如果选中数量为0，则 `checkAll` 和 `indeterminate` 都为 false

整个流程形成了一个完整的循环：
```
全选框选中/取消 ➡️ handleAll ➡️ 更新 allModel ➡️ 子复选框状态更新

子复选框选中/取消 ➡️ useCheckboxModel ➡️ chengEvent ➡️ changeAllEvent ➡️ 更新全选框状态
```

通过这种设计：
- 子复选框在初始化时自动向父组件注册自己
- 全选框状态和子复选框状态始终保持同步
- 支持全选、取消全选、半选等所有状态
- 状态变化时可以向外部通知
- 使用组合式API和依赖注入使得代码结构清晰，易于维护

---

##### 8. Switch组件

Switch 组件通常用于表示一个二进制选择，例如打开/关闭、启用/禁用等。在组件设计中，该组件主要包含“基础”、“主题”、“文字”、“图标”、“加载”、“尺寸”、“”等类型，并且需要实现开关切换过程的过渡动画效果。

> [!IMPORTANT]
>
> 实现逻辑：**通过原生 input 元素的 checkbox 类型和原生 button 按钮去实现 Switch 组件。**原生 button 按钮是 Switch 组件中间的“白色圆”。

###### 8.1 初始化Switch组件

###### 8.2 私有样式变量

###### 8.3 主题



































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







---

#### Form 与 FormItem 组件

在`FormItem`中：

**校验功能的实现**是使用`async-validator`校验库，同`Ant Design`和`Element`一样。`async-validator`校验库采用`key/value`的形式定义校验规则，那么在`Form`表单中，可以这样传输数据：交互控件通过插槽的形式渲染，控件的`v-model`所绑定的数据也都不一样，因此可以将`v-model`绑定的数据传入到`FormItem`中，这样就可以进行校验了，因为我们是打算在`FormItem`中去执行校验操作的。

具体实现逻辑：在`FormItem`组件中定义`validate`方法用于校验数据，然后将该校验方法通过`provide`方法暴露出去，在`input`组件中通过引入`useFormItem`钩子获取到`FormItem`暴露出来的`validate`方法。关于`input`组件数据的校验场景有两个：1. 输入过程中校验数据；2. 鼠标失去焦点后校验数据。因此在`useEvent`函数中添加一个`afterBlur`函数参数，以及通过`watch`函数去监听`input`的值`modelValue`是否有变化，如果有，就执行数据校验。

> [!NOTE]
>
> async-validator：一个用于表单异步校验的库。

在`Form`中：

校验规则`rules`可以放在`FormItem`标签上（校验逻辑如前所述），也可以放在`Form`标签上。要做到在`Form`组件上去校验表单数据，需要将`FormItem`的所有字段传给`Form`，这里采用的方法是：在`Form`中通过`provide`去提供一个`pushField`方法（为了获取`FormItem`所有字段），`FormItem`一挂载，只要有`name`属性，就将`FormItem`所有属性，即`props`，通过`pushField`添加进`modelFields`中，当然还有`validate`、`reset`这两个校验和重置的方法，它们也需要在`Form`组件中去被使用的。此时，在`Form`中就可以进行校验的工作了。

**校验功能的实现**是直接使用`FormItem`提供的`validate`校验方法。具体逻辑：在执行校验前，需要先明确哪些字段是需要做校验的。因此要先进行字段过滤，将需要检验的字段过滤出来，然后通过`for`循环去一个一个的执行`validate`校验，因为`FormItem`提供过来的字段数据内都会有`FormItem`标签上的属性、`validate`方法和`resetField`方法。`Form`组件之需要对校验结果进行返回即可，成功则返回`true`，失败则返回`false`。

---

#### Message组件

通过采用`createVNode`函数去生成虚拟节点的方式去渲染`Message`组件，其中涉及到`render`函数等内容。同时使用`transition`组件去渲染`Message`组件从出现到离开的过渡动画。

> `createVNode`和`transition`都是`Vue.js 3`中的API

**`useResizeObserver`函数解读：**

`useResizeObserver(target, callback, options?)`：

- `target`：单个或多个 DOM 元素，或其 `ref/computed` 引用
- `callback(entries, observer)`：尺寸变更的回调，入参为 `ResizeObserverEntry[]`
- `options.box`：观察盒模型类型，`'content-box' | 'border-box' | 'device-pixel-content-box'`，默认 `content-box`

```javascript
useResizeObserver(messageRef, entries => {
  const entry = entries[0]
  height.value = entry.contentRect.height // message元素内容矩形的高度
})
```

---

#### Tooltip 组件

Tooltip 组件实现逻辑：根元素包含触发区域和内容区域，触发区域一般是文本、按钮等元素，内容区域就是弹出的 Tooltip 小气泡。内容区域内包含两个元素：插槽和箭头。插槽是用户自定义的弹出内容，箭头是体现该触发区的解读小气泡。箭头的定位采用`@popperjs/core`库，SCSS 仅负责外观（圆角、大小）。

```html
<div :class="[ns.b()]" ref="tooltipRef" v-on="outerEvents">
    <!-- 触发区域 -->
    <div :class="[ns.e('trigger')]" ref="triggerRef" v-on="events">
      <slot />
    </div>
    <!-- 展示区域 -->
    <div
      v-show="isOpen"
      :class="[ns.e('content'), ns.m('theme', theme)]"
      :style="contentStyle"
      ref="contentRef">
      <slot name="content">{{ content }}</slot>
      <!-- NOTE: Popper 将自动拾取 data-popper-arrow 标记的元素并将其定位，伪类相对于.arrow元素的定位 -->
      <div :class="[ns.e('arrow')]" data-popper-arrow></div>
    </div>
  </div>
```

触发方式：`trigger="hover|click|focus"`

**问题1：为什么`top-start`情况下，`arrow`靠右显示呢？**

解答：这是`@popperjs/core`默认的正常现象。Popper 的 arrow 会沿“副轴”对齐到触发元素的中心，而不是对齐到气泡自身的中心或边缘。`top-start` 表示上方且左侧对齐，若触发元素比 tooltip 宽，箭头为了“指向触发元素中心”就会在 tooltip 内显得更靠右。

> 副轴概念的理解：
>
> - placement 为 top/bottom: 主轴=y（上下），副轴=x（左右）。
> - placement 为 left/right: 主轴=x（左右），副轴=y（上下）

> [!IMPORTANT]
>
> `@poppers/core` 是实现 Select、Tooltip、Popover、Popconfirm、Cascader、TimePicker 等组件的核心库。

---

#### Popover 组件



















---

#### Popper、Tooltip、Popover、Popconfirm 三个组件之间的关系

Popover 包含 Tooltip，Tooltip 包含 Popper、TooltipTrigger 和 TooltipContent，Popper 包含的是一个 slot。

```javascript
Popover：
	Tooltip：
		Popper：TooltipTrigger、TooltipContent
```

---

#### *Popper 组件

`Popper` 是 Tooltip、Popover 等悬浮类组件的“底座”。它不负责具体 UI，而是**统一建立 Popper 上下文，供子组件协同使用**。纯粹做上下文容器。创建并提供以下引用与状态：触发器元素 `triggerRef`、参考元素 `referenceRef`、内容元素 `contentRef`、Popper 实例 `popperInstanceRef`，以及计算属性的 `role`。

> `inheritAttrs: false` ：防止无关属性落到根元素上。

使用：<ue-popper> 包住触发区和内容区，子组件通过**注入（ provide 和 inject ）**拿到这些引用，完成定位、显示隐藏与箭头渲染等。

> `v-bind="$attrs"`：把“传给当前组件但未被 props/emits 声明”的所有属性与事件统一透传到该元素上。相当于在该元素上“展开”这些属性。





















---

#### UI组件库的打包与发布

##### UMD打包

UMD (Universal Module Definition) 打包是一种将 Javascript 库或模块打包成可以在不同环境中使用的通用格式的方法。UMD 打包同时兼容 CommonJS、AMD 和全局变量的使用方式，因此可以在项目的<script>标签中引入通过 UMD 打包的产物，直接在浏览器中以访问全局变量的方式使用。

在`build`目录下，执行打包命令：`node ./src/umnBuild.js`，得到：

1. `flori-ui/dist/index.full.js`：打包生成的 umd 格式组件包

2. `flori-ui/dist/index.css`：打包生成的 umd 格式组件包的样式

在`text.html`文件中引入这两个文件，即可在浏览器中测试该 umd 组件包是否可用。

---

##### ESM、CJS模块化打包

UMD 包属于全量模式打包，也就是将所有的组件打包为一份 JS 文件，通过在浏览器中使用 <script> 标签引入组件。经过 UMD 打包的文件大，并且无法支持按需加载。为了使打包的组件库支持按需加载模式，需要使用 ESM 和 CJS 打包模式实现按需加载，也可在打包过程中实现 Tree shaking（去除 JS 中无用的代码）优化。

##### Gulp 打包 scss 文件

需要安装 `gulp` 和 `gulp-sass` 两个库（`pnpm i gulp gulp-sass --save-dev`）

##### 全量打包

全量打包 CSS 是指将所有组件的 css 文件合并为一个单独的文件。全量打包的优势在于减少 HTTP 请求次数，提高页面加载速度，并简化管理和部署过程。然而，全量打包 CSS 可能导致文件体积过大，反而影响网页性能。因此，全量打包时要考虑代码压缩和优化。

`build/styleBuild.js`：

```javascript
// 全量打包scss
const buildScssFull = async () => {
    const sass = gulpSass(dartSass) // gulpSass支持编译scss
    await new Promise((resolve) => {
        gulp.src(`${pkgRoot}/theme/src/index.scss`) // 指定打包入口
            .pipe(sass.sync()) // 编译
            .pipe(autoprefixer({ cascade: false })) // 浏览器兼容，自动根据使用的css属性添加-webkit-、-ms-等等
            .pipe(cleanCSS()) // 压缩css
            .pipe(gulpConcat('index.min.css')) // 合并到指定文件 
            .pipe(gulp.dest(outputUmd)) //  输出到指定目录dist // NOTE: 全量打包后文件
            .on("end", resolve) // 监听流完成
    })
}

export const buildStyle = async () => {
    await Promise.all([buildScssFull(), buildScssModules()]) // 所有任务都会并行执行，提高效率。如果任何一个构建任务失败，整个构建过程就会失败
}
```

##### 按需加载打包 CSS

按需打包和全量打包的方法类似，当然也有细微区别，具体代码如下：

```javascript
// 按需打包scss
const buildScssModules = async () => {
    const sass = gulpSass(dartSass)
    await new Promise((resolve) => {
        gulp.src(`${rootDir}/packages/theme/src/**/*.scss`)
            .pipe(sass.sync()) // 编译
            .pipe(autoprefixer({ cascade: false })) // 浏览器兼容，自动根据使用的css属性添加-webkit-、-ms-等等
            .pipe(cleanCSS()) // 压缩css
            // .pipe(gulpConcat('index.min.css')) // 合并到指定文件
            .pipe(gulp.dest(`${outputDir}/theme`)) //  输出到指定目录theme // NOTE: 按需打包后文件
            .on("end", resolve) // 监听流完成
    })
    deleteFiles() // 清理旧文件
}
// 删除指定文件或文件夹
const deleteFiles = async () => {
    await deleteAsync(
        [`${outputDir}/theme/index.css`, `${outputDir}/theme/common`], // 删除全量打包文件和公共样式目录
        { force: true } // 强制跨越当前目录删除文件
    )
}
```

> [!TIP]
>
> `Promise.all()`：所有任务都会并行执行，提高效率。如果任何一个构建任务失败，整个构建过程就会失败

**最后，打包UI组件库的命令为：`pnpm run start`（注意是在 `build` 文件夹下执行），或在项目根目录下执行：`pnpm build`。**

##### 发布UI组件库至npm官方

1. 进入打包后的 `flori-ui`组件库文件夹内，执行`npm login`，登陆 npm 平台，会自动跳转至 npm 官网，正常登陆即可。

   > 查看 npm 镜像源，使用不同的镜像源会导致登陆进不同的平台，如淘宝 npm 镜像、阿里云 npm 镜像等，为了发布至官方 npm 平台，需要先查看镜像地址：`npm get registry`，只要返回的不是`https://registry.npmjs.org/`，就需要设置镜像地址为：`npm config set registry=https://registry.npmjs.org/`，然后执行`npm login`进行登陆。

2. 登陆成功后，执行`npm publish`发布。

登陆过程日志：

```shell
npm login
npm notice Log in on https://registry.npmjs.org/
Login at:
https://www.npmjs.com/login?next=/login/cli/4999aa07-7b28-4bf6-903c-5d0a918b0d0e
Press ENTER to open in the browser...

Logged in on https://registry.npmjs.org/.
```

> [!CAUTION]
>
> npm 有 24 小时的限制不允许重复发布同一个版本号/同一个包名。

发布成功的输出：

<img src="https://raw.githubusercontent.com/EmmaLu-ux/imageUpload_typora/master/uPic/2025_08_28_10_06_03_1756346763_1756346763589_R500aF_image-20250828100602861.png" alt="image-20250828100602861" style="zoom:50%;" />

---

#### 组件库的安装与使用

##### 安装

`pnpm i flori-ui`或`npm i flori-ui`

##### 使用

###### 全局引入

只需在`main.js`文件内引入组件库`flori-ui`和其全量样式`flori-ui/dist/index.min.css`，然后就可以在`.vue`文件内直接使用组件。

`main.js`文件：

```javascript
import { createApp } from 'vue'
import App from './App.vue'

import UeUI from "flori-ui"
import "flori-ui/dist/index.min.css"

createApp(App).use(Antd)
    .use(UeUI)
    .mount('#app')
```

`.vue`文件：

```vue
<template>
	<UeButton type="primary">主按钮</UeButton>
</template>
```

###### 按需引入

按需引入不需要在`main.js`文件做引入，可直接在`.vue`文件按需引入使用。引入组件的同时，也自动引入了该组件的样式。

```vue
<template>
	<UeButton type="success">成功按钮</UeButton>
</template>
<script setup>
	import { UeButton } from "flori-ui"
</script>
```



#### 本地模拟npm包测试

1. 在根目录执行`pnpm build`对 UI 组件库进行打包，生成`flori-ui`文件夹，这就是打包后的 UI 组件库。

2. 进入`flori-ui`文件夹内，执行`pnpm link`进行全局注册。

3. 进入要演示的 vue 项目根目录，执行`pnpm link flori-ui`引入该组件库至 vue 项目内（一个软链接，可在`node_modules`中查看）。

> [!TIP]
>
> `npm link`可以为任意位置的 npm 包与全局的`node_modules`建立链接，在系统中做快捷映射，建立链接之后即可在本地进行模块测试。

`pnpm-workspace.yaml`文件自动会生成`overrides`部分：

```yaml
packages:
  - docs
  - examples
  - packages/*
overrides:
  flori-ui: link:../../../../../../Library/pnpm/global/5/node_modules/flori-ui

```

其中的`overrides` 字段告诉 `pnpm` 在整个工作区中，无论哪个项目引用 `flori-ui` 包，都使用指定路径的版本，而不是从 `npm` 仓库下载。`link:` 前缀表示这是一个本地路径链接，





















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
