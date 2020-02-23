<template>
  <div id="home">
    <h1 class="center">Welcome to Dire RPG Rework!</h1>
    <p class="center">
      If you are reading this, you are me. This is not open to the public yet,
      so you have access to this private github repo (so are therefor me)
    </p>
    <p class="center">
      Currently there is a lot of work to be done on this site. However, I do
      have the basic layout done in Vue.js, so there is no longer that issue.
    </p>
    <br />
    <p>The following next steps are up for grabs:</p>
    <ul>
      <li>Create the SQL layout for school & perks</li>
      <li>Make layout for the 9 schools</li>
      <li>Create components for cards (picture only, stats with picture)</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
#home {
  height: 100%;
  width: 100%;

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

.center {
  text-align: center;
}

p {
  line-height: 0.25;
}
</style>
