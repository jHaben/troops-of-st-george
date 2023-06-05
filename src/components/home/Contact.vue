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

<template>
  <v-container id="contact" tag="section">
    <base-card> <v-row>
        <v-col align="center">
          <base-subheading>Contact Us</base-subheading></v-col>
      </v-row>
      <v-row>
        <v-col align="center" class="text4 text-wrap ma-4">
          <p>
            To find out more information about our troop or about how to join
            please send us an email by clicking below.
          </p>
        </v-col>
      </v-row>
      <v-col align="center" class="text4">
        <v-btn @click="sendEmail" style="font-size: 25px"><v-icon color="black" size="30">mdi-email</v-icon>
          E-Mail</v-btn>
      </v-col>

    </base-card>
  </v-container>
</template>
  
  
  <script>
  export default {
  
    name: "HomeContact",
    methods: {
      sendEmail() {
        window.location.href = 'mailto:troops@churchofsaintagnes.org';
      },
    },
  };
  </script>
  
<style scoped>
/* Add your styles here */
</style>
  
