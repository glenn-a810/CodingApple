import { createWebHistory, createRouter } from 'vue-router'
import list from './components/list.vue'

const routes = [
  {
    path: '/list',
    component: list,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
