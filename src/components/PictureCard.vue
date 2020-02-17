<template>
  <div class="PictureCard">
    <img :src="pictureSource" alt />
    <p class="innerText">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: "PictureCard",
  props: {
    pictureSource: String
  }
};
</script>

<style>
.PictureCard {
  /*Keeps square shape*/
  height: 20vw;
  width: 20vw;

  background: blue;
}

img {
  padding-top: 20%;
  padding-left: 12.5%;
  max-width: 75%;
}

.innerText {
  text-align: center;
  font-size: 1.2rem;
}
</style>
