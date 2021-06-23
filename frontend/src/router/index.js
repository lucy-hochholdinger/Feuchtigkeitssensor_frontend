import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../components/LogIn.vue'
import Registration from '../components/Registration.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LogIn,
  },
  {
    path: '/registration',
    component: Registration,
    children: [{
      path: 'firstAdd',
      component: CreateRoomExplain
    },
    ]
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router