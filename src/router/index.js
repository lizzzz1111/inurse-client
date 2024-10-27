import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由懒加载(使用import)
// 主页
const Index = () => import('../views/index/index.vue')
// 消息
const Message = () => import('../views/message/message.vue')
// sos
const Sos = () => import('../views/sos/sos.vue')
// 社区广场
const Square = () => import('../views/square/square.vue')
// 我的
const Mine = () => import('../views/mine/mine.vue')

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter)

const routes = [
  /* vue异步组件技术 */
  //  path 指路径，component 指的是组件
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/message',
    name: 'message',
    component: Message
  },
  {
    path: '/sos',
    name: 'sos',
    component: Sos
  },
  {
    path: '/square',
    name: 'square',
    component: Square
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
