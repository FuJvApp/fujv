import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import bdMap from './home/maphome/bdMap.vue'
export default {
  install () {
    Vue.component(Swipe.name, Swipe)
    Vue.component(SwipeItem.name, SwipeItem)
    Vue.component(bdMap.name, bdMap)
  }
}
