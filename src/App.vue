<template>
  <div id="app" class>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";

export default {
  name: "app",
  components: { Header, Footer }
};
</script>

<style>
@import "./assets/css/normalize.css";

#app {
  height: 100%;
  min-height: 100vh;

  /* Color matches my vs code setup */
  background: rgb(30, 30, 30);
  color: rgb(204, 204, 204);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2.6rem auto 2.6rem;
}
</style>
