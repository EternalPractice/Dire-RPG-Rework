<template>
  <div id="app" class>
    <Header />
    <div class="wrapper">
      <router-view />
    </div>
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

  width: 100%;
  min-width: 100vw;

  /* Color matches my vs code setup */
  background: rgb(30, 30, 30);
  color: rgb(204, 204, 204);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2.6rem auto 2.6rem;
}

.wrapper {
  height: 100%;
  width: 100%;

  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}
</style>
