import { defineConfig } from "vitepress"
import MdContainer from "markdown-it-container"
import fs from "fs"
import path from "path"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ue-Element组件库",
  description: "基于Vue3.js的UI组件库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
      { text: "指南", link: "/guide/" },
      { text: "组件", link: "/components/" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "基础",
          items: [
            { text: "安装", link: "/guide/install" },
            { text: "快速上手", link: "/guide/quickstart" },
          ],
        },
        {
          text: "进阶",
          items: [
            { text: "国际化", link: "/guide/lang" },
            { text: "主题", link: "/guide/theme" },
            { text: "暗黑模式", link: "/guide/diablo" },
          ],
        },
      ],
      "/components/": [
        {
          text: "基础",
          items: [
            { text: "Button 按钮", link: "/components/button" },
            { text: "Input 输入框", link: "/components/input" },
            { text: "Checkbox 多选框", link: "/components/checkbox" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/EmmaLu-ux/ui-element-vue3" },
    ],
  },
  markdown: {
    config: md => {
      md.use(MdContainer, "demo", {
        // render函数负责将.md转换为html
        render(tokens: string, idx: string) {
          /**
           * [
           * Token {
                type: 'heading_open',
                tag: 'h1',
                attrs: [ [Array], [Array] ],
                map: [ 0, 1 ],
                nesting: 1,
                level: 0,
                children: null,
                content: '',
                markup: '#',
                info: '',
                meta: null,
                block: true,
                hidden: false
              },
              ...,
              Token {
                type: 'fence',
                tag: 'code',
                attrs: null,
                map: [ 6, 9 ],
                nesting: 0,
                level: 1,
                children: null,
                content: 'button/basics\n',
                markup: '```',
                info: 'html',
                meta: null,
                block: true,
                hidden: false
              },,
           * ]
           * 
           */
          console.log("tokens", tokens)
          // console.log("自定义容器", idx)
          /**
           * 打开标签（nesting: 1）
           * 内容部分（由 markdown-it 自动处理）
           * 关闭标签（nesting: -1）
           * 当前token（tokens[idx]）
           * 获取容器属性（tokens[idx].info.trim()，如::: warning 中的 "warning"）
           */
          // 处理打开标签
          if (tokens[idx].nesting === 1) {
            // 捕获组中的描述内容，即::: demo xxx中的xxx
            const info = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
            console.log("info", info)
            const desc = info && info.length > 1 ? info[1] : ""
            console.log("desc", desc)
            // 获取路径
            // "fence"（围栏）是指用三个反引号 ``` 包裹的代码块
            const contentPath =
              tokens[idx + 1].type === "fence" ? tokens[idx + 1].content : ""
            // console.log("content", content)
            // 读取文件
            let source = ""
            if (contentPath) {
              let file = path.resolve(
                __dirname,
                "../examples",
                `${contentPath}.vue`
              )
              file = file.replace(/\s+/g, "")
              source = fs.readFileSync(file, "utf-8")
              // console.log("source", source)
            }
            return `<Demo>
            <template #source><pre v-pre><code class="language-html">
            ${md.utils.escapeHtml(source)}
            </code></pre></template>
            <template #description>
            ${desc ? `${md.render(desc)}` : ""}
              </template>
            `
          } else {
            return "</Demo>"
          }
        },
      })
    },
  },
})
