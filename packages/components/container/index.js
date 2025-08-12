import { componentInstall } from "@ui-element-vue3/utils";
import Container from "./src/index.vue";
import Header from "./src/Header.vue"
import Main from "./src/Main.vue"
import Aside from "./src/Aside.vue"
import Footer from "./src/Footer.vue"
import "./src/style/index.js";

// 按需加载
export const UeContainer = componentInstall(Container);
export const UeHeader = componentInstall(Header);
export const UeMain = componentInstall(Main);
export const UeAside = componentInstall(Aside);
export const UeFooter = componentInstall(Footer);

// 导出组件
export default {
    UeContainer,
    UeHeader,
    UeMain,
    UeAside,
    UeFooter
}
