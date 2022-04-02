<template >
  <v-navigation-drawer v-model="drawer" app dark temporary>
    <v-list>
      <v-list-item
        v-for="(link, i) in appBarLinks"
        :key="i"
        :to="link.to"
        :href="link.href"
        @click="onClick($event, link)"
        ><v-list-item-icon>
          <v-icon v-text="link.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-title v-text="link.text" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CoreDrawer",

  computed: {
    ...mapGetters(["appBarLinks"]) ,
   
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.setDrawer(val);
      },
      
    },
  },

  methods: {
    ...mapMutations(["setDrawer"]),
    onClick(e, item) {
      e.stopPropagation();

      if (item.to || !item.href) return;

      if (this.$route.name != "home") {
        this.$router.push({ name: "home" });
      } else {
        this.$vuetify.goTo(item.href, { duration: 500 , easing: 'linear'});
        this.setDrawer(false);
      }
    },
  },
};
</script>
