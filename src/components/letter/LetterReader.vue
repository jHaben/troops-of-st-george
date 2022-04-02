<template>
  <section id="letter">
    <letter-feed>
      <slot />
    </letter-feed>
  </section>
</template>

<script>
import LetterFeed from "../feed/LetterFeed.vue";

export default {
  name: "HomeLetterReader",

  components: {
    LetterFeed
  },
};
</script>