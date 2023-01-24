import Vue from 'vue'
import Vuex from 'vuex'
import movies from './modules/muvies'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movies
  }
})

store.dispatch('initMoviesStore')

export default store
