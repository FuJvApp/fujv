import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import plotHomeList from '../components/home/maphome/plotHomeList.vue'
export default {
  install () {
    Vue.component(Swipe.name, Swipe)
    Vue.component(SwipeItem.name, SwipeItem)
    Vue.component(plotHomeList.name, plotHomeList)
  }
}
