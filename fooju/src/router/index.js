import Vue from 'vue'
import Router from 'vue-router'
import homeNav from '../components/home/homeNav.vue'
import home from '../components/home/home.vue'
import tool from '../components/tool/tool.vue'
import showing from '../components/showing/showing.vue'
import self from '../components/self/self.vue'

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
    }
  ]
})
