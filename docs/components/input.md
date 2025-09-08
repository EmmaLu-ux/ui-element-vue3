# Input 输入框

用于文本输入的基础组件，支持尺寸、前后缀、清空、字数统计、密码显示、左右扩展等能力，可搭配表单验证使用。

## 基础用法

::: demo 使用 `v-model` 双向绑定输入值。

```html
input/basics
```

:::

## 尺寸

::: demo 通过 `size` 设置组件尺寸：`sm`、`md`、`lg`、`xl`。

```html
input/size
```

:::

## 禁用

::: demo 通过 `disabled` 使输入框不可编辑。

```html
input/disabled
```

:::

## 可清空

::: demo 设置 `clearable` 显示清除按钮（有值、未禁用、`type=text` 时显示）。

```html
input/clearable
```

:::

## 密码显隐

::: demo 设置 `showPassword` 在后缀显示切换密码可见性的图标。

```html
input/password
```

:::

## 字数统计

::: demo 设置 `maxlength` 与 `showCount` 展示“已输入/上限”。超过上限会标红提示。

```html
input/count
```

:::

## 前缀/后缀

::: demo 通过 `prefix`/`suffix` 文本或 `prefixIconfont`/`suffixIconfont` 图标展示。也支持 `prefixIcon`/`suffixIcon` 传入组件。

```html
input/prefix
```

:::

## 前后置内容

::: demo 使用 `#prepend`/`#append` 插槽或 `prepend`/`append` 文本属性扩展两侧内容。

```html
input/prepend
```

:::

## 圆角与宽度

::: demo 使用 `round` 启用更圆的外观；通过 `width` 设置宽度（传数字字符串，单位 px）。

```html
input/round
```

```html
input/width
```

:::

## 事件

::: demo 常用事件：`input`、`clear`、`focus`、`blur`、`change`、`keydown`、`keyup`。

```html
input/events
```

:::

## 属性

| 属性名 | 类型 | 默认值 | 说明 |
| ------ | ---- | ------ | ---- |
| `v-model` | `string` | `''` | 输入值 |
| `placeholder` | `string` | `请输入内容` | 占位提示 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `maxlength` | `number/string` | `''` | 最大输入长度 |
| `size` | `string` | `sm` | 尺寸：`sm`/`md`/`lg`/`xl` |
| `round` | `boolean` | `false` | 是否圆角外观 |
| `type` | `string` | `text` | 原生 input 类型，支持 `text`/`password` 等（配合 `showPassword` 更友好） |
| `showPassword` | `boolean` | `false` | 是否显示密码可见切换图标，仅在 `type='password'` 或同等场景有意义 |
| `clearable` | `boolean` | `false` | 是否可一键清除（仅 `type='text'` 且有值时显示） |
| `showCount` | `boolean` | `false` | 是否展示“已输入/上限”计数 |
| `width` | `string` | `100%` | 组件宽度，传数字字符串如 `320` 表示 `320px` |
| `prefix`/`suffix` | `string` | `''` | 前缀/后缀文本 |
| `prefixIcon`/`suffixIcon` | `Component|string` | `''` | 前缀/后缀图标组件或名称（组件优先） |
| `prefixIconfont`/`suffixIconfont` | `string` | `''` | 使用 iconfont 类名（例如 `icon-search1`） |
| `prepend`/`append` | `string` | `''` | 左右两侧扩展的纯文本内容（插槽优先） |
| `validateEvent` | `boolean` | `true` | 是否在表单中触发表单校验（依赖表单组件） |

## 事件

| 事件名 | 回调参数 | 说明 |
| ------ | -------- | ---- |
| `input` | `(value, evt)` | 输入变化时触发（支持中文输入法结束后触发） |
| `clear` | `()` | 点击清空按钮后触发 |
| `focus`/`blur` | `(evt)` | 聚焦/失焦时触发 |
| `mouseenter`/`mouseleave` | `(evt)` | 鼠标进入/离开时触发 |
| `compositionstart/update/end` | `(evt)` | 输入法合成相关事件 |
| `change` | `(evt)` | 原生 change 事件 |
| `keydown`/`keyup` | `(evt)` | 键盘按下/抬起时触发 |

## 插槽

| 插槽名 | 说明 |
| ------ | ---- |
| `prepend` | 左侧附加内容区域 |
| `append` | 右侧附加内容区域 |
