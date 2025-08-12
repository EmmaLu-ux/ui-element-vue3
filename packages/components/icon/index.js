import { componentInstall } from "@ui-element-vue3/utils";
import Icon from "./src/index.vue";
import "./src/style/index.js";

// 按需加载
export const UeIcon = componentInstall(Icon);

// 导出组件
export default UeIcon
