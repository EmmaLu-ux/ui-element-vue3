# ButtonGroup 按钮组

将一组相关操作的按钮并排显示，形成整体的视觉单元。按钮组会处理相邻按钮的圆角与边框重叠，让它们看起来像一个整体。

## 基础用法

::: demo 使用 `ue-button-group` 包裹多个 `ue-button`。常见于分页、视图切换等场景。

```html
buttonGroup/basis
```

:::

## 尺寸

::: demo 通过 `size` 统一控制组内所有按钮的尺寸，子按钮未显式指定时会继承组尺寸。

```html
buttonGroup/size
```

:::

## 类型组合

::: demo 组内的每个按钮可使用不同的 `type`，用于表达不同操作语义。

```html
buttonGroup/types
```

:::

## 常见样式

::: demo 与按钮的外观属性（如 `round`、`outline`、`link`、`dashed`）配合使用。组会处理相邻按钮的边角衔接。

```html
buttonGroup/styles
```

:::

## 属性

| 属性名 | 类型 | 默认值 | 说明 |
| ------ | ---- | ------ | ---- |
| `size` | `string` | `md` | 统一控制组内按钮尺寸：`sm`/`md`/`lg`/`xl` |

## 事件

无。请在组内的 `ue-button` 上使用其自身事件（如 `click`）。

## 插槽

| 插槽名 | 说明 |
| ------ | ---- |
| `default` | 放置一个或多个 `ue-button` 按钮 |

