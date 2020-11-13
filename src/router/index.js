import Vue from 'vue'
import VueRouter from 'vue-router'
import Employee from '../views/employee.vue'
import device from '../views/device.vue'
import orgination from '../views/orgination.vue'
import Home from "..//views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/',
  //   name: 'employee',
  //   component: Employee
  // },
  {
    path: '/device',
    name: 'device',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: device
  },
  {
    path: '/orgination',
    name: 'orgination',
    component: orgination
  }
]

const router = new VueRouter({
  routes
})

export default router
