/**
 * Author：Sam
 * Date: 22.3.6
 * Description: store index
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      count: 0
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    fourfoldCount(state, getters) {
      console.log(getters, 2)
      return getters.doubleCount * 2
    }
  },
  mutations: {
    resetCount(state) {
      state.count = 0
    },
    addCount(state, payload) {
      state.count += payload
    },
    setCountMutation(state, payload) {
      console.log(payload, 2929)
      state.count = payload
    }
  },
  actions: {
    setCountAction({commit}, payload) {
      commit('setCountMutation', payload)
    }
  }
})
