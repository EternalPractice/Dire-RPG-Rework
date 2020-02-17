<template>
  <div class="PictureCard">
    <img :src="pictureSource" alt="<slot />" />
    <p class="text">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: "PictureCard",
  props: {
    pictureSource: String,
    text: String
  }
};
</script>

<style>
.PictureCard {
  /*Keeps square shape*/
  height: 0;
  width: 20vw;
  padding-bottom: 20vw;

  background: blue;
}

img {
  padding-top: 20%;
  padding-left: 10%;
  max-width: 75%;
}

.text {
  text-align: center;
  font-size: 1.2rem;
}
</style>
