import { componentInstall } from "@ui-element-vue3/utils";
import Switch from "./src/index.vue";
import "./src/style/index.js";

// 按需加载
export const UeSwitch = componentInstall(Switch);

// 导出组件
export default UeSwitch
