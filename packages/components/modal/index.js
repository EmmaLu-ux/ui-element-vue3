import { componentInstall } from "@ui-element-vue3/utils";
import Modal from "./src/index.vue";
import "./src/style/index.js";

// 按需加载
export const UeModal = componentInstall(Modal);

// 导出组件
export default UeModal
