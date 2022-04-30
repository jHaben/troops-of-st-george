import Vue from "vue";
import Router from "vue-router";
import HomeSection from "../views/HomeSection.vue";
// import UnderConstruction from "../views/UnderConstruction.vue"
import NotFound from "../views/NotFound.vue";
import DonutCalc from "../views/DonutCalc.vue";
import LoginPage from "../views/LoginPage.vue";
Vue.use(Router);

const router = new Router({
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
      path: "*",
      name: "Not Found",
      component: NotFound,
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminSection"),
    },
    {
      path: "/login",
      component: LoginPage,
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

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/donut", "/"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
