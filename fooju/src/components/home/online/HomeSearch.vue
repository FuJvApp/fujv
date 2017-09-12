<template>
  <div class="main">
    <header><a href="" @click.prevent="$router.go(-1)"><</a><span class="one">帮我找房</span></header>
    <div class="mn-a">
      <ul>
        <li class="wrt"><img v-if="status==0 && show==false"  @click="appear(status)" src="../../../assets/imgwqn/first/mai1.png" alt="">
          <img v-else="status==1 && show==true" @click="appear(status)" src="../../../assets/imgwqn/first/mai2.png" alt=""><div>我要买房</div>
        </li>
        <li class="wrt"><img v-if="bstatus==0 && show1==false" @click="appearsa(btatus)" src="../../../assets/imgwqn/first/zu1.png" alt="">
          <img v-else="bstatus==1 && show1==true" @click="appearsa(btatus)" src="../../../assets/imgwqn/first/zu2.png" alt=""><div>我要租房</div></li>
      </ul>
      <transition name="fade">
        <div class="mn-b" v-if="show">
          <ul><li>
            <mt-field label="称呼：" placeholder="如何称呼-先生/女士" v-model="username"></mt-field>
            <mt-field label="联系方式：" placeholder="您的联系方式" type="tel" v-model="phone"></mt-field>
          </li></ul>
        </div>
      </transition>
      <transition name="fade1">
        <div class="mn-b" v-if="show1">
          <ul><li>
            <mt-field label="称呼：" placeholder="如何称呼-先生/女士" v-model="username"></mt-field>
            <mt-field label="联系方式：" placeholder="您的联系方式" type="tel" v-model="phone"></mt-field>
          </li></ul>
        </div>
      </transition>
    </div>

  </div>
</template>
<script>
  // import {maihouse} from '../../../api/config.js'
  export default{
    data () {
      return {
        status: 0,
        bstatus: 0,
        phone: '',
        username: '',
        show: 0,
        show1: 0
      }
    },
    methods: {
      appear (status) {
        var self = this
        self.bstatus = 0
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
          self.bstatus = !self.bstatus
        } else {
          self.bstatus = !self.bstatus
        }
      } // 完结
    }
  }
</script>
<style scoped>
  header{
    line-height: 50px;
    border-bottom: 1px solid grey;
  }
  header a{
    font-size: 30px;
    color: grey;
    font-weight: 500;
    float:left;
    padding-left: 20px;
  }
  .mn-a,.mn-b{
    width: 100%;
    background-color: rgb(239,239,239);
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }
  .mn-b{
    transition: all 0s;
    position: absolute;
    top: 220px;
    left: 0;
    padding-top: 10px;
  }
  .fade-enter-to,.fade-leave{
    transform: translateY(0);
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0;
    transform: translateY(50px);
  }
  .fade1-enter-to,.fade1-leave{
    transform: translateY(0);
  }
  .fade1-enter, .fade1-leave-to  {
    opacity: 0;
    transform: translateY(50px);
  }
  .mn-a ul,.mn-b ul{
    width: 100%;
    max-height: 190px;
    height: 100%;
    min-height: 170px;
    max-width: 800px;
    background-color: white;
    display: flex;
    justify-content:space-around;
    align-items: center;
  }
  .mn-b ul li{
    width: 100%;
  }
  .mint-cell-value input.mint-field-core{
    text-align: right;
    color: black;
  }
  .mn-a ul li img{
    width: 80px;
    height: 80px;
  }
  .wrt div:nth-of-type(1){
    color:grey;
  }
  .wrt:hover div:nth-of-type(1){
    color:black;
  }
  .wrt img{
    display: block;
    margin-bottom: 10px;
  }
  .mn-b ul li a:nth-of-type(1){
    border-bottom: 1px solid rgb(239,239,239);
    margin: auto 10px;
  }
</style>

