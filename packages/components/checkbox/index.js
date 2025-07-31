import { componentInstall } from "@ui-element-vue3/utils";
import Checkbox from "./src/index.vue";
import checkboxGroup from "./src/checkboxGroup.vue";

// 按需加载
export const UeCheckbox = componentInstall(Checkbox);
export const UeCheckboxGroup = componentInstall(checkboxGroup);

// 导出组件
export default {
    UeCheckbox,
    UeCheckboxGroup
}
