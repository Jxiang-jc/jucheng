import Vue from 'vue'
import Router from 'vue-router'
import juhome from '@/components/home/Juhome'
import jusearch from '@/components/home/search/jusearch'
import jucitylist from '@/components/home/citylist/jucitylist'
import juplay from '@/components/performance/Juplay'
import judetails from '@/components/details/JuDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: juhome,
      props: true
    },
    {
      path: '/jucitylist',
      name: 'CityList',
      component: jucitylist,
      props: true
    },
    {
      path: '/jusearch',
      name: 'Search',
      component: jusearch
    },
    {
      path: '/juplay',
      name: 'Juplay',
      // redirect: '/juplay/Juall', // 重定向
      component: juplay
      // children: [
      //   {
      //     path: 'Juall',
      //     name: 'Juall',
      //     component: Juall
      //   },
      //   {
      //     path: '',
      //     component: Juall
      //     // 如果想要进页面时显示All,就用下面的方法,
      //     // 如果无所谓,就直接用component即可
      //   }
      // ]
    },
    {
      path: '/judetails',
      name: 'JuDetails',
      component: judetails
    }
  ]
})
