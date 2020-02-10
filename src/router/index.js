import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";
import Rules from "@/pages/Rules";
import Attributes from "@/pages/Attributes";
import Skills from "@/pages/Skills";
import Schools from "@/pages/Schools";
import Magic from "@/pages/Magic";
import Items from "@/pages/Items";
import Login from "@/pages/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/rules",
      name: "rules",
      component: Rules
    },
    {
      path: "/attributes",
      name: "attributes",
      component: Attributes
    },
    {
      path: "/skills",
      name: "skills",
      component: Skills
    },
    {
      path: "/schools",
      name: "schools",
      component: Schools
    },
    {
      path: "/magic",
      name: "magic",
      component: Magic
    },
    {
      path: "/items",
      name: "items",
      component: Items
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
