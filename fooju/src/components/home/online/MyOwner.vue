<template>
  <div class="main">
    <header><a href="" @click.prevent="$router.go(-1)"><</a><span class="one">我是业主</span></header>
    <div class="mn-a">
      <ul>
        <li class="wrt"><img v-if="status==0 && show==false"  @click="appear(status)" src="../../../assets/imgwqn/tool/mai1.png" alt="">
          <img v-else="status==1 && show==true" @click="appear(status)" src="../../../assets/imgwqn/tool/mai2.png" alt=""><div>我要卖房</div>
        </li>
        <li class="wrt"><img v-if="status1==0 && show1==false" @click="appearsa(status1)" src="../../../assets/imgwqn/tool/chuzu1.png" alt="">
          <img v-else="status1==1 && show1==true" @click="appearsa(status1)" src="../../../assets/imgwqn/tool/chuzu2.png" alt=""><div>我要出租</div></li>
      </ul>
      <transition name="fade">
        <div class="mn-b" v-if="show">
          <ul class="one">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
          <ul class="two">
            <li>5</li>
            <li>6</li>
            <li>7</li>
          </ul>
        </div>
      </transition>
      <transition name="fade1">
        <div class="mn-b" v-if="show1">
          <ul class="one">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <ul class="two">
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="bottom"><input type="button" value="马上提交"></div>
  </div>
</template>
<script>
  // import {maihouse} from '../../../api/config.js'
  export default{
    data () {
      return {
        status: 0,
        status1: 0,
        phone: '',
        username: '',
        show: 0,
        show1: 0
      }
    },
    methods: {
      appear (status) {
        var self = this
        self.status1 = 0
        self.show = !status
        self.show1 = 0
        if (status === 0) {
          self.status = !self.status
        } else {
          self.status = !self.status
        }
        self.username = ''
        self.phone = ''
      },
      appearsa (Status) {
        var self = this
        self.status = 0
        self.show = 0
        self.show1 = !Status
        if (Status === 0) {
          self.status1 = !self.status1
        } else {
          self.status1 = !self.status1
        }
      } // 完结
    }
  }
</script>
<style lang="less" scoped>
  @import "style/onlineStyle";
  .mn-b{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mn-b .one,.mn-b .two{
    display: block;
    width: 100%;
    max-width: 800px;
    background-color: white;
             }
  .mn-b .one li,.mn-b .two li{
    width: 100%;
    max-width: 780px;// 必须把最小宽度修改，才可以内边距起作用
    line-height: 50px;
    border-bottom: 1px solid rgb(239,239,239);
    margin: auto 10px;
  }
  .mn-b .two{
    margin-top:10px ;
  }

  /*.mn-b .two{
    margin-top:10px ;
    display: block;
    width: 100%;
    min-height: 100px;
    height: 100%;
    max-width: 800px;
    background-color: white;
  }
.mn-b .two li div{
  border-bottom: 1px solid rgb(239,239,239);
  width: 100%;
  display: block;
  line-height: 50px;
  margin: auto 10px;
}*/
</style>




