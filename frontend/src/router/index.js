import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '../components/LogIn.vue'
import Registration from '../components/Registration.vue'
import Homepage from '../components/Homepage.vue'

Vue.use(VueRouter)

const routes = [
  {
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
    path: '/registration',
    component: Registration
    /*
    children: [{
      path: 'firstAdd',
      component: CreateRoomExplain
    }
    ]
    */
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
