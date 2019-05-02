import Vue from "vue";
import router from './router'
import VueAxios from "vue-axios";
import axios from "axios";
import VueLodash from "vue-lodash";
import VeeValidate from 'vee-validate';

import App from "./App.vue";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/nprogress/nprogress.css";
import "./assets/css/stylesheet.css";

Vue.use(VueAxios, axios);
Vue.use(VueLodash);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
