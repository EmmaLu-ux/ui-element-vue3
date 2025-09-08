# Form 表单

用于数据录入、校验与提交。由 `UeForm` 与 `UeFormItem` 组成，支持异步/同步校验、按字段校验、重置初始值、标签宽度与对齐、尺寸控制等能力。

## 基础用法

::: demo 通过 `model` 绑定表单数据，`name` 关联字段；在 `UeForm` 上配置全局 `rules` 并使用 `validate`/`reset` 方法。

```html
form/basic
```

:::

## 触发时机（trigger）

::: demo 规则支持 `blur` 与 `change` 触发，也可不指定（任意触发均生效）。

```html
form/triggers
```

:::

## 按字段校验

::: demo 通过 `ref` 获取 `UeForm`，使用 `validate(["fieldA","fieldB"])` 仅校验指定字段。

```html
form/validate-scope
```

:::

## 自定义校验器（validator）

::: demo 使用 `async-validator` 的自定义 `validator`，支持返回 Promise 进行异步校验。

```html
form/custom-validator
```

:::

## 禁用自动校验

::: demo 某些场景不希望在输入或失焦即校验，可在控件上设置 `:validateEvent="false"`，仅在提交时统一校验。

```html
form/validateEvent
```

:::

## 布局组合（与 Grid 搭配）

::: demo 配合 `UeRow/UeCol` 做行列排布，适用于密集表单或筛选区域。

```html
form/inline
```

:::

## 规则合并（Form + FormItem）

::: demo `UeFormItem.rules` 会与 `UeForm.rules[name]` 合并，便于在局部追加规则或覆盖消息。

```html
form/rules-merge
```

:::

## 标签与对齐

::: demo 使用 `lableWidth` 设置标签宽度（建议传入数字，不带单位），`align` 设置标签对齐方式。

```html
form/label
```

:::

## 尺寸

::: demo 通过 `size` 统一控制表单项高度与字体大小：`sm`、`md`、`lg`、`xl`。

```html
form/size
```

:::

## UeForm 属性

- `model`: 表单数据对象（必传）
- `rules`: 校验规则对象，键为字段名，值为 `async-validator` 规则或规则数组
- `size`: 统一尺寸：`sm` | `md` | `lg` | `xl`，默认 `sm`

## UeForm 方法（通过 `ref` 获取）

- `validate(fields?)`: `Promise<boolean>`；不传参校验全部字段；`fields` 为字段名数组时仅校验指定字段
- `reset()`: 重置所有字段到挂载时的初始值

## UeFormItem 属性

- `name`: 关联的字段名（对应 `model[name]`）
- `label`: 左侧标签文本
- `colon`: 是否显示分隔符冒号，默认 `true`
- `required`: 是否显示必填星号（仅样式，实际以规则 `required` 为准）
- `lableWidth`: 标签宽度（建议传数字，不带单位）
- `align`: 标签对齐方式：`left` | `center` | `right`
- `rules`: 规则或规则数组，会与 `UeForm.rules[name]` 合并

提示：校验基于 `async-validator`，规则字段如 `required`/`min`/`max`/`pattern`/`type` 等均可使用，`trigger` 支持 `blur`/`change` 或不传。
