<template>
  <div id="schools">
    <PictureCard
      src="https://github.com/EternalPractice/Dire-RPG-Rework/blob/master/src/assets/img/STR.jpeg?raw=true"
      link="might"
      >School of Might</PictureCard
    >
    <PictureCard
      src="https://github.com/EternalPractice/Dire-RPG-Rework/blob/master/src/assets/img/STR-AGI.png?raw=true"
      link="School2"
      >School of Physical Adeptness</PictureCard
    >
    <PictureCard
      src="https://github.com/EternalPractice/Dire-RPG-Rework/blob/master/src/assets/img/STR-INT.jpeg?raw=true"
      link="School3"
      >School of Superior Tactics</PictureCard
    >
    <PictureCard
      src="https://github.com/EternalPractice/Dire-RPG-Rework/blob/master/src/assets/img/AGI.png?raw=true"
      link="School4"
      >School of Nimbleness</PictureCard
    >
    <PictureCard
      src="https://github.com/EternalPractice/Dire-RPG-Rework/blob/master/src/assets/img/AGI-STR.jpg?raw=true"
      link="School5"
      >School of Acrobatic Strength</PictureCard
    >
    <PictureCard
      src="https://github.com/EternalPractice/Dire-RPG-Rework/blob/master/src/assets/img/AGI-INT.jpg?raw=true"
      link="School6"
      >School of Deft Cleverness</PictureCard
    >
    <PictureCard
      src="https://github.com/EternalPractice/Dire-RPG-Rework/blob/master/src/assets/img/INT.jpg?raw=true"
      link="School7"
      >School of Pure Reason</PictureCard
    >
    <PictureCard
      src="https://github.com/EternalPractice/Dire-RPG-Rework/blob/master/src/assets/img/INT-STR.png?raw=true"
      link="School8"
      >School of Intelligent Combat</PictureCard
    >
    <PictureCard
      src="https://github.com/EternalPractice/Dire-RPG-Rework/blob/master/src/assets/img/INT-PER.jpg?raw=true"
      link="School9"
      >School of Clever Trickery</PictureCard
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
  grid-gap: 10px;
}
</style>
