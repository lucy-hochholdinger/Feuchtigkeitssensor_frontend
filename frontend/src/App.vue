<template>
  <div id="app">
    <Registration />
    <LogIn />
    <router-view></router-view>
  </div>
</template>

<script>
import LogIn from './components/LogIn.vue'
import Registration from './components/Registrierung.vue'

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
    font-family: Roboto;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    color: #012D04;
    margin-top: 60px;
  }

</style>
