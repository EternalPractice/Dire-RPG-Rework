<template>
  <div id="schools">
    <PictureCard
      src="https://images.unsplash.com/photo-1541543975512-86aad5d2cf93?ixlib=rb-1.2.1"
      link="might"
      >School of Might</PictureCard
    >
    <PictureCard
      src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1"
      link="School2"
      >School 2</PictureCard
    >
    <PictureCard
      src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1"
      link="School3"
      >School 3</PictureCard
    >
    <PictureCard
      src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1"
      link="School4"
      >School 4</PictureCard
    >
    <PictureCard
      src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1"
      link="School5"
      >School 5</PictureCard
    >
    <PictureCard
      src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1"
      link="School6"
      >School 6</PictureCard
    >
    <PictureCard
      src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1"
      link="School7"
      >School 7</PictureCard
    >
    <PictureCard
      src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1"
      link="School8"
      >School 8</PictureCard
    >
    <PictureCard
      src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1"
      link="School9"
      >School 9</PictureCard
    >
  </div>
</template>

<script>
import PictureCard from "@/components/PictureCard.vue";

export default {
  name: "Schools",
  components: { PictureCard }
};
</script>

<style scoped>
#schools {
  height: 100%;
  width: 100%;

  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
  grid-gap: 10px;
}
</style>
