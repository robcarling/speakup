import Vue from "vue";
import VueRouter from "vue-router";
import AddComment from "@/views/AddComment.vue";
import AllComments from "@/views/AllComments.vue";
import NProgress from "nprogress";

Vue.use(VueRouter);

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

export default router;
