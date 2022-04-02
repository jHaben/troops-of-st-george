<template>
  <v-container id="preview" tag="section">
    <base-card color="#white">
              <v-row>
            <v-col align="center">
              <base-subheading>Catholic Letters</base-subheading></v-col
            >
          </v-row>
      <v-container>
        <base-card flat color="rgb(235,243,243)">
          <v-container>
            <v-row>
              <v-col cols="12">
                <slot />
              </v-col>

              <feed-card
                v-for="(article, i) in paginatedArticles"
                :key="article.title"
                :size="layout[i]"
                :value="article"
              />
            </v-row>
          </v-container>
        </base-card>
      </v-container>
    </base-card>
  </v-container>
</template>

<script>
// Utilities
import { mapGetters } from "vuex";
import FeedCard from "./FeedCard.vue";

export default {
  name: "MainFeed",

  components: {
    FeedCard,
  },

  data: () => ({
    layout: [1, 2, 2],
    page: 1,
  }),

  computed: {
    ...mapGetters(["getAllArticles"]),

    paginatedArticles() {
      return this.getAllArticles;
    },
  },
};
</script>
