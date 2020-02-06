<template>
  <header class="bg-blue-900 inset-x top-0 p-3 flex">
    <router-link to="/">Home</router-link>
    <router-link to="/about"> About </router-link>
    <router-link to="/test"> Test </router-link>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
