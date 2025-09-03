import { componentInstall } from "@ui-element-vue3/utils";
import Form from "./src/form.vue";
import FormItem from "./src/formItem.vue";
import "./src/style/index.js";
export * from "./src/composables/use-form-item.js"
// 按需加载
export const UeForm = componentInstall(Form);
export const UeFormItem = componentInstall(FormItem);

// 导出组件
export default {
    UeForm,
    UeFormItem
}
