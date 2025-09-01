# Button

按钮用于触发操作，是最常见的交互元素之一。支持多种外观、状态和交互方式，适用于表单提交、页面跳转、功能触发等场景。

## 按钮类型

::: demo 常用的五种类型，分别是：默认按钮、主要按钮、成功按钮、警告按钮、危险按钮。

```html
button/basis
```

:::

## 按钮尺寸

::: demo 通过 `size` 属性控制按钮的大小。`sm`、`md`、`lg`、`xl`分别把按钮设置为小、中、大、超大尺寸，若不设置`size`，则尺寸为小。

```html
button/size
```

:::

## 禁用状态

::: demo 设置 `disabled` 属性可以让按钮处于不可点击状态。常用于需要等待条件满足，或操作不可用时的场景。

```html
button/disabled
```

:::

## 加载中状态

::: demo 设置 `loading` 属性可以让按钮处于加载状态。常用于异步操作，等待操作完成后自动切换为默认状态。

```html
button/loading
```

:::

## 圆角与圆形

::: demo 通过 `round` 属性可以让按钮显示为圆角矩形，更加柔和。通过 `circle` 属性可以让按钮显示为圆形，通常配合图标使用。

```html
button/round
```

:::

## Outline 按钮

::: demo 通过 `outline` 属性可以让按钮显示为 Outline 按钮，即没有背景颜色，只有边框。

```html
button/outline
```

:::

## 链接按钮

::: demo 通过 `link` 属性可以让按钮显示为链接按钮，即没有背景颜色，没有边框。

```html
button/link
```

:::

## 块级按钮

::: demo 通过 `block` 属性可以让按钮显示为块级元素，宽度为 100%。

```html
button/block
```

:::

## 属性

| 属性名     | 类型      | 默认值    | 说明                                                                 |
| ---------- | --------- | --------- | -------------------------------------------------------------------- |
| `type`     | `string`  | `default` | 按钮类型，可选：`default`、`primary`、`success`、`warning`、`danger` |
| `size`     | `string`  | `medium`  | 按钮尺寸，可选：`small`、`medium`、`large`                           |
| `disabled` | `boolean` | `false`   | 是否禁用按钮                                                         |
| `loading`  | `boolean` | `false`   | 是否显示加载中状态                                                   |
| `round`    | `boolean` | `false`   | 是否为圆角按钮                                                       |
| `circle`   | `boolean` | `false`   | 是否为圆形按钮（常用于图标按钮）                                     |
| `block`    | `boolean` | `false`   | 是否为块级元素，宽度为 100%                                          |
| `outline`  | `boolean` | `false`   | 是否为 outline 按钮，即没有背景颜色，只有边框                        |
| `link`     | `boolean` | `false`   | 是否为链接按钮，即没有背景颜色，没有边框，点击时会有下划线           |

## 事件

| 事件名  | 回调参数 | 说明           |
| ------- | -------- | -------------- |
| `click` | `(evt)`  | 点击按钮时触发 |

## 插槽

| 插槽名    | 说明         |
| --------- | ------------ |
| `default` | 按钮内容文本 |
| `icon`    | 按钮左侧图标 |
