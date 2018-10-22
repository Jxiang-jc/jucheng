import Vue from 'vue'
import Router from 'vue-router'
import juhome from '@/components/home/Juhome'
import jusearch from '@/components/home/search/jusearch'
import jucitylist from '@/components/home/citylist/jucitylist'

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
    }
  ]
})
