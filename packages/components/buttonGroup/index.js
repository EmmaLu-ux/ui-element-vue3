import { componentInstall } from "@ui-element-vue3/utils";
import ButtonGroup from "./src/index.vue";
import "./src/style/index.js";

// 按需加载
export const UeButtonGroup = componentInstall(ButtonGroup);

// 导出组件
export default UeButtonGroup
