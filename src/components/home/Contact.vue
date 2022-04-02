<template>
  <v-container id="contact" tag="section">
    <base-card >
      <v-container>
        <base-card flat class="ma-4">
          <v-row>
            <v-col align="center">
              <base-subheading>Contact Us</base-subheading></v-col
            >
          </v-row>
          <v-col align="center" class="text4" style="font-size: 25px">
            <ModalView :showIcon="theStauts" />
          </v-col>
        </base-card>
      </v-container>
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
