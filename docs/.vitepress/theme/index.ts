import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import "./style.css"
import Demo from "../components/demo/index.vue"

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
    app.component("Demo", Demo) // 将Demo组件注册为全局组件
  },
} satisfies Theme
