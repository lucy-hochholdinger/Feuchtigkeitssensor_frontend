<template>
  <div id="app">
    <Registration/>
    <LogIn/>
    <router-view></router-view>
  </div>
</template>

<script>
import LogIn from './components/LogIn.vue'
import Registration from './components/Registration.vue'

export default {
  name: 'App',
  components: {
    LogIn,
    Registration
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
</style>
