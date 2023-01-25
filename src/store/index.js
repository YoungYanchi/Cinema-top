import Vue from 'vue'
import Vuex from 'vuex'
import movies from './modules/muvies'
import loader from './modules/loader'
import notification from "@/store/modules/notification";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    loader,
    notification
  }
})

export default store
