<template>
  <div id="schools">
    <PictureCard
      src="https://github.com/EternalPractice/Dire-RPG-Rework/blob/master/src/assets/img/SwordShield.jpg?raw=true"
      link="might"
    >School of Might</PictureCard>
    <PictureCard
      src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1"
      link="School2"
    >School of Physical Adeptness</PictureCard>
    <PictureCard
      src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1"
      link="School3"
    >School of Superior Tactics</PictureCard>
    <PictureCard
      src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1"
      link="School4"
    >School of Nimbleness</PictureCard>
    <PictureCard
      src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1"
      link="School5"
    >School of Acrobatic Strength</PictureCard>
    <PictureCard
      src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1"
      link="School6"
    >School of Deft Cleverness</PictureCard>
    <PictureCard
      src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1"
      link="School7"
    >School of Pure Reason</PictureCard>
    <PictureCard
      src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1"
      link="School8"
    >School of Intelligent Combat</PictureCard>
    <PictureCard
      src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1"
      link="School9"
    >School of Clever Trickery</PictureCard>
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
  grid-gap: 10px;
}
</style>  
