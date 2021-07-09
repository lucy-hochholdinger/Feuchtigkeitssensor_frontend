import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'https://feuchtigkeitssensor.ds.ava.hfg.design/'
// axios.defaults.baseURL = 'http://localhost:3000/'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
