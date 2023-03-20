<template>
  <v-container>
    <v-sheet color="transparent" height="100" />
    <v-card align="center" color="transparent" flat tile>

      <v-card align="center" width="400">
        <div>
          <form name="form" v-on:keyup.enter="handleLogin">
            <div class="ma-16">
              <label for="username">
              
              </label>
              <br />
              <input style="background-color: white; border-style: outset" v-model="user.username" v-validate="'required'"
                type="text" class="form-control" name="username" autocomplete="on" placeholder="Username"/>

              <div v-if="errors.has('username')" class="alert alert-danger" style="color: red" role="alert">
                Username is required!
              </div>
            </div>
            <div class="ma-16">
              <label for="password">
           
              </label>
              <br />
              <input style="background-color: white; border-style: outset" v-model="user.password" v-validate="'required'"
                type="password" class="form-control" name="password" autocomplete="on" placeholder="Password"/>
              <div v-if="message" style="color: red" role="alert">
                {{ message }}
              </div>
              <div v-if="errors.has('password')" style="color: red" role="alert">
                Password is required!
              </div>
            </div>
            <vue-recaptcha ref="recaptcha" @verify="onVerify" :sitekey="siteKey">
            </vue-recaptcha>
            <div >
              <v-btn :disabled="loading || !robot" @click="handleLogin" class="ma-8">
                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                <span>Login</span>
              </v-btn>
            </div>
            <div class="form-group"></div>
          </form>
        </div>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import User from "../models/user";
import { VueRecaptcha } from "vue-recaptcha";

export default {
  name: "LoginPage",
  components: {
    VueRecaptcha,
  },

  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: "",
      robot: false,
      siteKey: "6LfvobMfAAAAADWD74D6r-hpF4qI2cnjCXuEbmfu",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/admin");
    }
  },
  methods: {
    onVerify(response) {
      if (response) this.robot = true;
    },

    handleLogin() {
      if (this.robot) {
        this.loading = true;
        this.$validator.validateAll().then((isValid) => {
          if (!isValid) {
            this.loading = false;
            return;
          }

          if (this.user.username && this.user.password) {
            this.$store.dispatch("auth/login", this.user).then(
              () => {
                this.$router.push("/admin");
              },
              () => {
                this.loading = false;
                this.message = "Error.";
              }
            );
          }
        });
      }
    },
  },
};
</script>
