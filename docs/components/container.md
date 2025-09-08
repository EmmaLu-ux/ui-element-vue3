# Container 页面容器

用于搭建常见的页面布局结构。包含 `UeContainer`、`UeHeader`、`UeAside`、`UeMain`、`UeFooter`。

## 基础结构

::: demo Container 提供基础页面结构，默认在检测到 `Header` 或 `Footer` 时使用纵向布局；内部嵌套时可形成左右结构。

```html
container/basic
```

:::

## 典型左右布局（左侧边）

::: demo 通过嵌套 `Container` 与 `Aside/Main` 组合实现左右布局，可放在 `Header/Footer` 之间。

```html
container/aside-left
```

:::

## 典型左右布局（右侧边）

::: demo 调整 `Aside/Main` 顺序即可得到右侧边布局。

```html
container/aside-right
```

:::

## 自定义尺寸与背景

::: demo 通过 `height / width / bgColor` 等属性快速调整容器尺寸与视觉色块。

```html
container/props
```

:::

## 属性

- UeContainer: `direction`（`vertical` / `horizontal`，默认自动推断）
- UeHeader: `height`、`bgColor`
- UeAside: `width`、`bgColor`
- UeMain: `bgColor`
- UeFooter: `height`、`bgColor`
