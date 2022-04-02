import Vue from 'vue';
import Vuex from 'vuex';
import { links } from './link.module';
import {articleList} from './article.module'
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    links,
    articleList,
  },
  state: {
    drawer: false,
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: (state) => (state.drawer = !state.drawer),
  }
});