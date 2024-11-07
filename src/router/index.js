import { createRouter, createWebHashHistory } from 'vue-router'
import mainPage from '../views/mainPage.vue'

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: mainPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
