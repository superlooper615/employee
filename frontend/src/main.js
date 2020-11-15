import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router.js'
import store from './store/store.js';
import axios from 'axios';
import { Button, Table, Form, TableColumn, Popover, Tooltip } from "element-ui";
Vue.use(Button);
Vue.use(Table);
Vue.use(Form);
Vue.use(TableColumn);
Vue.use(Popover);
Vue.use(Tooltip);

const baseURL = process.env.VUE_APP_API_BASE_URL;
const instance = axios.create({
  baseURL,
  withCredentials: true
});

console.log("creating axios");
Vue.prototype.$axios = instance;
Vue.config.productionTip = false

export const bus = new Vue();

// This is a workaround to silence the warning message from vuetify
const ignoredMessage = "The .native modifier for v-on is only valid on components but it was used on <div>.";
Vue.config.warnHandler = (message, vm, componentTrace) => {
    if (message !== ignoredMessage) {
        console.error(message + componentTrace);
    }
};

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
