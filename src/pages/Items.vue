<template>
  <div id="items">Items</div>
</template>

<script>
export default {
  name: "Items"
};
</script>

<style scoped>
#items {
  height: 100%;
  width: 100%;

  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}
</style>
