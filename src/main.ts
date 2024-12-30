import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/input.css"; // tailwind
import ElementPlus from "element-plus";
import "element-plus/dist/index.css"; // element-plus

const app = createApp(App).use(router);
app.use(ElementPlus);
app.mount("#app");
