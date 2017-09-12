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
    <div class="bottom"><input type="button" value="马上提交"></div>
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
<style lang="less" scoped>
  @import "onlineStyle";
</style>

