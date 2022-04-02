<template>
  <v-footer dark padless>
    <v-card class="flex text-center" flat tile color="rgb(211,62,39,1)">
      <v-card-text text-center>
        <v-row justify="center" no-gutters>
          <v-col v-for="(link, i) in footerLinks" :key="i" sm="1">
            <v-btn
              v-if="!link.last & link.bottom"
              class="mx-4 myBtn"
              icon
              :to="link.to"
              :href="link.href"
            >
              <v-icon id="myIcon" @click="onClick($event, link)">
                {{ link.icon }}
              </v-icon>
            </v-btn>

            <v-btn class="mx-4 myBtn" v-else-if="link.bottom" icon>
              <ModalView :showIcon="status" />
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider />
      <v-card-text class="py-2 white--text text-center" color="rgb(255,215,0)">
        <strong>PATRIA</strong> — {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
// Utilities
import { mapGetters } from "vuex";
import ModalView from "../modal/ModalView.vue";

export default {
  name: "CoreFooter",
  components: {
    ModalView,
  },
  data: () => ({
    status: true,
  }),

  computed: {
    ...mapGetters(["footerLinks"]),
  },

  methods: {
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
