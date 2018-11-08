import Vue from 'vue'
import Router from 'vue-router'
import arcList from '@/components/arcList'
import allCapth from '@/components/allCapth'
import capterInfos from '@/components/capterInfos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'arcList',
      component: arcList
    },
    {
      path: '/all_capth',
      name: 'allCapth',
      component: allCapth
    },
    {
      path: '/capth_infos',
      name: 'capterInfos',
      component: capterInfos
    }
  ]
})
