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
      <li>Fix School Image size (much later: pay for new art)</li>
      <li>Create individual school page layout</li>
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
}

.center {
  text-align: center;
}

p {
  line-height: 0.25;
}
</style>
