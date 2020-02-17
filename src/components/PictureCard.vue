<template>
  <div class="PictureCard">
    <img :src="pictureSource" alt="<slot />" />
    <p><slot /></p>
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
  max-width: 75%;
}
</style>
