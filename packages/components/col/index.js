import { componentInstall } from "@ui-element-vue3/utils";
import Col from "./src/index.vue";
import "./src/style/index.js";

// 按需加载
export const UeCol = componentInstall(Col);

// 导出组件
export default UeCol
