# Message 全局提示

轻量的顶部消息提示，用于全局展示操作反馈。支持信息、成功、警告、错误等类型，默认自动关闭，也可手动关闭或常驻。

## 基础用法

::: demo 通过全局方法 `$message` 打开一个消息提示，默认类型为 `info`。

```html
message/basics
```

:::

## 消息类型

::: demo 提供四种内置类型：`info`、`success`、`warning`、`error`。

```html
message/types
```

:::

## 可关闭

::: demo 设置 `showClose: true` 显示关闭按钮，常配合 `duration: 0` 使其常驻。

```html
message/closable
```

:::

## 持续时间

::: demo 通过 `duration` 设置自动关闭时间（毫秒）。设置为 `0` 则不会自动关闭。

```html
message/duration
```

:::

## 背景色

::: demo 设置 `background: true` 以主题色浅色背景展示，更醒目。

```html
message/background
```

:::

## 偏移

::: demo 通过 `offset` 控制与顶部的偏移（单位：px）。多个消息会自动错位堆叠。

```html
message/offset
```

:::

## 关闭全部

::: demo 调用 `$message.closeAll()` 可快速关闭所有消息。

```html
message/closeAll
```

:::

## 方法

<div class="md-cols" style="--col-1:60px; --col-2:60px; --col-3:120px; --col-4:auto;">

| 方法名              | 参数        | 说明                     |
| ------------------- | ----------- | ------------------------ |
| `$message`          | `(options)` | 打开一条消息             |
| `$message.info`     | `(options)` | 打开信息消息（快捷方法） |
| `$message.success`  | `(options)` | 打开成功消息（快捷方法） |
| `$message.warning`  | `(options)` | 打开警告消息（快捷方法） |
| `$message.error`    | `(options)` | 打开错误消息（快捷方法） |
| `$message.closeAll` | `()`        | 关闭当前所有消息         |

</div>

提示：示例中均使用对象参数形式调用，以便明确各配置项。

## 选项

<div class="md-cols" style="--col-1:120px; --col-2:140px; --col-3:90px;">

| 选项名       | 类型         | 默认值  | 说明                                     |
| ------------ | ------------ | ------- | ---------------------------------------- |
| `content`    | `string`     | `''`    | 消息正文内容                             |
| `type`       | `string`     | `info`  | 类型：`info`/`success`/`warning`/`error` |
| `duration`   | `number`     | `3000`  | 自动关闭的延时，单位 ms，设为 `0` 不关闭 |
| `showClose`  | `boolean`    | `false` | 是否显示右侧关闭按钮                     |
| `background` | `boolean`    | `false` | 是否使用浅色背景样式                     |
| `offset`     | `number`     | `16`    | 与顶部的初始偏移，支持多个消息堆叠       |
| `onClose`    | `() => void` | `-`     | 关闭后的回调                             |

</div>
## 安装与调用

全量引入组件库时会自动注册全局方法 `$message`，可直接在组件内调用。

按需引入时也可单独安装：

```ts
import { createApp } from "vue"
import { UeMessage } from "flori-ui-vue3"

const app = createApp(App)
app.use(UeMessage)
```
