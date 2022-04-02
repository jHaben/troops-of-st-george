<template>
  <v-container id="letter" tag="section">
    <v-sheet height="75" color="rgb(235,243,243)" />
    <base-card>
      <v-container>
        <base-card flat class="ma-2">
          <v-row class="py-16">
            <v-col align="center">
              <h2 class="text3 text-wrap">
                {{ article.title }}
              </h2>
            </v-col>
            <h3 class="text4 text-wrap ma-4">
              <article-two v-if="article.id == 2" />
              <article-three v-else-if="article.id == 3" />
              <article-four v-else-if="article.id == 4" />
            </h3>
            <v-col align="center" justify="start">
              <v-chip
                color="#272727"
                class="text2"
                label
                dark
                large
                :to="{ path: '/#preview' }"
              >
                Return Home
              </v-chip>
            </v-col>
          </v-row>
        </base-card>
      </v-container>
    </base-card>
    <v-sheet height="75" color="rgb(235,243,243)" />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import ArticleTwo from "../articles/ArticleTwo.vue";
import ArticleThree from "../articles/ArticleThree.vue";
import ArticleFour from "../articles/ArticleFour.vue";

export default {
  components: { ArticleTwo, ArticleThree, ArticleFour },
  name: "LetterFeed",

  computed: {
    ...mapGetters(["getArticle"]),

    article() {
      return this.getArticle;
    },
  },
};
</script>
