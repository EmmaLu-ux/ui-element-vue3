# Tooltip 文字提示

以气泡形式展示简短说明，支持悬停/点击触发、丰富的定位、主题与自定义颜色，亦可手动控制显示隐藏。

## 基础用法

::: demo 默认悬停触发，可直接通过 `content` 传入文本。

```html
tooltip/basics
```

:::

## 触发方式

::: demo 通过 `trigger` 指定触发方式：`hover`（默认）或 `click`。

```html
tooltip/click
```

:::

## 位置

::: demo 四向位置：`top`/`bottom`/`left`/`right`。

```html
tooltip/placement-basic
```

:::

::: demo 细分位置：`*-start`/`*-end`。

```html
tooltip/placement-variants
```

:::

## 主题与颜色

::: demo 使用 `theme` 切换浅色/深色主题，或通过 `bgColor`、`textColor` 自定义颜色（优先级更高）。

```html
tooltip/theme
```

:::

## 自定义内容

::: demo 使用 `#content` 插槽放入更丰富的结构。

```html
tooltip/slot
```

:::

## 手动控制

::: demo 设置 `manual` 手动模式，配合组件实例的 `show()`、`hide()` 控制显隐。

```html
tooltip/manual
```

:::

## Popper 选项

::: demo 通过 `popperOptions` 透传 Popper.js 配置，例如自定义偏移量。

```html
tooltip/popper
```

:::

## 事件

::: demo 监听 `visible-change` 获取显示状态变更。

```html
tooltip/events
```

:::

## 属性

<div class="md-cols" style="--col-1:160px; --col-2:160px; --col-3:120px; --col-4:auto;">

| 属性名         | 类型                    | 默认值    | 说明                                                                 |
| -------------- | ----------------------- | --------- | -------------------------------------------------------------------- |
| `trigger`      | `string`                | `hover`   | 触发方式：`hover` / `click`                                          |
| `placement`    | `string`                | `bottom`  | 气泡位置：`top`/`bottom`/`left`/`right` 及 `*-start`/`*-end`         |
| `theme`        | `string`                | `dark`    | 主题：`light` / `dark`                                               |
| `bgColor`      | `string`                | `''`      | 自定义背景色（优先级高于 `theme`）                                   |
| `textColor`    | `string`                | `''`      | 自定义文字颜色                                                       |
| `manual`       | `boolean`               | `false`   | 手动模式（不响应触发方式，由方法控制）                               |
| `content`      | `string`                | `''`      | 简单内容字符串（也可使用 `#content` 插槽）                            |
| `popperOptions`| `object`                | `{}`      | 透传 Popper.js 配置，如 `offset`/`flip`/`preventOverflow` 等         |

</div>

## 事件

<div class="md-cols" style="--col-1:180px; --col-2:220px; --col-3:auto;">

| 事件名            | 回调参数         | 说明               |
| ----------------- | ---------------- | ------------------ |
| `visible-change`  | `(visible: boolean)` | 显示状态变化时触发 |

</div>

## 插槽

| 插槽名     | 说明                 |
| ---------- | -------------------- |
| `default`  | 触发区域的内容       |
| `content`  | 气泡内容（富文本/组件） |

