<template>
  <v-app>
    <core-donut-bar v-if="(this.$route.name == 'donut')" />
    <core-app-bar v-else />
    <core-drawer />
    <v-sheet height="100%" color="rgb(235,243,243)">
      <core-view />
    </v-sheet>
    <core-footer />
  </v-app>
</template>

<script>
import CoreAppBar from "./components/core/AppBar.vue";
import CoreFooter from "./components/core/Footer.vue";
import CoreDrawer from "./components/core/Drawer.vue";
import CoreView from "./components/core/View.vue";

export default {
  name: "App",

  components: {
    CoreAppBar,
    CoreFooter,
    CoreDrawer,
    CoreView,
  },
};
</script>
