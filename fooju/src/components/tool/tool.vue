<template>
    <div class="tool">
      <mt-header fixed title="福居工具"></mt-header>
      <section>
        <mt-swipe :auto="1000*(ad_list.length*2+1) " :speed="1000">
          <mt-swipe-item v-for="item in ad_list" :key="ad_list">
            <img :src="'http://www.fooju.cn/'+item.picurl" alt="">
          </mt-swipe-item>
        </mt-swipe>
        <div>
          <ul class="tool-content">
            <li>
              <a href="#">
                <div>
                  <img style="width: .34rem; height: .425rem" src="../../assets/imgwqn/tools/jingjiren.png" alt="">
                </div>
                <span>经纪人</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div>
                  <img style="width: .285rem; height: .355rem" src="../../assets/imgwqn/tools/fangdai.png" alt="">
                </div>
                <span>房贷计算器</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div>
                  <img style="width: .285rem; height: .355rem" src="../../assets/imgwqn/tools/shuifei.png" alt="">
                </div>
                <span>税费计算器</span>
              </a>
            </li>
          </ul>
          <ul class="tool-content">
            <li>
              <a href="#">
                <div>
                  <img style="width: .42rem; height: .39rem" src="../../assets/imgwqn/tools/mendian.png" alt="">
                </div>
                <span>查门店</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div>
                  <img style="width: .48rem; height: .355rem" src="../../assets/imgwqn/tools/gujia.png" alt="">
                </div>
                <span>房屋估价</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div>
                  <img style="width: .48rem; height: .355rem" src="../../assets/imgwqn/tools/zhaofang.png" alt="">
                </div>
                <span>帮我找房</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        type: 1,
        position: 0,
        ad_list: []
      }
    },
    created () {
      this.getAdList()
    },
    methods: {
      getAdList () {
        var self = this
        var data = {
          type: this.type,
          position: this.position
        }
        this.$api.adLists(data).then(function (res) {
//          console.log(res)
          if (res.data && res.data.code === 200) {
            self.ad_list = res.data.data
            if (self.ad_list.length === 1) {
              self.ad_list.push(res.data.data[0])
            }
            console.log(self.ad_list)
          }
        })
      }
    }
  }
</script>

<style>
  .tool{
    background-color: #efefef;
    padding-bottom: .5rem;
  }
  .tool .mint-header{
    background-color: #fff;
    height: .44rem;
    border-bottom: 1px solid #eeeeee;
    font-size: .16rem;
  }
  .tool section{
    padding-top: .45rem;
  }
  .tool section .mint-swipe{
    height: 2.61rem;
  }
  .tool section .mint-swipe img{
    width: 100%;
    height: 100%;
  }
  .tool .mint-swipe-indicator{
    width: .1rem;
    height: .03rem;
    border-radius: 0;
  }
  .tool .mint-swipe-indicator.is-active{
    background-color: #ffffff;
    opacity: 1;
  }
  .tool section .tool-content{
    background-color: #fff;
    display: flex;
    height: 1.2rem;
    padding: .1rem;
    box-sizing: border-box;
    justify-content: space-around;
  }
  .tool section .tool-content li{
    width: 1rem;
    height: 1rem;
    box-shadow: 0 0 0.1rem 0 #eee;
    padding: .1rem;
    box-sizing: border-box;
  }
  .tool section .tool-content li span{
    display: inline-block;
    margin-top: .1rem;
  }
</style>
