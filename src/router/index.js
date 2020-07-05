import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/history",
    name: "Home",
    component: () => import("../views/History.vue")
  },
  {
    path: "/",
    name: "Main",

    component: () => import("../views/Main.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
