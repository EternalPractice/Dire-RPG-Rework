<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/rules">Rules</router-link>
      <router-link to="/attributes">Attributes</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/schools">Schools</router-link>
      <router-link to="/magic">Magic</router-link>
      <router-link to="/items">Items</router-link>
      <router-link to="/login" class="end">Login</router-link>
    </nav>

    <span @click="test">
      <i class="fas fa-bars" />
    </span>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    test: function() {
      alert("test");
    }
  }
};
</script>

<style>
header {
  position: sticky;
  top: 0;
  background: rgb(60, 60, 60);

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;

  display: flex;
  justify-content: flex-end;
}

nav {
  display: flex;
  margin-right: auto;
}

nav a,
.fa-bars {
  padding: 0.65rem 0.5rem;
  text-decoration: none;
  color: rgb(204, 204, 204);
}

nav a:hover {
  background: rgb(47, 92, 206);
}

.fa-bars {
  font-size: 1.25rem;
  /* display: none; */
}

.router-link-exact-active {
  background: rgb(23, 45, 100);
}

.end {
  /* MAKE THIS PUSH LOGIN TO THE END */
}
</style>
