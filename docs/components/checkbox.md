# Checkbox 复选框

用于在一组可选项中进行多选，也可单独作为开关使用。支持分组、全选、半选、异步前置校验、尺寸和类型等能力。

## 基础用法

::: demo 通过 `v-model` 绑定布尔值，表示选中与否。

```html
checkbox/basis
```

:::

## 复选框组

::: demo 使用 `ue-checkbox-group` 管理一组选项，`v-model` 绑定数组。

```html
checkbox/group
```

:::

## 全选

::: demo 使用 `ue-checkbox-all` 组件实现全选/半选逻辑，内部复选框与外部 `v-model` 同步。

```html
checkbox/all
```

:::

## 半选（Indeterminate）

::: demo 设置 `indeterminate` 展示半选视觉，一般配合全选或分组使用。

```html
checkbox/indeterminate
```

:::

## 类型与尺寸

::: demo 通过 `type` 展示主题风格，通过 `size` 设置尺寸（`sm`/`md`/`lg`/`xl`）。

```html
checkbox/type
```

```html
checkbox/size
```

:::

## 禁用

::: demo 设置 `disabled` 使其不可选，支持已选/未选两种状态。

```html
checkbox/disabled
```

:::

## 异步前置校验

::: demo 通过 `beforeChange` 返回 Promise，可在切换前进行校验/提交，期间展示加载中。

```html
checkbox/async
```

:::

## 属性

<div class="md-cols" style="--col-1:180px; --col-2:140px; --col-3:120px; --col-4:90px;">

| 组件                | 属性名          | 类型                    | 默认值  | 说明                                               |
| ------------------- | --------------- | ----------------------- | ------- | -------------------------------------------------- |
| `ue-checkbox`       | `v-model`       | `boolean`               | `false` | 单个复选框的选中状态                               |
| `ue-checkbox`       | `value`         | `string/number/boolean` | `-`     | 作为分组时的选项值，用于比对是否选中               |
| `ue-checkbox`       | `disabled`      | `boolean`               | `false` | 是否禁用                                           |
| `ue-checkbox`       | `size`          | `string`                | `sm`    | 尺寸：`sm`/`md`/`lg`/`xl`                          |
| `ue-checkbox`       | `type`          | `string`                | `''`    | 风格类型：`primary`/`success`/`warning`/`error` 等 |
| `ue-checkbox`       | `beforeChange`  | `() => Promise`         | `-`     | 切换前置校验，resolve 后才会切换并结束加载         |
| `ue-checkbox`       | `indeterminate` | `boolean`               | `false` | 半选视觉状态（仅样式，不改变值）                   |
| `ue-checkbox-group` | `v-model`       | `Array`                 | `[]`    | 选中项数组                                         |
| `ue-checkbox-group` | `size`          | `string`                | `sm`    | 组内项的统一尺寸                                   |
| `ue-checkbox-group` | `beforeChange`  | `() => Promise`         | `-`     | 组级前置校验，优先级高于子项的 `beforeChange`      |
| `ue-checkbox-all`   | `v-model`       | `Array`                 | `[]`    | 与内部组的选中项同步                               |
| `ue-checkbox-all`   | `size`          | `string`                | `sm`    | 全选及子项尺寸                                     |

</div>

## 事件

<div class="md-cols" style="--col-1:175px; --col-2:200px; --col-3:auto;">

| 组件                | 事件名   | 回调参数                  | 触发说明                               |
| ------------------- | -------- | ------------------------- | -------------------------------------- |
| `ue-checkbox`       | `change` | `(checked: boolean, evt)` | 原生 change 触发，返回是否选中及原事件 |
| `ue-checkbox-group` | `change` | `(value: any[])`          | 组选中值变化时触发                     |
| `ue-checkbox-all`   | `change` | `(value: any[])`          | 全选包装器内部组选中值变化时触发       |

</div>
## 插槽

| 插槽名    | 说明                             |
| --------- | -------------------------------- |
| `default` | 文本或自定义内容，位于复选框右侧 |
