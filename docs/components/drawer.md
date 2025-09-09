# Drawer 抽屉

从屏幕边缘滑出的面板，用于承载表单或辅助信息。支持标题、自定义底部、异步确认、遮罩行为、内容销毁策略、位置与尺寸等能力。

## 基础用法

::: demo 使用 `v-model` 控制显示与隐藏，点击确定后手动关闭。

```html
drawer/basics
```

:::

## 自定义页脚

::: demo 通过 `footer` 插槽完全自定义底部按钮与交互。

```html
drawer/footer
```

:::

## 异步确认

::: demo 传入 `beforeChange` 返回 Promise，可在处理中显示加载，成功后触发 `ok` 事件。

```html
drawer/asyncConfirm
```

:::

## 遮罩行为

::: demo 透传 `mask`、`maskClose` 到遮罩。默认点击遮罩会关闭；设置 `:maskClose="true"` 将禁止点击遮罩关闭。

```html
drawer/mask
```

:::

## 位置

::: demo 通过 `placement` 设置抽屉出现位置。

```html
drawer/placement
```

:::

## 宽度

::: demo 通过 `width` 控制左右抽屉宽度（可传数字或带单位的字符串）。

```html
drawer/size
```

:::

## 事件

::: demo 监听打开/关闭的生命周期事件，以及确定、取消事件。

```html
drawer/events
```

:::

## 关闭时是否销毁

::: demo `unmountOnClose` 为 `false` 时，不销毁内部内容；再次打开会保留之前的输入/状态。

```html
drawer/keepAlive
```

:::

## 属性

<div class="md-cols" style="--col-1:180px; --col-2:140px; --col-3:120px; --col-4:auto;">

| 属性名              | 类型            | 默认值  | 说明                                                                 |
| ------------------- | --------------- | ------- | -------------------------------------------------------------------- |
| `v-model`           | `boolean`       | `false` | 控制抽屉的显示与隐藏                                                 |
| `title`             | `string`        | `''`    | 标题文本                                                             |
| `footer`            | `boolean`       | `true`  | 是否显示底部区域。为 `false` 时不展示默认底部与自定义插槽            |
| `cancelButtonText`  | `string`        | `取消`  | 取消按钮文本                                                         |
| `cancelButtonShow`  | `boolean`       | `true`  | 是否显示取消按钮                                                     |
| `confirmButtonText` | `string`        | `确定`  | 确认按钮文本                                                         |
| `confirmButtonShow` | `boolean`       | `true`  | 是否显示确认按钮                                                     |
| `confirmLoading`    | `boolean`       | `false` | 外部受控的确认按钮加载态（与内置加载合并显示）                       |
| `beforeChange`      | `() => Promise` | `-`     | 点击确认时触发；返回 Promise，resolve 后触发 `ok` 事件               |
| `unmountOnClose`    | `boolean`       | `true`  | 关闭时是否卸载内容（销毁内部状态）                                   |
| `width`             | `string`        | `''`    | 抽屉宽度（可传数字/数字字符串，默认单位 px，也支持 `%/rem` 等）       |
| `fixedScreen`       | `boolean`       | `true`  | 是否占满可视高度并让内容区内部滚动（侧边抽屉默认即为该效果）         |
| `placement`         | `string`        | `right` | 出现位置：`right`/`left`/`top`/`bottom`                               |

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
| `default` | 抽屉主体内容                                    |
| `footer`  | 自定义底部内容；设置后替换默认的“取消/确定”按钮 |
