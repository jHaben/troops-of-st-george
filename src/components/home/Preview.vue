<template>

  <section  >
    
    <MainFeed >
      <slot />
    </MainFeed>
   
  </section>

</template>

<script>
import MainFeed from "../feed/MainFeed.vue";

export default {
  name: "HomePreview",

  components: {
    MainFeed,
  },
};
</script>
 