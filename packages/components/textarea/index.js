import { componentInstall } from "@ui-element-vue3/utils";
import Textarea from "./src/index.vue";
import "./src/style/index.js";

// 按需加载
export const UeTextarea = componentInstall(Textarea);

// 导出组件
export default UeTextarea
