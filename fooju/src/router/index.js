import Vue from 'vue'
import Router from 'vue-router'
import homeNav from '../components/home/homeNav.vue'
import home from '../components/home/home.vue'
import homeindex from '../components/home/homeindex.vue'
import tool from '../components/tool/tool.vue'
import showing from '../components/showing/showing.vue'
import Date from '../components/showing/date1.vue'
import jilu from '../components/showing/date2.vue'
import biaolist from '../components/showing/liebiaolist.vue'
import searchOne from '../components/showing/searchOne.vue'
import self from '../components/self/self.vue'
import login from '../components/self/login.vue'
import register from '../components/self/register.vue'
import register2 from '../components/self/register2.vue'
import password from '../components/self/password.vue'
import password2 from '../components/self/password2.vue'
import care from '../components/self/care.vue'
import agent from '../components/self/agent.vue'
import mysession from '../components/self/mysession.vue'
import watchrecord from '../components/self/watchrecord.vue'
import watchplan from '../components/self/watchplan.vue'
import toolcompute from '../components/self/toolcompute.vue'
import userback from '../components/self/userback.vue'
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
import mapSearch from '../components/home/maphome/mapSearch.vue'
import rentMsg from '../components/home/zuhome/rentMsg.vue'
import baike from '../components/home/fojvbk/baike.vue'
import bknew from '../components/home/fojvbk/bknew.vue'
import bkshow from '../components/home/fojvbk/bkshow.vue'
import bkzu from '../components/home/fojvbk/bkzu.vue'
import bktwo from '../components/home/fojvbk/bktwo.vue'
import bkhuan from '../components/home/fojvbk/bkhuan.vue'
Vue.use(Router)

import sousuo from '../components/home/newhome/sousuo.vue'
import ditu from '../components/home/newhome/ditu.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: homeNav,
      children: [
        {
          path: '/',
          component: home
        },
        {path: '/home', component: home},
        {
          path: '/homeindex',
          component: homeindex
        },
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
    // 我的
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/password',
      component: password
    },
    {
      path: '/password2',
      component: password2
    },
    {
      path: '/register2',
      component: register2
    },
    {
      path: '/care',
      component: care
    },
    {
      path: '/mysession',
      component: mysession
    },
    {
      path: '/agent',
      component: agent
    },
    {
      path: '/watchrecord',
      component: watchrecord
    },
    {
      path: '/watchplan',
      component: watchplan
    },
    {
      path: '/toolcompute',
      component: toolcompute
    },
    {
      path: '/userback',
      component: userback
    },
    // 新房
    {
      path: '/sousuo',
      component: sousuo
    },
    {
      path: '/ditu',
      component: ditu
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
      path: '/mapSearch',
      component: mapSearch
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
      path: '/rentMsg',
      component: rentMsg
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
    },
    {
      path: '/baike',
      component: baike,
      children: [
        {
          path: '/baike',
          component: bktwo
        },
        {
          path: '/bktwo',
          component: bktwo
        },
        {
          path: '/bknew',
          component: bknew
        },
        {
          path: '/bkshow',
          component: bkshow
        },
        {
          path: '/bkzu',
          component: bkzu
        },
        {
          path: '/bkhuan',
          component: bkhuan
        }
      ]
    }
  ]
})
