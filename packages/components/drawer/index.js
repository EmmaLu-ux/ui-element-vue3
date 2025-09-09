import { componentInstall } from "@ui-element-vue3/utils";
import Drawer from "./src/index.vue";
import "./src/style/index.js";

// 按需加载
export const UeDrawer = componentInstall(Drawer);

// 导出组件
export default UeDrawer
