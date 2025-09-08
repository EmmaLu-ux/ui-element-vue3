# Textarea 文本域

用于多行文本的输入场景，如备注、描述、反馈等。支持占位、禁用、字数统计、行数、宽度等配置。

## 基础用法

::: demo 使用 `v-model` 绑定文本内容。

```html
textarea/basics
```

:::

## 行数

::: demo 通过 `rows` 指定可视区域的行数，高度可在用户拖拽时调整（支持纵向 resize）。

```html
textarea/rows
```

:::

## 禁用

::: demo 设置 `disabled` 使文本域不可编辑。

```html
textarea/disabled
```

:::

## 字数统计

::: demo 同时设置 `maxlength` 与 `showCount` 展示“已输入/上限”。超过上限会标红提示。

```html
textarea/count
```

:::

## 宽度

::: demo 通过 `width` 设置组件宽度（数字字符串表示 px）。

```html
textarea/width
```

:::

## 事件

::: demo 常用事件：`input`、`focus`、`blur`、`change`、`keydown`、`keyup`，以及中文输入法的合成事件。

```html
textarea/events
```

:::

## 属性

<div class="md-cols" style="--col-1:130px; --col-2:140px; --col-3:120px; --col-4:auto;">

| 属性名        | 类型            | 默认值       | 说明                                        |
| ------------- | --------------- | ------------ | ------------------------------------------- |
| `v-model`     | `string`        | `''`         | 文本内容                                    |
| `placeholder` | `string`        | `请输入内容` | 占位文本                                    |
| `disabled`    | `boolean`       | `false`      | 是否禁用                                    |
| `maxlength`   | `number/string` | `''`         | 最大输入长度                                |
| `showCount`   | `boolean`       | `false`      | 是否展示“已输入/上限”计数                   |
| `width`       | `string`        | `100%`       | 组件宽度，传数字字符串如 `420` 表示 `420px` |
| `rows`        | `string/number` | `''`         | 可视区域初始行数（如 `3`）                  |

</div>

## 事件

<div class="md-cols" style="--col-1:250px; --col-2:200px; --col-3:auto;">

| 事件名                        | 回调参数       | 说明                                       |
| ----------------------------- | -------------- | ------------------------------------------ |
| `input`                       | `(value, evt)` | 输入变化时触发（支持中文输入法结束后触发） |
| `focus`/`blur`                | `(evt)`        | 聚焦/失焦时触发                            |
| `mouseenter`/`mouseleave`     | `(evt)`        | 鼠标进入/离开时触发                        |
| `compositionstart/update/end` | `(evt)`        | 输入法合成相关事件                         |
| `change`                      | `(evt)`        | 原生 change 事件                           |
| `keydown`/`keyup`             | `(evt)`        | 键盘按下/抬起时触发                        |

</div>
## 插槽

无。
