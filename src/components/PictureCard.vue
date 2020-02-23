<template>
  <router-link :to="`/schools/${link}`" class="PictureCard">
    <img :src="src" />
    <p class="innerText">
      <slot />
    </p>
  </router-link>
</template>

<script>
export default {
  name: "PictureCard",
  props: ["src", "link"]
};
</script>

<style>
.PictureCard {
  height: 95%;
  width: 95%;
  text-decoration: none;

  display: flex;
  flex-direction: column;

  border: 1px solid gray;
}

img {
  padding-top: 2%;
  max-width: 32%;
  align-self: center;
}

.innerText {
  color: rgb(204, 204, 204);
  text-align: center;
  font-size: 1.2rem;
}

.PictureCard:hover {
  border: 2px solid lightgray;
  background: gray;
}
</style>
