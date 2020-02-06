import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import Test from "@/components/pages/Test";

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
