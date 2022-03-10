<template>
  <div class="moduleA">
    <div class="content">
      <div>模块A的count: {{count}}</div>
      <div>模块A的双倍count: {{doubleModuleACount}}</div>
    </div>
    <div class="operate">
      <button @click="addMutation">增加 count</button>
      <button @click="submitMutation">提交 mutation</button>
      <button @click="submitAction">提交 action</button>
      <button @click="submitReset">重置 count</button>
    </div>
    <div class="operate">
      <button @click="submitMutation1">提交顶层 store 中的 mutation</button>
      <button @click="submitAction1">提交顶层 store 中的 action</button>
    </div>
    <div class="operate">
      <button @click="addModuleBCount">提交模块B store 中的 mutation</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "moduleA",
  computed: {
    ...mapState({
      count: state => state.moduleA.moduleACount
    }),
    ...mapGetters(['doubleModuleACount'])
  },
  methods: {
    ...mapMutations(['addModuleACountMutation', 'setModuleACountMutation',
      'resetModuleACount', 'addModuleBCountMutation',
      'setCountMutation']),
    ...mapActions(['setModuleACountAction', 'setCountAction']),
    // 增加模块A count的值
    addMutation() {
      this.addModuleACountMutation(10)
    },
    // 提交模块A的mutation
    submitMutation() {
      this.setModuleACountMutation('这是一个模块A的mutation')
    },
    // 提交模块A的action
    submitAction() {
      this.setModuleACountAction('这是一个模块A的action')
    },
    // 重置模块A的count
    submitReset() {
      this.resetModuleACount()
    },

    // 提交顶层store的mutation
    submitMutation1() {
      this.setCountMutation({value: '模块A设置顶层store的mutation'})
      console.log(this.$store)
    },
    // 提交顶层store的action
    submitAction1() {
      this.setCountAction({value: '模块A设置顶层store的action'})
    },
    // 修改模块B的count
    addModuleBCount() {
      this.addModuleBCountMutation(15)
    },

  }
}
</script>

<style scoped>

</style>
