import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import actions from "./actions"
import mutations from "./mutations"
import user from './module/user'
import getters from "./getters"
import saveInLocal from './plugin/saveInLocal'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state,
  mutations,
  actions,
  getters,
  modules: {
    user
  },
  plugins: [saveInLocal]
})
