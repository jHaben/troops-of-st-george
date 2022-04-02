<template>
  <v-app-bar app color="rgb(211,62,39,1)" dark height="100">
    <v-container>
      <v-row class="d-flex flex-nowrap my-2">
        <v-col>
          <v-app-bar-nav-icon @click="toggleDrawer" />
        </v-col>
        <v-col>
          <v-img
            v-if="height <= 400"
            class="my-1"
            alt="Troop 121 Logo"
            src="../../assets/logo.png"
            transition="scale-transition"
            max-width="200"
            contain
          />

          <v-img
            v-else
            class="my-1"
            alt="Troop 121 Logo"
            src="../../assets/logo.png"
            transition="scale-transition"
            max-height="80"
         
            contain
          />
        </v-col>
        <v-row class="d-flex flex-nowrap my-2">
          <v-col
            class="hidden-sm-and-down"
            v-for="(link, i) in appBarLinks"
            :key="i"
          >
            <v-btn
              :to="link.to"
              :href="link.href"
              v-if="!link.last"
              text
              rounded
              color="black"
              outlined
              style="border-width: 2px; border-color: black; background-color:white;"
              class="myBtn ma-2"
              @click="onClick($event, link)"
            >
              {{ link.text }}
            </v-btn>
            <v-btn
              :to="link.to"
              :href="link.href"
              v-else
              text
              color="black"
              class="myBtn ma-2"
              rounded
              outlined
              style="border-width: 2px; border-color: black; background-color:white;"
              @click="onClick($event, link)"
            >
              {{ link.text }}
            </v-btn>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
// Utilities
// Utilities
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["appBarLinks"]),
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

  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();

      if (item.to || !item.href) return;

      if (this.$route.name != "home") {
        this.$router.push({ name: "home" });
      } else {
        this.$vuetify.goTo(item.href, { duration: 500, easing: "linear" });
      }
    },
  },
};
</script>
