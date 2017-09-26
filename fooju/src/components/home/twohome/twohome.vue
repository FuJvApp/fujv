<template>
  <div>
    <section class="headertop">
      <router-link to="/">
        <span class="headericon el-icon-arrow-left"></span>
      </router-link>
      <router-link to="/sousuo">
        <input type="text" placeholder="请输入小区或商圈名">
      </router-link>
      <span class="searchicon"></span>
      <span class="dizhi"></span>
    </section>
    <section class="lunbo">
      <mt-swipe class="activeswipe">
        <mt-swipe-item class="activeitem"><img src="../../../assets/home-icon/twolunbo.png" alt=""></mt-swipe-item>
        <mt-swipe-item class="activeitem"><img src="../../../assets/home-icon/twolunbo.png" alt=""></mt-swipe-item>
      </mt-swipe>
    </section>
    <ul class="tab">
      <li @click="handleClick1">区域 <i class="iconfont icon-jiantouxia"></i></li>
      <li @click="handleClick2">价格 <i class="iconfont icon-jiantouxia"></i></li>
      <li @click="handleClick3">房型 <i class="iconfont icon-jiantouxia"></i></li>
      <li @click="handleClick4">类型 <i class="iconfont icon-jiantouxia"></i></li>
    </ul>
    <mt-popup class="popup" v-model="popupVisible" position="top">
        <tabs></tabs>
    </mt-popup>
  </div>
</template>

<script>
//  import {usedLists} from '../../../api/config'
  import tabs from './tabs.vue'
  export default{
    components: {
      tabs
    },
    data () {
      return {
        popupVisible: false
      }
    },
    methods: {
      handleClick1: function () {
        this.popupVisible = true
      },
      handleClick2: function () {
        this.popupVisible = true
      },
      handleClick3: function () {
        this.popupVisible = true
      },
      handleClick4: function () {
        this.popupVisible = true
      }
    }
  }
</script>

<style lang="less" scope>
  @import "twohome.less";
</style>
