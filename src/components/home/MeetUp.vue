<template>
  <v-container id="meetUp" tag="section">
    <base-card>
      <v-container>
        <base-card flat class="ma-4">
          <v-row
            ><v-col align="center">
              <base-subheading>Calendar</base-subheading></v-col
            >
          </v-row>
          <v-col class="ma-2 text4" justify="center">
            <p>
              Schedule of meet up times. Click the date to see more details.
            </p>
          </v-col>
          <v-col> <event-page /></v-col>
        </base-card>
      </v-container>
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
