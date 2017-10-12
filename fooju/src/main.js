// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router/index'
import store from './store/store'
import mintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './style/reset.css'
import './font/iconfont.css'
import './font2/iconfont.css'
import './fontwqn/iconfont.css'
import './fontw/iconfont.css'
import myPlugins from './components/components'
import * as api from './api/config'
// import flexible from 'flexible'
// import 'flexible'
Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.config.silent = true
// Vue.use(mintUI)
Vue.use(mintUI)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(myPlugins)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
router.beforeEach(function (to, from, next) {
  if (to.path === '/login') {
    next()
  } else {
    if (!store.state.user && (from.path === '/self') && (to.path === '/mysession' || to.path === '/care' || to.path === '/agent' || to.path === '/watchrecord' || to.path === '/watchplan' || to.path === '/toolcompute' || to.path === '/userback')) {
      next('/login')
    } else {
      next()
    }
  }
})
