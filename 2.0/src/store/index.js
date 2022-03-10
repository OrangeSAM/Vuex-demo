/**
 * Author：Sam
 * Date: 22.3.6
 * Description: store index
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state: {
    moduleACount: 0
  },
  getters: {
    doubleModuleACount(state, getters, rootState, rootGetters) {
      // state 只能获取到当前模块内的state
      // getters 能获取到包括当前模块和其他模块的getters
      // rootState 能获取到按模块路径区分了的其他模块state
      // rootGetters 能获取到包括当前模块和其他模块的getters
      console.log('moduleA doubleModuleACount', state, '|',getters, '|', rootState, '|' , rootGetters)
      return state.moduleACount * 2
    },
  },
  mutations: {
    addModuleACountMutation(state, payload) {
      state.moduleACount += payload
    },
    setModuleACountMutation(state, payload) {
      // state 获取当前模块内的state
      // payload获取外部传进来的载荷
      console.log('moduleA setModuleACountMutation', state, payload)
      state.moduleACount = payload
    },
    resetModuleACount (state) {
      state.moduleACount = 0
    }
  },
  actions: {
    setModuleACountAction({state, commit, rootState}, payload) {
      // state 获取当前模块内的state
      // commit 获取commit方法
      // rootState 获取按模块路径区分了的其他模块state
      console.log('moduleA setCountAction', state, '|', commit,'|',  rootState, '|', payload)

      commit('setModuleACountMutation', payload)
    }
  }
}

const moduleB = {
  state: {
    moduleBCount: 0
  },
  getters: {
    doubleModuleBCount(state, getters) {
      console.log(getters)
      return state.moduleBCount * 2
    },
  },
  mutations: {
    addModuleBCountMutation(state, payload) {
      state.moduleBCount += payload
    }
  }
}

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
  },
  modules: {
    moduleA,
    moduleB
  }
})
