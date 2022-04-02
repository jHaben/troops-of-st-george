<template>
  <div id="letter">
    <letter-reader />
  </div>
</template>

<script>
import LetterReader from "../components/letter/LetterReader.vue";

export default {
  name: "LetterSection",

  components: {
    LetterReader,
  },
};
</script>
