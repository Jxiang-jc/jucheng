import Vue from 'vue'
import Router from 'vue-router'

import PageView from '@/views/PageView'
import HomeView from '@/views/HomeView'
import PlayView from '@/views/PlayView'
import MineView from '@/views/MineView'
import DetailView from '@/views/DetailView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/' // 重定向
    },
    {
      path: '/pages',
      // name: 'home',
      component: PageView, // 综合试图
      props: true,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView, // 主页视图
          meta: {
            keepAlive: true // 需要被缓存
          }
        },
        {
          path: 'play',
          name: 'PlayView',
          component: PlayView, // 演出库视图
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'mine',
          name: 'MineView',
          component: MineView, // 用户视图
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'detail',
          name: 'DetailView',
          component: DetailView, // 详情页
          meta: {
            keepAlive: true
          }
        }
      ]
    }
  ]
})
