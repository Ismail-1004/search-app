import type { App } from "vue"
import Toast from 'vue3-toastify';
import "vue3-toastify/dist/index.css";

export default {
  install: (app: App) => {
    app.use(Toast);
  },
};