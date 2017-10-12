<template>
    <div class="home">
      <Swipe class="swipe" :auto="2000">
        <SwipeItem class="swipeItem"><img src="../../assets/lunbotu.png" alt=""></SwipeItem>
        <SwipeItem class="swipeItem"><img src="../../assets/lunbotu.png" alt=""></SwipeItem>
      </Swipe>
      <section class="homebar">
        <ul>
          <li>
            <router-link to="/twohome">
              <div>
                <p><img src="../../assets/home-icon/twohome.png" alt=""></p>
                <span>二手房</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/newhome">
              <div>
                <p><img src="../../assets/home-icon/newhome.png" alt=""></p>
                <span>新房</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/zuhome">
              <div>
                <p><img src="../../assets/home-icon/zuhome.png" alt=""></p>
                <span>租房</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="{path: '/maphome', query: {types: this.types}}">
              <div>
                <p><img src="../../assets/home-icon/maphome.png" alt=""></p>
                <span>地图找房</span>
              </div>
            </router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to="/searchhome">
              <div>
                <p><img src="../../assets/home-icon/searchhome.png" alt=""></p>
                <span>查门店</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/foundhome">
              <div>
                <p><img src="../../assets/home-icon/foundhome.png" alt=""></p>
                <span>找小区</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/schoolhome">
              <div>
                <p><img src="../../assets/home-icon/schoolhome.png" alt=""></p>
                <span>学区房</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/online">
              <div>
                <p><img src="../../assets/home-icon/online.png" alt=""></p>
                <span>在线委托</span>
              </div>
            </router-link>
          </li>
        </ul>
      </section>
      <section class="fojvheader">
        <div>
          <img src="../../assets/home-icon/fojvhead.png" alt="">
        </div>
        <span class="line"></span>
        <mt-swipe class="fojvnews" :show-indicators="false">
          <mt-swipe-item class="headernews">
            <span class="item-type">车展</span>
            <span class="item-content">111</span>
            <br>
            <span class="item-type">看房团</span>
            <span class="item-content">222</span>
          </mt-swipe-item>
        </mt-swipe>
      </section>
      <section class="fojvactive">
        <p class="activeheader">
          <span>活动专题</span>
          <a href="">更多 ></a>
        </p>
        <mt-swipe :show-indicators="false" class="activeswipe">
          <mt-swipe-item class="activeitem"><img src="../../assets/home-icon/activeheader.png" alt=""></mt-swipe-item>
          <mt-swipe-item class="activeitem"><img src="../../assets/home-icon/activeheader.png" alt=""></mt-swipe-item>
        </mt-swipe>
      </section>
      <section class="fojvbk">
        <p class="activeheader">
          <span>福居百科</span>
          <a href="">更多 ></a>
        </p>
        <ul class="fojvbknav">
          <li><a href="#/baike"><img src="../../assets/home-icon/ershou.png" alt=""><span>二手房</span></a></li>
          <li><a href="#/bknew"><img src="../../assets/home-icon/xinfang.png" alt=""><span>新房</span></a></li>
          <li><a href="#/bkshow"><img src="../../assets/home-icon/goufang.png" alt=""><span style="left: 1rem">购房宝典</span></a></li>
          <li><a href="#/bkzu"><img src="../../assets/home-icon/zufangbk.png" alt=""><span>租房</span></a></li>
          <li><a href="#/bkhuan"><img src="../../assets/home-icon/huanfang.png" alt=""><span>换房</span></a></li>
        </ul>
      </section>
      <section class="hot">
        <p class="activeheader">
          <span>热门推荐</span>
          <a href="">更多二手房 ></a>
        </p>
        <mt-navbar v-model="selected">
          <mt-tab-item name="first" id="1">option A</mt-tab-item>
          <mt-tab-item id="2">option B</mt-tab-item>
          <mt-tab-item id="3">option C</mt-tab-item>
        </mt-navbar>
        <mt-tab-container  v-model="selected">
          <mt-tab-container-item name="first" id="1">
            <ul class="content">
              <li v-for="data in tableData">
                <a class="pic" href="" ><img :src="'http://www.fooju.cn/'+data.pic" alt=""></a>
                <a class="info" href="">
                  <p>{{data.title}}</p>
                  <p>{{data.bedroom}}室{{data.livingroom}}厅{{data.wc}}卫/{{data.built_area}}m²/{{data.direction}}</p>
                  <p><span>{{data.total_price}}万 </span> {{data.unit_price}}元/㎡</p>
                </a>
              </li>
            </ul>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
          </mt-tab-container-item>
        </mt-tab-container>
      </section>
      <section class="footerlink">
        <p style="border-bottom: 1px solid #3e403f;">友情链接</p>
        <ul>
          <li>呼和浩特114</li>
          <li>包头房产网</li>
          <li>天堂草原音乐网</li>
        </ul>
        <div class="footerlink-right">
          <p>北京福居网网络科技有限公司</p>
          <p>网络经营许可证 京ICP备13012924号-1</p>
        </div>
      </section>
    </div>
</template>

<script type="text/ecmascript-6">
  import {usedLists} from '../../api/config'
  import { Swipe, SwipeItem } from 'mint-ui'
  export default {
    components: {
      SwipeItem,
      Swipe
    },
    data () {
      return {
        page_num: 1,
        page_size: 5,
        tableData: [],
        selected: '1',
        types: 1
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        var self = this
        usedLists({page_num: this.page_num, page_size: this.page_size}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.tableData = res.data.data
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "home.less";
</style>
