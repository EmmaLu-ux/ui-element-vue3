import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import "./style.css"
import Demo from "../components/demo/index.vue"

import UIElementV from "../../../packages/index"
import "@ui-element-vue3/theme/src/index.scss"
import "./iconfont/iconfont.css"

export default {
  extends: DefaultTheme,
  /**
   * Registers the Demo component globally.
   *
   * @param {Object} ctx
   * @param {import('vue').App} ctx.app
   * @param {import('vue-router').Router} ctx.router
   * @param {import('vitepress').SiteData} ctx.siteData
   */
  enhanceApp({ app, router, siteData }) {
    app.use(UIElementV) // 使用UIElementV插件
    app.component("Demo", Demo) // 将Demo组件注册为全局组件
  },
} satisfies Theme
