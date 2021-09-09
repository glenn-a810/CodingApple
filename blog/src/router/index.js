import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from "../views/Home.vue";
// import list from '../components/list.vue'
// import detail from '../components/detail.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: '/list',
    // component: list,
    component: () => import('../components/list.vue'),
  },
  {
    path: 'detail',
    component: () => import('../components/detail.vue'),
  },
  {
    path: '/',
    component: () => import('../components/intro.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
