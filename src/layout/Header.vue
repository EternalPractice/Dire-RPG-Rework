<template>
  <header class="bg-lightGrey inset-x top-0 flex text-white">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/about" class="link">About</router-link>
    <router-link to="/test" class="link">Test</router-link>
    <div class="justify-end link">
      <router-link to="/login" class="link">Login</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style></style>
