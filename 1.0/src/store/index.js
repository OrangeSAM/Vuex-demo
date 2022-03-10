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
    // 两倍count
    doubleCount(state) {
      return state.count * 2
    },
    // 四倍count
    fourfoldCount(state, getters) {
      return getters.doubleCount * 2
    }
  },
  mutations: {
    // 重置count
    resetCount(state) {
      state.count = 0
    },
    // 增加count
    addCount(state, payload) {
      state.count += payload
    },
    // 设置count mutation
    setCountMutation(state, payload) {
      console.log(payload)
      state.count = payload.value
    }
  },
  actions: {
    // 设置count action
    setCountAction(ctx, payload) {
      console.log(payload)
      ctx.commit('setCountMutation', payload)
    }
  }
})
