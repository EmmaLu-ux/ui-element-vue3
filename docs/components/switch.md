# Switch 开关

在开/关两种状态间切换的控件。支持尺寸、类型、标签/图标、自定义取值、异步前置校验与切换动效。

## 基础用法

::: demo 使用 `v-model` 绑定当前值（默认 `true/false`）。

```html
switch/basics
```

:::

## 尺寸

::: demo 通过 `size` 设置尺寸：`sm`、`md`、`lg`、`xl`。

```html
switch/size
```

:::

## 类型

::: demo 使用 `type` 切换主题风格，常用于表达状态语义。

```html
switch/types
```

:::

## 标签文案

::: demo 使用 `onLabel` / `offLabel` 显示两端的标签文本（自动截取中/英文）。

```html
switch/labels
```

:::

## 中心图标

::: demo 设置 `centerIcon` 并传入 `onIcon` / `offIcon` 组件，在圆钮内显示图标。

```html
switch/centerIcon
```

:::

## 自定义取值

::: demo 通过 `checkedValue` 和 `uncheckedValue` 自定义取值类型（如 `1/0` 或 `'Y'/'N'`）。

```html
switch/customValue
```

:::

## 禁用

::: demo 设置 `disabled` 禁用开关，支持加载中态锁定交互。

```html
switch/disabled
```

:::

## 异步前置校验

::: demo 使用 `beforeChange`（返回值可为布尔或 Promise）。返回 `false` 阻止切换；Promise 期间显示加载。

```html
switch/async
```

:::

## 切换动效

::: demo 通过 `transition` 控制标签切换的动画：`scale` 或 `slide`。

```html
switch/transition
```

:::

## 属性

<div class="md-cols" style="--col-1:180px; --col-2:180px; --col-3:120px; --col-4:auto;">

| 属性名               | 类型                                 | 默认值    | 说明                                                                           |
| -------------------- | ------------------------------------ | --------- | ------------------------------------------------------------------------------ |
| `v-model`            | `any`                                | `false`   | 当前值，与 `checkedValue`/`uncheckedValue` 对比决定状态                        |
| `type`               | `string`                             | `primary` | 风格类型：`primary`/`success`/`warning`/`error` 等                             |
| `size`               | `string`                             | `sm`      | 尺寸：`sm`/`md`/`lg`/`xl`                                                      |
| `onLabel`/`offLabel` | `string`                             | `''`      | 两端文案，中文取首字符，英文最多 3 个字符                                      |
| `onIcon`/`offIcon`   | `Component/string`                   | `''`      | 两端或中心显示的图标组件（常配合 `centerIcon`）                                |
| `centerIcon`         | `boolean`                            | `false`   | 是否在圆钮中心显示图标（优先于两端文案）                                       |
| `disabled`           | `boolean`                            | `false`   | 是否禁用                                                                       |
| `checkedValue`       | `any`                                | `true`    | 选中状态对应的值                                                               |
| `uncheckedValue`     | `any`                                | `false`   | 未选中状态对应的值                                                             |
| `beforeChange`       | `() => boolean/Promise<booleanvoid>` | `-`       | 切换前置校验，返回 `false` 阻止；Promise 期间进入加载，resolve 为 `false` 同样 |
| `transition`         | `string`                             | `scale`   | 标签切换动效：`scale`/`slide`                                                  |

</div>
## 事件

当前通过 `v-model` 更新值。可自行监听 `v-model` 绑定数据的变化处理业务逻辑。

## 插槽

无。
