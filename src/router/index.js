import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
import VueRouter from 'vue-router'

// 引入功能组件首页，电影，音乐
import Home from '../components/Home.vue'
import Movie from '../components/movie.vue'
import Music from '../components/music.vue'

// 引入子路由组件
import Gd from '../components/yinyue/Gd.vue'
import Lx from '../components/yinyue/Lx.vue'
import Sg from '../components/yinyue/Sg.vue'

// 引入电影列表组件
import MvL from '../components/Mvlist.vue'

// 引入登录组件
import lg from '../components/Login.vue'
// import { from } from 'rxjs'

Vue.config.productionTip = false

// 注册路由功能组件
Vue.use(VueRouter)

// 创建路由对象
const router = new VueRouter({
  // routes是固定的不可更改
  routes: [
    // 配置输入错误的地址时跳转到首页
    // { path: '*', redirect: '/hm' },
    // 配置重定向为电影展示的页面若果不是重定向触发不到class效果
    { path: '/', redirect: '/lg' },
    { path: '/lg', component: lg },
    { path: '/hm', component: Home },
    { path: '/mv', component: Movie },
    { path: '/mvl/:mid/:name', component: MvL },
    {
      // eslint-disable-next-line object-property-newline
      path: '/mc', component: Music,
      children: [
        { path: '*', redirect: Gd },
        { path: '/mc/gudian', component: Gd },
        { path: '/mc/liuxing', component: Lx },
        { path: '/mc/shanggan', component: Sg }
      ]
    }
  ]
})

// 设置路由守卫
router.beforeEach((to, from, next) => {
  /*
    to:是即将要访问的路由信息 to.push()获取即将访问的锚点信息
    from:是来源的路由信息  from.push()获取来源的锚点信息
    next:是一个回调函数,可以决定继续，停止，执行其他路由的功能
      next()代表放行
      next(false)代表停止
      next(锚点信息)代表执行其它锚点路由
  */
  const token = window.sessionStorage.getItem('token')

  // eslint-disable-next-line eqeqeq
  if (!token && to.path !== '/lg') {
    return next('/lg')
  }

  next()
})

export default router
