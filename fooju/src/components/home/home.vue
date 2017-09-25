<template>
    <div>
      <Swipe class="swipe" :auto="2000">
        <SwipeItem class="swipeItem"><img src="../../assets/lunbotu.png" alt=""></SwipeItem>
        <SwipeItem class="swipeItem"><img src="../../assets/lunbotu.png" alt=""></SwipeItem>
      </Swipe>
      <section>
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
            <router-link to="/maphome">
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
        <ul>
          <li><a href=""><img src="../../assets/home-icon/ershou.png" alt=""><span>二手房</span></a></li>
          <li><a href=""><img src="../../assets/home-icon/xinfang.png" alt=""><span>新房</span></a></li>
          <li><a href=""><img src="../../assets/home-icon/goufang.png" alt=""><span style="left: 1rem">购房宝典</span></a></li>
          <li><a href=""><img src="../../assets/home-icon/zufangbk.png" alt=""><span>租房</span></a></li>
          <li><a href=""><img src="../../assets/home-icon/huanfang.png" alt=""><span>换房</span></a></li>
        </ul>
      </section>
      <section class="hot">
        <p class="activeheader">
          <span>热门推荐</span>
          <a href="">更多二手房 ></a>
        </p>
        <ul>
          <li>二手房</li>
        </ul>
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
    height: 24rem;
    margin: 0 auto;
    overflow: hidden;
    .swipeItem{
      width: 100%;
      float: left;
      img{
        width: 100%;
        height:24rem;
      }
    }
  }
  ul{
    margin-top: 2rem;
    margin-left: 1.5rem;
    overflow: hidden;
    width: 100%;
    height: 100%;
    li{
      float: left;
      width: 8rem;
      img{
        width: 3rem;
        height: 3rem;
      }
      span{
        margin-top: 1.5rem;
        display: block;
      }
    }
  }
  .fojvheader{
    margin-top: 4rem;
    width: 100%;
    height: 4.3rem;
    img{
      width: 3rem;
      margin-top: .5rem;
      height: 100%;
      float: left;
      margin-left: 3rem;
    }
    .line{
      height: 100%;
      border: 1px solid #e0e0e0;
      float: left;
      margin-left: 2rem;
    }
    .fojvnews{
      margin-left: 10rem;
      width: 20rem;
      .headernews{
        width: 19rem;
        height: 2rem;
        text-align: left;
        line-height: 2rem;
        .item-type{
          color: #d1616a;
          background-color: #f9e6e9;
          font-size: 1.1rem;
          padding: 0 0.5rem;
          border-radius: 0.4rem;
        }
        .item-content{
          font-size: 1.3rem;
          padding: 0 1rem;
        }
      }
    }
  }
  .fojvactive{
    margin-top: 2rem;
    height: 100%;
    width: 100%;
    .activeheader{
      width: 100%;
      height: 3rem;
      span{
        font-size: 2rem;
        float: left;
        margin: .5rem 0 0 1.5rem;
      }
      a{
        float: right;
        font-size: 1.2rem;
        margin-top: 1rem;
        margin-right: 1.5rem;
        color: #999;
      }
    }
    .activeswipe{
      height: 26.1rem;
      margin: 1.5rem 1.5rem 1.5rem 1.5rem;
      overflow: hidden;
      .activeitem{
        width: 100%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .fojvbk{
    width: 100%;
    height: 100%;
    margin: 1.5rem auto 5rem auto;
    .activeheader{
      width: 100%;
      height: 1.5rem;
    span{
      font-size: 2rem;
      float: left;
      margin: .5rem 0 0 1.5rem;
    }
    a{
      float: right;
      font-size: 1.2rem;
      margin-top: 1rem;
      margin-right: 1.5rem;
      color: #999;
    }
    }
    ul{
      height: 100%;
      width: 100%;
      li{
        height: 100%;
        margin: 0 .5rem 0 0;
        width: 6rem;
        a{
          display: block;
          position: relative;
          text-align: center;
          margin: 0 auto;
          img{
            width: 100%;
            height: 100%;
          }
          span{
            position: absolute;
            text-align: center;
            color: white;
            left: 2rem;
            margin-top: -3rem;
          }
        }
      }
    }
  }
  .hot{
    width: 100%;
    height: 100%;
    margin: 2rem 0 3rem 0;
  .activeheader{
    width: 100%;
    height: 1.5rem;
  span{
    font-size: 2rem;
    float: left;
    margin: .5rem 0 0 1.5rem;
  }
  a{
    float: right;
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-right: 1.5rem;
    color: #999;
  }
  }
  }
  .footerlink{
    width: 100%;
    height: 100%;
    border: 1px solid #2f3130;
    position: relative;
    margin: 2rem auto 4.4rem auto;
    background: #2f3130;
    p{
      padding: 1rem;
      text-align: left;
      color: #727373;
    }
    li{
      color: #727373;
    }
    .footerlink-right{
      p{
        text-align: right;
      }
    }
  }


  footer{width: 100%; display: flex; border-top: 1px solid #cccccc;padding: 10px 0;position: fixed;bottom: 0;  }
  footer a{flex: 1}
</style>
