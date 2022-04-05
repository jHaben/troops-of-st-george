<template>
  <div>
    <v-sheet v-if="height >= 500" height="550" color="rgb(235,243,243)">
      <v-img height="100%" src="../assets/forest.png">
        <v-container>
          <base-card flat color="transparent">
            <template>
              <v-container>
                <v-row>
                  <v-carousel cycle interval="5000">
                    <v-carousel-item
                      v-for="(item, i) in items"
                      :key="i"
                      reverse-transition="fade-transition"
                      transition="fade-transition"
                      ><v-col align="center"
                        ><v-img :src="item.src" max-height="445" contain
                      /></v-col> </v-carousel-item
                  ></v-carousel>
                </v-row>
              </v-container>
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
    <v-sheet v-else height="300" color="rgb(235,243,243)">
      <v-img height="100%" src="../assets/forest.png">
        <v-container>
          <base-card flat color="transparent">
            <template>
              <v-container>
                <v-row>
                  <v-carousel
                    height="300"
                    hide-delimiters
                    hide-delimiter-background
                    cycle
                    interval="5000"
                  >
                    <v-carousel-item
                      v-for="(item, i) in items"
                      :key="i"
                      reverse-transition="fade-transition"
                      transition="fade-transition"
                      ><v-col align="center"
                        ><v-img :src="item.src"  
                      /></v-col> </v-carousel-item
                  ></v-carousel>
                </v-row>
              </v-container>
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
    <contact />
    <v-sheet height="75" color="rgb(235,243,243)" />
  </div>
</template>

<script>
import MeetUp from "../components/home/MeetUp.vue";
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
          src: require("../assets/barn-food.png"),
        },
        {
          src: require("../assets/barn.jpg"),
        },
        {
          src: require("../assets/priest.jpg"),
        },
        {
          src: require("../assets/dishes.jpg"),
        },
        {
          src: require("../assets/firetruck.jpg"),
        },
        {
          src: require("../assets/fishing.jpg"),
        },
        {
          src: require("../assets/mary.jpg"),
        },
        {
          src: require("../assets/Mass.jpg"),
        },
      ],
    };
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;
        case "sm":
          return 400;
        case "md":
          return 500;
        case "lg":
          return 600;
        case "xl":
          return 800;
      }
      return 1000;
    },
  },

  components: {
    MeetUp,
    Contact,
    InroSnip,
    AboutUs,
  },
};
</script>
