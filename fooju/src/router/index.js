import Vue from 'vue'
import Router from 'vue-router'
import homeNav from '../components/home/homeNav.vue'
import home from '../components/home/home.vue'
import tool from '../components/tool/tool.vue'
import showing from '../components/showing/showing.vue'
import self from '../components/self/self.vue'
import twohome from '../components/home/twohome/twohome.vue'
import foundhome from '../components/home/foundhome/foundhome.vue'
import maphome from '../components/home/maphome/maphome.vue'
import newhome from '../components/home/newhome/newhome.vue'
import online from '../components/home/online/online.vue'
import schoolhome from '../components/home/schoolhome/schoolhome.vue'
import searchhome from '../components/home/searchhome/searchhome.vue'
import zuhome from '../components/home/zuhome/zuhome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeNav',
      component: homeNav,
      children: [
        {path: '/', component: home},
        {path: '/home', name: 'home', component: home},
        {path: '/tool', name: 'tool', component: tool},
        {path: '/showing', name: 'showing', component: showing},
        {path: '/self', name: 'self', component: self}
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
    }
  ]
})
