<template>
    <div class="rentMsg rent">
      <mt-header fixed>
        <div slot="left">
          <mt-button icon="back" @click="goBack"></mt-button>
        </div>
      </mt-header>
      <div class="msgSwiper">
        <mt-swipe :auto="1000*(msgPic.length*2+1)" :speed="1000" :show-indicators="false">
        <mt-swipe-item v-for="(item,index) in msgPic">
          <img :src="'http://www.fooju.cn/'+item.pic" alt="">
          <p id="picN">{{index+1}}/{{msgPic.length}}</p>
        </mt-swipe-item>
      </mt-swipe>
      </div>
      <div class="msgMain">
        <h3>{{rentMsg.title}}</h3>
        <ul>
          <li>
            <p>{{rentMsg.rent}}元/月</p>
            <span>租房</span>
          </li>
          <li>
            <p>{{rentMsg.bedroom}}室{{rentMsg.livingroom}}厅{{rentMsg.wc}}卫</p>
            <span>户型</span>
          </li>
          <li>
            <p>{{rentMsg.use_area}}m²</p>
            <span>面积</span>
          </li>
        </ul>
      </div>
      <div class="msg">
        <ul>
          <li>
            <span>楼层：<i>{{rentMsg.floor}}/{{rentMsg.floor_totle}}层</i></span>
            <span class="right-item">朝向：<i>{{rentMsg.direction}}</i></span>
          </li>
          <li>
            <span>装修：<i>{{rentMsg.decoration}}</i></span>
            <span class="right-item">付款方式：<i>{{rentMsg.pay_type}}</i></span>
          </li>
          <li>
            <span>年代：<i>{{rentMsg.age}}年</i></span>
            <span class="right-item">楼型：<i>{{rentMsg.purpose}}</i></span>
          </li>
          <li>
            <span>房源编号：<i>{{rentMsg.number}}</i></span>
            <span class="right-item">权属：<i>{{rentMsg.quanshu}}</i></span>
          </li>
          <li>
            <span>地址：<i>{{rentMsg.village}}</i></span>
          </li>
          <li>
            <span>小区：<i style="color: #c30d23">{{rentMsg.village}}</i></span>
          </li>
        </ul>
      </div>
      <div class="msgBtn">
        <div @click=""><i class="iconfont icon-xiangqu"></i>关注</div>
        <div @click="" style="color: #fff; font-weight: bold; background-color: #c30d23">咨询经纪人</div>
      </div>
    </div>
</template>

<script>
  import {Swipe, SwipeItem} from 'mint-ui'
  export default {
    data () {
      return {
        listId: this.$route.query.listId,
        rentMsg: null,
        msgPic: []
      }
    },
    components: {
      SwipeItem,
      Swipe
    },
    created () {
      console.log(this.listId)
      this.getRentMsg()
    },
    methods: {
      getRentMsg () {
        var self = this
        this.$api.RtalDetail({id: this.listId}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.rentMsg = res.data.data.fangyuanxinxi[0]
            self.msgPic = self.rentMsg.pic
            console.log(self.msgPic)
          }
        })
      },
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  @import '../../../style/zuhome.css';
  .rentMsg.rent{
    width: 100%;
    overflow: hidden;
    background-color: #efefef;
    padding-bottom: .59rem;
  }
  .rentMsg.rent .msgSwiper{
    position: relative;
    height: 2.81rem;
  }
  #picN{
    position: absolute;
    right: .15rem;
    bottom: .15rem;
    color: #fff;
    font-size: .16rem;
    line-height: .16rem;
  }
  .rentMsg.rent .msgMain{
    padding-top: .2rem;
    margin-bottom: .1rem;
    background-color: #fff;
  }
  .rentMsg.rent .msgMain h3{
    font-size: .17rem;
    height: .2rem;
    line-height: .2rem;
  }
  .rentMsg.rent .msgMain ul{
    margin-top: .1rem;
    border-top: 1px solid #eeeeee;
    width: 100%;
    padding: .15rem .415rem;
    box-sizing: border-box;
    display: flex;
  }
  .rentMsg.rent .msgMain ul li{
    flex: 1;
    font-weight: bold;
  }
  .rentMsg.rent .msgMain ul li p{
    font-size: .15rem;
    margin-bottom: .1rem;
    color: #c30d23;
  }
  .rentMsg.rent .msgMain ul li span{
    font-size: .13rem;
    color: #999;
  }
  .rentMsg.rent .msg{
    margin-bottom: .1rem;
    background-color: #fff;
  }
  .rentMsg.rent .msg ul{
    width: 100%;
  }
  .rentMsg.rent .msg ul li{
    padding: 0 .15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .15rem;
    border-bottom: 1px solid #eeeeee;
  }
  .rentMsg.rent .msg ul li span{
    line-height: .44rem;
    color: #999;
  }
  .rentMsg.rent .msg ul li span.right-item{
    width: 1.2rem;
    text-align: left;
  }
  .rentMsg.rent .msgBtn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    height: .5rem;
    display: flex;
  }
  .rentMsg.rent .msgBtn div{
    flex: 1;
    line-height: .5rem;
    font-size: .15rem;
    color: #333;
  }
  .rentMsg.rent .msgBtn div i{
    padding-right: .1rem;
  }
</style>
