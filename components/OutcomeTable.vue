<template>
  <table class="text-center md:mw-100 md:mx-auto">
    <!-- Apply Tailwind CSS  -->
    <tr v-for="(outcome, index) in outcomes" :key="index">
      <td>{{ index + 1 }}</td>
      <td>{{ outcome }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "OutcomeTable",
  props: {
    outcomes: Array
  }
};
</script>
