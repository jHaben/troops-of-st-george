<template>
  <v-container id="meetUp" tag="section">
    <base-card flat tile color="transparent" class="ma-4">
      <v-col> <event-page /></v-col>
    </base-card>
  </v-container>
</template>

<script>
import EventPage from "./EventPage.vue";

export default {
  name: "HomeMeetUp",

  components: {
    EventPage,
  },
};
</script>
