import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'
import store from '@/store'

const Layout = () => import('@/views/layout')
const Search = () => import('@/views/search')
const SearchList = () => import('@/views/search/list')
const ProDetail = () => import('@/views/prodetail')
const Login = () => import('@/views/login')
const Pay = () => import('@/views/pay')
const MyOrder = () => import('@/views/myorder')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: '/home', component: Home },
        { path: '/category', component: Category },
        { path: '/cart', component: Cart },
        { path: '/user', component: User }
      ]
    },
    { path: '/login', component: Login },
    { path: '/search', component: Search },
    { path: '/searchlist', component: SearchList },
    { path: '/prodetail/:id', component: ProDetail },
    { path: '/pay', component: Pay },
    { path: '/myorder', component: MyOrder }
  ]
})

// 配置全局前置守卫
// 所有路由在被访问前都会先经过全局前置守卫
// 只有全局前置守卫放行才会跳转
// 1. to 往哪里去， 到哪去的路由信息对象
// 2. from 从哪里来， 从哪来的路由信息对象
// 3. next() 是否放行
// 如果next()调用，就是放行
// next(路径) 拦截到某个路径页面

// 定义一个数组存放需要权限的页面
const arr = ['/pay', '/myoder']
router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  // next()
  // 无需权限的页面直接放行
  if (!arr.includes(to.path)) {
    next()
    return
  }
  // 需要权限的页面判断是否登录(token)
  // 有token放行 无token拦截到登录页面
  const token = store.getters.token
  // console.log(token)
  if (token) {
    next()
  } else {
    next('/login')
  }
})
export default router
