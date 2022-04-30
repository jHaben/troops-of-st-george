<template>
  <v-container id="contact" tag="section">
    <base-card flat tile color="transparent">
      <v-row>
        <v-col align="center">
          <base-subheading>Contact Us</base-subheading></v-col
        >
      </v-row>
      <v-row>
        <v-col align="center" class="text4 text-wrap ma-4">
          <p>
            To find out more information about our troop or about how to join
            please send us an email by clicking below.
          </p>
        </v-col>
      </v-row>
      <v-col align="center" class="text4" style="font-size: 25px">
        <ModalView :showIcon="theStauts" />
      </v-col>
    </base-card>
  </v-container>
</template>

<script>
import ModalView from "../modal/ModalView.vue";

export default {
  name: "HomeContact",

  components: {
    ModalView,
  },
  data: () => ({
    theStauts: false,
  }),
};
</script>
