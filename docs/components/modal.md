# Modal 对话框

用于承载操作与内容的模态窗口。支持标题、底部操作区、异步确认、遮罩点击关闭、内容销毁策略等能力。

## 基础用法

::: demo 使用 `v-model` 控制显示与隐藏，点击确定后手动关闭。

```html
modal/basics
```

:::

## 自定义页脚

::: demo 通过 `footer` 插槽完全自定义底部按钮与交互。

```html
modal/footer
```

:::

## 异步确认

::: demo 传入 `beforeChange` 返回 Promise，可在处理中显示加载，成功后触发 `ok` 事件。

```html
modal/asyncConfirm
```

:::

## 遮罩行为

::: demo 透传 `mask`、`maskClose` 到遮罩。默认点击遮罩会关闭；设置 `:maskClose="true"` 将禁止点击遮罩关闭。

```html
modal/mask
```

:::

## 宽度与布局

::: demo 通过 `width` 设置对话框宽度（px）。`fixedScreen` 开启时内容区内部滚动（默认）。

```html
modal/size
```

:::

## 事件

::: demo 监听打开/关闭的生命周期事件，以及确定、取消事件。

```html
modal/events
```

:::

## 关闭时是否销毁

::: demo `unmountOnClose` 为 `false` 时，不销毁内部内容；再次打开会保留之前的输入/状态。

```html
modal/keepAlive
```

:::

## 属性

<div class="md-cols" style="--col-1:180px; --col-2:140px; --col-3:120px; --col-4:auto;">

| 属性名              | 类型            | 默认值  | 说明                                                                       |
| ------------------- | --------------- | ------- | -------------------------------------------------------------------------- |
| `v-model`           | `boolean`       | `false` | 控制对话框的显示与隐藏                                                     |
| `title`             | `string`        | `''`    | 标题文本                                                                   |
| `footer`            | `boolean`       | `true`  | 是否显示底部区域。为 `false` 时不展示默认底部与自定义插槽                  |
| `cancelButtonText`  | `string`        | `取消`  | 取消按钮文本                                                               |
| `cancelButtonShow`  | `boolean`       | `true`  | 是否显示取消按钮                                                           |
| `confirmButtonText` | `string`        | `确定`  | 确认按钮文本                                                               |
| `confirmButtonShow` | `boolean`       | `true`  | 是否显示确认按钮                                                           |
| `confirmLoading`    | `boolean`       | `false` | 外部受控的确认按钮加载态（与内置加载合并显示）                             |
| `beforeChange`      | `() => Promise` | `-`     | 点击确认时触发，返回 Promise。resolve 后触发 `ok` 事件，期间按钮进入加载态 |
| `unmountOnClose`    | `boolean`       | `true`  | 关闭时是否卸载内容（销毁内部状态）                                         |
| `width`             | `string`        | `''`    | 对话框宽度（单位 px，传数字字符串如 `600` 即可）                           |
| `fixedScreen`       | `boolean`       | `true`  | 是否占满可视高度并让内容区内部滚动                                         |
| `mask`              | `boolean`       | `true`  | 遮罩是否可见（透传到遮罩组件）                                             |
| `maskClose`         | `boolean`       | `false` | 是否禁止点击遮罩关闭。默认允许点击遮罩关闭；设为 `true` 则不响应遮罩点击   |

</div>
## 事件
<div class="md-cols" style="--col-1:120px; --col-2:90px; --col-3:auto;">

| 事件名   | 回调参数 | 触发时机                                                                                |
| -------- | -------- | --------------------------------------------------------------------------------------- |
| `cancel` | `()`     | 点击取消按钮后（并自动关闭）                                                            |
| `ok`     | `()`     | 点击确认按钮；若提供 `beforeChange`，resolve 后触发（不会自动关闭，请在回调中自行收起） |
| `open`   | `()`     | 进入动画开始时                                                                          |
| `opened` | `()`     | 进入动画结束后                                                                          |
| `close`  | `()`     | 离开动画开始前（如点击遮罩/关闭按钮/取消按钮等导致关闭）                                |
| `closed` | `()`     | 离开动画结束后                                                                          |

</div>

## 插槽

| 插槽名    | 说明                                            |
| --------- | ----------------------------------------------- |
| `default` | 对话框主体内容                                  |
| `footer`  | 自定义底部内容；设置后替换默认的“取消/确定”按钮 |
