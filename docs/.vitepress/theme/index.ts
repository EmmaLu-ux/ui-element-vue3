import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import "./style.css"
import Demo from "../components/demo/index.vue"

// 全局引入UI组件库
import UIElementV from "flori-ui-vue3"
import "flori-ui-vue3/dist/index.min.css"
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
