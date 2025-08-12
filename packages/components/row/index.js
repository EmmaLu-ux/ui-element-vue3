import { componentInstall } from "@ui-element-vue3/utils";
import Row from "./src/index.vue";
import "./src/style/index.js";

// 按需加载
export const UeRow = componentInstall(Row);

// 导出组件
export default UeRow
