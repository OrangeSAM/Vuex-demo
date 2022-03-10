<template>
  <div class="moduleB">
    <div class="content">
      <div>模块B的count: {{count}}</div>
      <div>模块B的双倍count: {{doubleModuleBCount}}</div>
    </div>
    <div class="operate">

    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: "moduleB",
  computed: {
    ...mapGetters(['doubleModuleBCount']),
    ...mapState({
      count: state => state.moduleB.moduleBCount
    })
  }
}
</script>

<style scoped>

</style>
