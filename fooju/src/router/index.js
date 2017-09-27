import Vue from 'vue'
import Router from 'vue-router'
import homeNav from '../components/home/homeNav.vue'
import home from '../components/home/home.vue'
import tool from '../components/tool/tool.vue'
import showing from '../components/showing/showing.vue'
import Date from '../components/showing/date1.vue'
import jilu from '../components/showing/date2.vue'
import biaolist from '../components/showing/liebiaolist.vue'
import searchOne from '../components/showing/searchOne.vue'
import self from '../components/self/self.vue'
import twohome from '../components/home/twohome/twohome.vue'
import foundhome from '../components/home/foundhome/foundhome.vue'
import maphome from '../components/home/maphome/maphome.vue'
import newhome from '../components/home/newhome/newhome.vue'
import online from '../components/home/online/online.vue'
import schoolhome from '../components/home/schoolhome/schoolhome.vue'
import searchhome from '../components/home/searchhome/searchhome.vue'
import zuhome from '../components/home/zuhome/zuhome.vue'
import homesearch from '../components/home/online/HomeSearch.vue'
import myowner from '../components/home/online/MyOwner.vue'
import twoSearch from '../components/home/zuhome/twoSearch.vue'
Vue.use(Router)

let routes = [
  {
    path: '/',
    component: homeNav,
    children: [
      {path: '/', component: home},
      {path: '/home', component: home},
      {
        path: '/tool',
        component: tool
      },
      {
        path: '/showing',
        component: showing,
        children: [
          {
            path: '/',
            component: Date
          },
          {
            path: '/date1',
            component: Date
          },
          {
            path: '/date2',
            component: jilu
          }
        ]
      },
      {
        path: '/self',
        component: self
      }
    ]
  },
  {
    path: '/twohome',
    component: twohome
  },
  {
    path: '/foundhome',
    component: foundhome
  },
  {
    path: '/maphome',
    component: maphome
  },
  {
    path: '/newhome',
    component: newhome
  },
  {
    path: '/online',
    component: online
  },
  {
    path: '/schoolhome',
    component: schoolhome
  },
  {
    path: '/searchhome',
    component: searchhome
  },
  {
    path: '/zuhome',
    component: zuhome
  },
  {
    path: '/twoSearch',
    component: twoSearch
  },
  {
    path: '/HomeSearch',
    component: homesearch
  },
  {
    path: '/MyOwner',
    component: myowner
  },
  {
    path: '/liebiaolist',
    component: biaolist
  },
  {
    path: '/searchOne',
    component: searchOne
  }
]
const router = new Router({
  routes
})

export default router
