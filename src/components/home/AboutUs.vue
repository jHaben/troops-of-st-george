<template>
  <v-container id="aboutUs" tag="section">
    <base-card>
      <v-container>
        <base-card flat class="ma-4">
          <v-row>
            <v-col align="center">
              <base-subheading>About the Troops</base-subheading>
            </v-col>
            <div class="text4 text-wrap ma-4">
              <p>
                Mission Statement “The Troops of Saint George apostolate aims to
                use the outdoors as our canvas and the sacraments as our path to
                light the way for the formation of Holy Catholic men and boys.
                Whether called to the vocation of the priesthood, the religious
                life, or that of Holy fatherhood, our fathers and sons will take
                a prayerful pilgrimage together to fulfill Christ’s desire for
                them to grow in virtue and in their Holy Catholic faith as they
                journey toward heaven.”
              </p>
            </div>
          </v-row>
        </base-card>
      </v-container>
    </base-card>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "HomeAboutUs",

  computed: {
    ...mapGetters(["appBarLinks"]),
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
