<template>
    <div>
      <Swipe class="swipe" :auto="2000">
        <SwipeItem class="swipeItem"><img src="../../assets/lunbotu.png" alt=""></SwipeItem>
        <SwipeItem class="swipeItem"><img src="../../assets/lunbotu.png" alt=""></SwipeItem>
        <!--<SwipeItem class="swipeItem"><img src="../../assets/lunbotu.png" alt=""></SwipeItem>-->
      </Swipe>
      <section>
        <ul>
          <li>
            <router-link to="/twohome">
              <div>
                <span><img src="../../assets/home-icon/twohome.png" alt=""></span>
                <span>二手房</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/newhome">
              <div>
                <span><img src="../../assets/home-icon/newhome.png" alt=""></span>
                <span>新房</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/zuhome">
              <div>
                <span><img src="../../assets/home-icon/zuhome.png" alt=""></span>
                <span>租房</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/maphome">
              <div>
                <span><img src="../../assets/home-icon/maphome.png" alt=""></span>
                <span>地图找房</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/searchhome">
              <div>
                <span><img src="../../assets/home-icon/searchhome.png" alt=""></span>
                <span>查门店</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/foundhome">
              <div>
                <span><img src="../../assets/home-icon/foundhome.png" alt=""></span>
                <span>找小区</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/schoolhome">
              <div>
                <span><img src="../../assets/home-icon/schoolhome.png" alt=""></span>
                <span>学区房</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/online">
              <div>
                <span><img src="../../assets/home-icon/online.png" alt=""></span>
                <span>在线委托</span>
              </div>
            </router-link>
          </li>
        </ul>
      </section>
    </div>
</template>

<script type="text/ecmascript-6">
  import { Swipe, SwipeItem } from 'mint-ui'
  export default {
    components: {
      SwipeItem,
      Swipe
    }
  }
</script>

<style lang="less" scoped>
  .swipe{
    width: 100%;
    height: 475px;
    margin: 0 auto;
    overflow: hidden;
    .swipeItem{
      width: 100%;
      float: left;
      img{
        width: 100%;
        height:475px;
      }
    }
  }
  ul{
    margin-top: 20px;
    width: 100%;
    height: 250px;
    li{
      float: left;
      width: 25%;
    }
  }

  footer{width: 100%; display: flex;border-top: 1px solid #cccccc;padding: 10px 0;position: fixed;bottom: 0;  }
  footer a{flex: 1}
</style>
