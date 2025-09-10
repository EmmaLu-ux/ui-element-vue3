import { componentInstall } from "@ui-element-vue3/utils";
import Popper from "./src/index.vue";


// 按需加载
export const UePopper = componentInstall(Popper);

export * from "./src/popper"

// 导出组件
export default UePopper
