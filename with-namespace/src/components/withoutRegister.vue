<template>
  <div>
    <div>{{count}}</div>
    <div>{{countGetters}}</div>
    <div @click="addCount">click to add count</div>
    <div @click="submitMutation">click to submit mutation</div>
    <div @click="submitAction">click to submit action</div>
    <div @click="resetCount">click to reset count</div>
  </div>
</template>

<script>
import store from '../store/index'
export default {
  name: 'HelloWorld',
  computed: {
    count() {
      return store.state.count
    },
    countGetters() {
      return store.getters.doubleCount
    }
  },
  methods: {
    addCount() {
      store.commit('addCount', 10)
    },
    submitMutation() {
      store.commit('setCountMutation','this is a mutation')
    },
    submitAction() {
      store.dispatch('setCountAction','this is a action')
    },
    resetCount () {
      store.commit('resetCount')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: 10px;
}
</style>
