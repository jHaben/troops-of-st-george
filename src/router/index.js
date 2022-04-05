import Vue from "vue";
import Router from "vue-router";
import HomeSection from "../views/HomeSection.vue";
// import UnderConstruction from "../views/UnderConstruction.vue"
import LetterSection from "../views/LetterSection.vue";
import NotFound from '../views/NotFound.vue';
import DonutCalc from '../views/DonutCalc.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/construction",
    //   name: "construction",
    //   component: UnderConstruction,
    // },
    {
      path: "/",
      name: "home",
      component: HomeSection,
    },
    {
      path: "/donut",
      name: "donutCalc",
      component: DonutCalc,
    },
    {
      path: "/letter",
      name: "letter",
      component: LetterSection,
    },
    {
      path: "*",
      name: "Not Found",
      component: NotFound,
    },
  ],

  scrollBehavior: function (to) {
    let position = {};
    if (to.hash) {
      position = {
        selector: to.hash,
      };
    } else {
      return (position = { x: 0, y: 0 });
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(position);
      }, 1);
    });
  },
});
