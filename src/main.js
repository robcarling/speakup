import Vue from "vue";
import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import axios from "axios";
import NProgress from "nprogress";
import VueLodash from "vue-lodash";

import App from "./App.vue";
import AddComment from "./components/AddComment.vue";
import AllComments from "./components/AllComments.vue";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/nprogress/nprogress.css";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VueLodash);

Vue.config.productionTip = false;

const routes = [
  {
    path: "*",
    redirect: "all-comments"
  },
  {
    name: "AddComment",
    path: "/add-comment",
    component: AddComment
  },
  {
    name: "AllComments",
    path: "/all-comments",
    component: AllComments
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
