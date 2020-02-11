import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");
