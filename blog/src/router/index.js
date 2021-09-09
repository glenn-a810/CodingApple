import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from "../views/Home.vue";
import list from '../components/list.vue'
// import detail from '../components/detail.vue'
import author from '../components/author.vue'
import comment from '../components/comment.vue'

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
    path: '/detail/:id',
    component: () => import('../components/detail.vue'),
    children: [
      {
        path: 'author',
        component: author,
      },
      {
        path: 'comment',
        component: comment,
      },
    ]
  },
  {
    path: '/list',
    // component: {
    //   list: list,
    //   author: author,
    //   comment: comment,
    // }
    // component: () => import('../components/list.vue'),
    component: list,
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
