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
@import "./assets/css/normalize.css";
</style>
