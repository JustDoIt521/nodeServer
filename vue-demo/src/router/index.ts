import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: resolve => require(['@views/index.vue'], resolve)
  },
  {
    path: '/helloWorld',
    component: resolve => require(['@components/HelloWorld.vue'], resolve)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, form, next) => {
  console.warn('route change')
  next()
})

export default router
