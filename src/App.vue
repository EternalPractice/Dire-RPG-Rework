<template>
  <div id="app">
    <OutcomeTable :outcomes="['1 damage', '2 damage']" />
  </div>
</template>

<script>
import OutcomeTable from "./components/OutcomeTable.vue";

export default {
  name: "app",
  components: { OutcomeTable }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
