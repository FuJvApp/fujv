import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  install () {
    Vue.component(Swipe.name, Swipe)
    Vue.component(SwipeItem.name, SwipeItem)
  }
}
