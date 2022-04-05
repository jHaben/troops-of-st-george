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
                The Patria Coffee Shop meetups are a bi-monthly opportunity for
                Christians of any denomination who out of love for Christ would
                try to cooperate with His Will that all Christians be one. The
                gatherings are organized by a group of Catholic men who live in
                the greater Twin Cities area. We love Jesus Christ and his
                prayer revealed to us in John 17:21 for all Christians to be one
                in Him has moved us to extend this invitation to you. We are
                sending the invitation to all Christians of whatever
                denomination in the greater Twin Cities area so feel free to
                pass it along!
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
