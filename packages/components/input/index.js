import { componentInstall } from "@ui-element-vue3/utils";
import Input from "./src/index.vue";
import "./src/style/index.js";

// 按需加载
export const UeInput = componentInstall(Input);

// 导出组件
export default UeInput
