import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Test from "@/pages/Test";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/test",
      name: "test",
      component: Test
    }
  ]
});
