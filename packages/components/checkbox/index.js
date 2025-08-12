import { componentInstall } from "@ui-element-vue3/utils";
import Checkbox from "./src/index.vue";
import checkboxGroup from "./src/checkboxGroup.vue";
import CheckboxAll from "./src/checkboxAll.vue";
import "./src/style/index.js";
// 按需加载
export const UeCheckbox = componentInstall(Checkbox);
export const UeCheckboxGroup = componentInstall(checkboxGroup);
export const UeCheckboxAll = componentInstall(CheckboxAll);

// 导出组件
export default {
    UeCheckbox,
    UeCheckboxGroup,
    UeCheckboxAll
}
