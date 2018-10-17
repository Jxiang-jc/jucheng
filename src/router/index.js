import Vue from 'vue'
import Router from 'vue-router'
import juhome from '@/components/home/Juhome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: juhome
    }
  ]
})
