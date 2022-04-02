<template>
  <div>
    <v-sheet color="rgb(65, 105, 225)">
      <v-container>
        <base-card color="rgb(255,215,0)">
          <v-container>
            <base-card flat tile color="transparent">
              <v-img max-height="350" src="../assets/last-supper.svg">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      size="320"
                      color="rgb(235,243,243) lighten-5"
                    ></v-progress-circular>
                  </v-row> </template
              ></v-img>
            </base-card>
          </v-container>
        </base-card>
      </v-container>
    </v-sheet>
 
    <v-sheet height="20" color="rgb(211,62,39,1)" />
    <v-sheet height="20" color="rgb(235,243,243)" />
    <inro-snip />
    <v-sheet height="75" color="rgb(235,243,243)" />
    <about-us />
    <v-sheet height="75" color="rgb(235,243,243)" />
    <meet-up id="meetUp" />
    <v-sheet height="75" color="rgb(235,243,243)" />
    <preview />
    <v-sheet height="75" color="rgb(235,243,243)" />
    <contact />
    <v-sheet height="75" color="rgb(235,243,243)" />
  </div>
</template>

<script>
import MeetUp from "../components/home/MeetUp.vue";
import Preview from "../components/home/Preview.vue";
import Contact from "../components/home/Contact.vue";
import InroSnip from "../components/home/IntroSnip.vue";
import AboutUs from "../components/home/AboutUs.vue";
export default {
  name: "HomeSection",

  components: {
    MeetUp,
    Preview,
    Contact,
    InroSnip,
    AboutUs,
  },
};
</script>
