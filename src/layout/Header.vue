<template>
  <header class="">
    <router-link to="/">Home</router-link>
    <router-link to="/rules">Rules</router-link>
    <router-link to="/attributes">Attributes</router-link>
    <router-link to="/skills">Skills</router-link>
    <router-link to="/schools">Schools</router-link>
    <router-link to="/magic">Magic</router-link>
    <router-link to="/items">Items</router-link>

    <router-link to="/login" class="end">Login</router-link>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
header {
  grid-area: header;
  position: sticky;
  top: 0;
  background: rgb(60, 60, 60);
  display: flex;
}

header a {
  padding: 0.65rem 0.5rem;
  text-decoration: none;
  color: rgb(204, 204, 204);
}

header a:hover {
  background: rgb(47, 92, 206);
}

.router-link-exact-active {
  background: rgb(23, 45, 100);
}

.end {
  margin-left: auto;
  margin-right: 0px;
}
</style>
