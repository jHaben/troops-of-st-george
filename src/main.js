import Vue from "vue";
import App from "./App.vue";
import "./plugins/base";
import router from "./router";
import store from "./store";
import "./assets/main.css";
import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify.min.css";
import VeeValidate from 'vee-validate/dist/vee-validate';

Vue.config.productionTip = false;

Vue.use(VeeValidate);


new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");




