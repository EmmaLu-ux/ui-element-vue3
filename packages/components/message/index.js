import { componentInstall } from "@ui-element-vue3/utils";
import Message from "./src/index.vue";
import "./src/style/index.js";

// 按需加载
export const UeMessage = componentInstall(Message);

// 导出组件
export default UeMessage
