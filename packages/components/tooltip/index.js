import { componentInstall } from "@ui-element-vue3/utils";
import Tooltip from "./src/index.vue";
import "./src/style/index.js";

// 按需加载
export const UeTooltip = componentInstall(Tooltip);

// 导出组件
export default UeTooltip
