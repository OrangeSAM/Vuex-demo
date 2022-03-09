<template>
  <div class="moduleB">
    <div class="content">
      <div>模块B的count: {{count}}</div>
    </div>
    <div class="operate">

    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "moduleB",
  computed: {
    ...mapState({
      count: state => state.moduleB.moduleBCount
    })
  }
}
</script>

<style scoped>

</style>
