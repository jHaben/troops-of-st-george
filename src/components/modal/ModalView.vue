<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-icon
        v-if="showIcon"
        id="myIcon"
        v-bind="attrs"
        v-on="on"
        @click="openModal"
      >
        {{ "mdi-email" }}
      </v-icon>

      <v-btn
        v-else
        v-bind="attrs"
        v-on="on"
        @click="openModal"
        class="emailBtn ma-1 text4"
        style="font-size: 20px;"
        outlined
        depressed
        x-large
        elevation="3"
        >{{"E-Mail"}}<v-icon right>{{ "mdi-email" }}</v-icon></v-btn
      >
    </template>
    <v-card>
      <v-form ref="form" v-model="form" class="pa-4 pt-6">
        <v-card-title>
          <span class="text-h5">Message Us</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="First Name"
                  :rules="[rules.nameCounter]"
                  counter
                  maxlength="20"
                  required
                  v-model="name"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  required
                  v-model="email"
                  :rules="[rules.email, rules.emailCounter]"
                  counter
                  maxlength="60"
                  color="#272727"
                  label="Your Email Address"
                  type="text"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="message"
                  :rules="[rules.messageCounter]"
                  counter
                  maxlength="3000"
                  auto-grow
                  color="#272727"
                  label="Message"
                  outlined
                  rows="5"
                  type="text"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-form>
      <v-card-actions>
        <v-btn color="#272727" text @click="(dialog = false), close()">
          Close
        </v-btn>
        <v-spacer />
        <v-btn
          :disabled="!form"
          :loading="isLoading"
          class="white--text"
          color="#272727"
          depressed
          @click="(dialog = false), submit()"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
// Utilities
import http from "../../services/http-common";
export default {
  name: "ModalView",
  data: () => ({
    postResult: null,
    name: undefined,
    message: undefined,
    dialog: false,
    email: undefined,
    form: false,
    isLoading: false,
    rules: {
      email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
      nameCounter: (value) =>
        typeof value !== "undefined"
          ? value.length <= 20 || "Max 20 characters"
          : "undefined",
      emailCounter: (value) =>
        typeof value !== "undefined"
          ? value.length <= 60 || "Max 60 characters"
          : "undefined",
      messageCounter: (value) =>
        typeof value !== "undefined"
          ? value.length <= 3000 || "Max 3000 characters"
          : "undefined",
    },
  }),
  props: { showIcon: Boolean },
  methods: {
    close() {
      this.$emit("close");
    },
    submit() {
      this.$emit("submit");
      this.postData();
      this.$emit("close");
    },
    openModal() {
      this.dialog = true;
    },
    fortmatResponse(res) {
      return JSON.stringify(res, null, 1);
    },
    async postData() {
      const postData = new FormData();

      postData.append("to", 2);
      postData.append("from", this.name);
      postData.append("subject", "patria-coffee.org");
      postData.append("text", this.message);
      postData.append("email", this.email);
      try {
        const res = await http.post("/mail/send", postData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        this.postResult = this.fortmatResponse(result);
      } catch (err) {
        this.postResult = this.fortmatResponse(err.response?.data) || err;
        alert("The e-mail did not get sent. Please try again later.");
      }
    },
    clearPostOutput() {
      this.postResult = null;
    },
  },

  watch: {
    dialog: function (val) {
      if (val) {
        this.name = "";
        this.email = "";
        this.message = "";
      }
    },
  },
};
</script>
