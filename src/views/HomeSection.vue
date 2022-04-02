<template>
  <div>
    <v-sheet height="500" color="rgb(235,243,243)">
      <v-img height="100%" src="../assets/forest.png">
        <v-container>
          <base-card flat color="transparent">
            <template>
              <v-carousel cycle interval="3000">
                <v-carousel-item
                  v-for="(item, i) in items"
                  :key="i"
                  :src="item.src"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                >
                </v-carousel-item>
              </v-carousel>
            </template>
          </base-card>
        </v-container>

        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              size="320"
              color="rgb(235,243,243) lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
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
  data() {
    return {
      items: [
        {
          src: require("../assets/groto.png"),
        },
        {
           src: require("../assets/ice.png"),
        },
        {
           src: require("../assets/food.png"),
        },
        {
           src: require("../assets/barn-food.png"),
        },
      ],
    };
  },

  components: {
    MeetUp,
    Preview,
    Contact,
    InroSnip,
    AboutUs,
  },
};
</script>
