// For the router links
import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '../components/LogIn.vue'
import Registration from '../components/Registration.vue'
import Homepage from '../components/Homepage.vue'
import SensorOne from '../components/SensorOne.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
},
{
  path: '/login',
  name: 'Login',
  component: LogIn
},
{
  path: '/homepage',
  name: 'Homepage',
  component: Homepage
},
{
  path: '/homepage/sensor1',
  name: 'SensorOne',
  component: SensorOne
},
{
  path: '/registration',
  component: Registration
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
