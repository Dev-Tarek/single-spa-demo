import Vue from "vue";
import Vuex from "vuex";
import { storeModules } from "@portal/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ...storeModules,
  },
  strict: process.env.DEV,
});
