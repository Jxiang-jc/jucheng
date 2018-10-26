import Vue from 'vue'
import Router from 'vue-router'

import PageView from '@/views/PageView'
import HomeView from '@/views/HomeView'
import PlayView from '@/views/PlayView'
import MineView from '@/views/MineView'
import DetailView from '@/views/DetailView'
import LoginView from '@/views/LoginView'
import RegisterView from '@/views/RegisterView'
import CitylistView from '@/views/CitylistView'
import SearchView from '@/views/SearchView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/' // 重定向
    },
    {
      path: '/pages',
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
          props: true,
          component: HomeView, // 主页视图
          meta: {
            keepAlive: false
          }
        },
        {
          path: 'play',
          name: 'PlayView',
          component: PlayView // 演出库视图
        },
        {
          path: 'mine',
          name: 'MineView',
          component: MineView, // 用户视图
          meta: {
            keepAlive: false
          }
        },
        {
          path: 'detail',
          name: 'DetailView',
          component: DetailView // 详情页
        },
        {
          path: '/citylist',
          name: 'CitylistView',
          props: true,
          component: CitylistView // 选择城市视图
        }
      ]
    },
    {
      path: '/search',
      name: 'SearchView',
      component: SearchView // 搜索视图
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView // 登陆视图
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView // 注册视图
    },
    {
      path: '*',
      redirect: '/pages/' // 路径错时跳转回首页
    }
  ]
})
