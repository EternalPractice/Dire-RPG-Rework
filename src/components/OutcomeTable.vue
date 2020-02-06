<template>
  <table class="text-center md:mw-100 md:mx-auto border-collapse border-2 border-gray-500">
    <tr v-for="(outcome, index) in outcomes" :key="index" class="bg-blue-600 even:bg-gray-500">
      <td class="pr-10">{{ index + 1 }}</td>
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
