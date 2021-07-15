import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/index";
import Dashboard from "../components/Dashboard";
import AuthGuard from "./authGuard";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },

    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      props: true,
      beforeEnter: AuthGuard,
    },
  ],
});

export default router;
