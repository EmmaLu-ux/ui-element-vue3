# ModalBox 确认弹窗

以函数方式快速弹出一个带图标的确认/提示弹窗。适合在交互中进行二次确认或展示重要信息。

## 基础用法

::: demo 通过全局方法 `$modalBox` 打开一个确认弹窗。

```html
modalBox/basics
```

:::

## 图标类型

::: demo 提供四种内置图标与主题：`info`、`success`、`warning`、`error`。

```html
modalBox/types
```

:::

## 自定义内容（VNode）

::: demo `content` 支持字符串或 VNode，可灵活渲染复杂内容。

```html
modalBox/vnode
```

:::

## 底部按钮

::: demo 可通过 `confirmButtonText`、`cancelButtonText` 修改按钮文案，或隐藏取消按钮。

```html
modalBox/footer
```

:::

## 异步确认

::: demo 在 `beforeChange` 返回 Promise 时，确认按钮会进入加载态，Promise 结束后自动关闭。

```html
modalBox/async
```

:::

## 遮罩行为

::: demo 透传 `mask`、`maskClose` 给遮罩。默认点击遮罩会关闭；设置 `:maskClose="true"` 将禁止点击遮罩关闭。

```html
modalBox/mask
```

:::

## 方法

<div class="md-cols" style="--col-1:100px; --col-2:120px; --col-3:auto;">

| 方法名       | 参数        | 说明                 |
| ------------ | ----------- | -------------------- |
| `$modalBox`  | `(options)` | 打开一个确认弹窗     |

</div>

提示：支持直接传入字符串作为内容（等价于 `{ content: '...' }`）。

## 选项

<div class="md-cols" style="--col-1:150px; --col-2:180px; --col-3:90px; --col-4:auto;">

| 选项名              | 类型                | 默认值    | 说明                                                                 |
| ------------------- | ------------------- | --------- | -------------------------------------------------------------------- |
| `title`             | `string`            | `''`      | 标题文本                                                             |
| `content`           | `string \| VNode`   | `''`      | 弹窗内容，支持传入 VNode（如 `h('div', ...)`）                        |
| `icon`              | `string`            | `warning` | 图标与主题：`info`/`success`/`warning`/`error`                        |
| `footer`            | `boolean`           | `true`    | 是否显示底部区域                                                     |
| `cancelButtonText`  | `string`            | `取消`    | 取消按钮文本                                                         |
| `cancelButtonShow`  | `boolean`           | `true`    | 是否显示取消按钮                                                     |
| `confirmButtonText` | `string`            | `确定`    | 确认按钮文本                                                         |
| `confirmButtonShow` | `boolean`           | `true`    | 是否显示确认按钮                                                     |
| `confirmLoading`    | `boolean`           | `false`   | 外部受控的确认按钮加载态（与内置加载合并显示）                       |
| `beforeChange`      | `() => Promise`     | `-`       | 点击确认时触发；返回 Promise，处理中显示加载，结束后自动关闭         |
| `mask`              | `boolean`           | `true`    | 是否显示遮罩（作为属性透传到内部 `ue-mask`）                          |
| `maskClose`         | `boolean`           | `false`   | 是否禁止点击遮罩关闭。默认允许点击遮罩关闭；设为 `true` 不响应遮罩点击 |

</div>

## 安装与调用

全量引入组件库时会自动注册全局方法 `$modalBox`，可直接在组件内调用。

按需引入时也可单独安装：

```ts
import { createApp } from "vue"
import { UeModalBox } from "flori-ui-vue3"

const app = createApp(App)
app.use(UeModalBox)
```

