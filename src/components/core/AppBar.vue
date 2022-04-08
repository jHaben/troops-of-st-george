<template>
  <v-app-bar
    :hide-on-scroll="hide"
    app
    color="rgb(235,243,243)"
    dark
    height="100"
  >
    <v-container>
      <v-row class="d-flex flex-nowrap my-2">
        <v-col align="center" style="max-width: 100px">
          <v-app-bar-nav-icon color="black" @click="toggleDrawer" />
        </v-col>
        <v-col  style="max-width: 300px">
          <v-img
            v-if="height <= 400"
            class="ma-2"
            alt="Troop 121 Logo"
            src="../../assets/logo.png"
            transition="scale-transition"
            :max-width="height"
            contain
          />
        </v-col>
        <v-row class="d-flex flex-nowrap my-2">
          <v-col
            align="center"
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
              style="
                border-width: 1px;
                border-color: black;
                background-color: white;
              "
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
              style="
                border-width: 1px;
                border-color: black;
                background-color: white;
              "
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
          return 150;
        case "sm":
          return 150;
        case "md":
          return 200;
        case "lg":
          return 200;
        case "xl":
          return 200;
      }
      return 200;
    },

    hide() {
      if (this.$route.name === "donutCalc") {
        return true;
      } else {
        return false;
      }
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
