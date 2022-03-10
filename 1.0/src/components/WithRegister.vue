<template>
  <div>
    <div class="content">
      <div>count: {{count}}</div>
      <div>count 简化写法: {{countSimplified}}</div>
      <div>双倍 count: {{doubleCount}}</div>
      <div>四倍 count: {{fourfoldCount}}</div>
      <div>四倍 count 别称: {{fourfoldCountAlias}}</div>
      <div>1 和 count 相加: {{countPlus}}</div>
    </div>
    <div class="operate">
      <button @click="addCount">增加 count</button>
      <button @click="submitMutation">提交 mutation</button>
      <button @click="submitAction">提交 action</button>
      <button @click="reset">重置 count</button>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  name: 'WithRegister',
  data() {
    return {
      localCount: 1
    }
  },
  computed: {
    ...mapGetters(['doubleCount', 'fourfoldCount']),
    // 别称的使用
    ...mapGetters({
      fourfoldCountAlias: "fourfoldCount"
    }),
    // 获取state的几个方式
    // 这里使用展开运算符是为了将此对象混入computed中
    ...mapState({
      count: (state) => state.count,
      // 传字符串参数’count‘等同于 state => state.count
      countSimplified: 'count',
      // state 和 局部状态 并用
      countPlus(state) {
        return state.count + this.localCount
      }
    }),
  },
  methods: {
    // 为什么使用数组来获取
    ...mapMutations(['setCountMutation', 'resetCount']),
    ...mapActions(['setCountAction']),
    addCount() {
      this.$store.commit('addCount', 10)
    },
    submitMutation() {
      // this.setCountMutation('这是一个mutation 1')
      this.$store.commit('这是一个mutation 2')
      this.$store.commit({
        type: "setCountMutation",
        value: '这是一个mutation 3'
      })
    },
    submitAction() {
      // this.setCountAction('这是一个action 1')
      // this.$store.dispatch('setCountAction', '这是一个action 2')
      this.$store.dispatch({
        type: 'setCountAction',
        value: '这是一个action 3'
      })
    },
    reset () {
      // this.resetCount()
      // this.$store.commit('resetCount')
      this.$store.commit({
        type: 'resetCount',
        value:0
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
