# Grid 栅格系统

基于 24 等分的响应式栅格，用于快速进行页面内容的行列排布。包含 `UeRow` 与 `UeCol` 两个组件。

## 基础用法

::: demo 栅格系统基于 24 等分，将内容区域按列进行划分，通过 `span` 指定占据列数。

```html
grid/basic
```

:::

## 列间距 gutter

::: demo 通过 `gutter` 设置列与列之间的水平间距，单位为 px。

```html
grid/gutter
```

:::

## 行间距 gap

::: demo 通过 `gap` 设置行与行之间的垂直间距，单位为 px。

```html
grid/gap
```

:::

## 主轴对齐 justify

::: demo 使用 `justify` 控制主轴(水平)的对齐方式：`start` / `center` / `end` / `space-between` / `space-around` / `evenly`。

```html
grid/justify
```

:::

## 偏移 offset

::: demo 通过 `offset` 设置列的左侧间隔列数，用于创建更灵活的布局。

```html
grid/offset
```

:::

## Row 属性

- tag: 自定义渲染标签，默认 `div`
- gutter: 列间水平间距（px），默认 `0`
- justify: 主轴对齐方式：`start` / `center` / `end` / `space-between` / `space-around` / `evenly`
- gap: 行间垂直间距（px），默认 `0`

## Col 属性

- tag: 自定义渲染标签，默认 `div`
- span: 占据列数（1-24）
- offset: 左侧偏移列数（0-24）
