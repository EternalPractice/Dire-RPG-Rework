<template>
  <header class="bg-lightGrey inset-x top-0 flex text-white">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/about" class="link"> About </router-link>
    <router-link to="/test" class="link"> Test </router-link>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
.link {
  @apply py-2 px-1 mx-1;
}

.router-link-exact-active {
  @apply bg-navy;
}
</style>
