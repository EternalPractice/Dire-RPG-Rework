<template>
  <footer class>
    <p>Copyright (c) {{ new Date().getFullYear() }} Alex Irvine</p>
    <p>
      Licensed under a
      <a href="https://creativecommons.org/licenses/by/4.0/"
        >Creative Commons Attribution License</a
      >
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
footer {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;

  text-align: center;
  background-color: rgb(23, 45, 100);
  line-height: 0;
}

footer a {
  color: rgb(204, 204, 204);
}
</style>
