<!--使用未注册命名空间的示例-->
<template>
  <div>
    <div class="content">
      <div>{{count}}</div>
      <div>{{doubleCountGetters}}</div>
    </div>
    <div class="operate">
    <button @click="addCount">增加 count</button>
    <button @click="submitMutation">提交 mutation</button>
    <button @click="submitAction">提交 action</button>
    <button @click="resetCount">重置 count</button>
    </div>
  </div>
</template>

<script>
import store from '../store/index'
export default {
  name: 'WithoutRegister',
  computed: {
    count() {
      return store.state.count
    },
    doubleCountGetters() {
      return store.getters.doubleCount
    }
  },
  methods: {
    addCount() {
      store.commit('addCount', 10)
    },
    submitMutation() {
      store.commit('setCountMutation', {
        value: '这是一个mutation'
      })
    },
    submitAction() {
      store.dispatch('setCountAction',{
        value: '这是一个action'
      })
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
