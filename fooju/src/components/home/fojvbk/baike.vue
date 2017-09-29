<template>
    <div>
      <section class="bknav">
        <router-link to="/">
          <p class="headericon el-icon-arrow-left"><span>二手房</span></p>
        </router-link>
        <input type="text" placeholder="请输入小区或商圈名">
        <span class="searchicon"></span>
      </section>
      <section class="lunbo">
        <mt-swipe class="activeswipe">
          <mt-swipe-item class="activeitem"><img src="../../../assets/home-icon/twolunbo.png" alt=""></mt-swipe-item>
          <mt-swipe-item class="activeitem"><img src="../../../assets/home-icon/twolunbo.png" alt=""></mt-swipe-item>
        </mt-swipe>
      </section>
      <section class="main-nav">
        <ul>
          <li><a href="#/bktwo"><img src="../../../assets/home-icon/ershou.png" alt=""><span>二手房</span></a></li>
          <li><a href="#/bknew"><img src="../../../assets/home-icon/xinfang.png" alt=""><span>新房</span></a></li>
          <li><a href="#/bkshow"><img src="../../../assets/home-icon/goufang.png" alt=""><span style="left: 1rem">购房宝典</span></a></li>
          <li><a href="#/bkzu"><img src="../../../assets/home-icon/zufangbk.png" alt=""><span>租房</span></a></li>
          <li><a href="#/bkhuan"><img src="../../../assets/home-icon/huanfang.png" alt=""><span>换房</span></a></li>
        </ul>
      </section>
      <section class="main-content">
        <router-view></router-view>
      </section>
    </div>
</template>

<script>
  export default{}
</script>

<style lang="less" scope>
  @import "baike.less";
</style>
