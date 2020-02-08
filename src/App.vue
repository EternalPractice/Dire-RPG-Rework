<template>
  <div
    id="app"
    class="h-screen w-screen mh-screen mw bg-darkGrey text-sm leading-tight text-center text-white"
  >
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
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
