// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import mintUI from 'mint-ui'
import './style/reset.css'
import './font/iconfont.css'
import './fontwqn/iconfont.css'
import 'mint-ui/lib/style.css'
// import flexible from 'flexible'
// import 'flexible'
Vue.config.productionTip = false
// Vue.use(mintUI)
Vue.use(mintUI)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
