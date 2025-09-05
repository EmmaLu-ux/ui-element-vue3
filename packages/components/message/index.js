import "./src/style/index.js";
import Method from "./src/method.js";
import { functionInstall } from "@ui-element-vue3/utils";

// 按需加载
export const UeMessage = functionInstall(Method, '$message');

// 导出组件
export default UeMessage
