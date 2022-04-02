<template>
  <v-col cols="12" :md="size === 2">
    <base-card>
      <base-card>
        <v-row class="fill-height text-left ma-0">
          <v-col cols="12" align="center">
            <h2 class="text3 text-wrap">
              <span v-html="value.title"></span>
            </h2>
            <!-- <h3 class="text4 text-wrap my-4">
            <span v-html="value.preview"></span>
          </h3> -->
            <v-col align="center" justify="start">
              <v-btn
                color="#272727"
                class="text2"
                label
                dark
                large
                @click="onClick($event, value.id)"
              >
                Read Full Letter
              </v-btn>
            </v-col>
          </v-col>
        </v-row>
      </base-card>
    </base-card>
  </v-col>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FeedCard",

  props: {
    size: {
      type: Number,
      required: true,
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    ...mapActions([
      // `mapActions` also supports payloads:
      "checkOut", // map `this.checkOutById(id)` to `this.$store.dispatch('checkOutById', id)`
    ]),

    onClick(e, item) {
      e.stopPropagation();
      this.checkOut(item).then(() => {
        this.$router.push({ name: "letter" });
      });
    },
  },
};
</script>
