/**
 * Created by hskj on 2017/10/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: false,
    AgentMsgId: '',
    routeNow: null
  },
  mutations: {
    // 登录
    login (state, user) {
      state.user = user
    },
    // 退出
    logout (state, user) {
      state.user = false
    },
    // 管理经纪人id状态
    setId (state, AgentMsgId) {
      state.AgentMsgId = AgentMsgId
    },
    // 管理当前路由
    setRouteNow (state, routeNow) {
      state.routeNow = routeNow
    }
  }
})
