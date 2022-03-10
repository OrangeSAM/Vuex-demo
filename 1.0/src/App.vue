<template>
  <div id="app">
    <h1>vuex demo</h1>
    <hr>
    <h2>使用注册到vue的vuex</h2>
    <with-register></with-register>
    <hr>
    <h2>使用未注册到vue中的vuex</h2>
    <without-register></without-register>
  </div>
</template>

<script>
import WithRegister from './components/WithRegister'
import WithoutRegister from './components/WithoutRegister'

export default {
  name: 'App',
  components: {
    WithRegister,
    WithoutRegister
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
hr {
  margin: 40px 0;
}
.content {
  margin-bottom: 40px;
}
.operate{
  display: flex;
  justify-content: space-evenly;
}
button {
  background: linear-gradient(to bottom right,#8989ab, #dfbfc5);
  border-width: 1px;
  border-radius: 3px;
  padding: 5px 10px;
  box-shadow: 4px 5px 10px 4px lightgrey;
  transition: all .3s ease-in-out;
}
button:hover{
  cursor: pointer;
  box-shadow: 4px 5px 10px 4px #a5a5a5;
}
</style>
