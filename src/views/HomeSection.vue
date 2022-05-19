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
                        ><v-img min-height="275" :src="item.src"
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
    <!-- <v-sheet height="20" color="rgb(235,243,243)" /> -->
    <inro-snip />
    <v-sheet height="100%" color="#6698b3">
      <icon-banner/>
    </v-sheet>
        <v-sheet height="100%" color="white">
      <about-us />
    </v-sheet>

    <v-sheet height="100%" color="#6698b3">
      <meet-up id="meetUp" />
    </v-sheet>

    <contact />
  </div>
</template>

<script>
import Contact from "../components/home/Contact.vue";
import InroSnip from "../components/home/IntroSnip.vue";
import AboutUs from "../components/home/AboutUs.vue";
import MeetUp from "../components/home/MeetUp.vue";
import IconBanner from "../components/home/IconBanner.vue"

export default {
  name: "HomeSection",
  data() {
    return {
      items: [
        {
          src: require("../assets/slide-show/hills.png"),
        },

        {
          src: require("../assets/slide-show/fire-day.png"),
        },

        {
          src: require("../assets/slide-show/mary-close.png"),
        },

        {
          src: require("../assets/slide-show/ice.png"),
        },
        {
          src: require("../assets/slide-show/fire-night.png"),
        },
        {
          src: require("../assets/slide-show/mary.png"),
        },
        {
          src: require("../assets/slide-show/night.png"),
        },
        {
          src: require("../assets/slide-show/river-cross.png"),
        },
        {
          src: require("../assets/slide-show/tent.png"),
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
    IconBanner,
    AboutUs,
  },
};
</script>
