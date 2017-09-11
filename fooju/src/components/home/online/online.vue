<template>
  <div class="main">
    <header><a href="#/"><</a><span style="font-size: 20px">在线委托</span></header>
    <div class="middle">
      <div class="m-one">
        <div class="mone-a"><img  src="../../../assets/imgwqn/tu1.png" alt=""></div>
        <div class="m-two">您身边的专业房产经纪人!</div>
        <div class="m-three">
          <router-link to="/HomeSearch"><img src="../../../assets/imgwqn/zhaof.png" alt=""><div>帮我找房</div></router-link>
          <router-link to="/"><img src="../../../assets/imgwqn/yezhu.png" alt=""><div>我是业主</div></router-link>
        </div>
      </div></div>
  </div>
</template>

<script>
  export default{
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
    padding-left: 10px;
  }
  .m-two{
    font-size: 20px;
    line-height:100px;
  }
  .mone-a img{
    width: 100%;
  }
  .m-three{
    display: flex;
    justify-content: space-around;
  }
  .m-three img{
    width: 80px;
    height: 90px;
  }
</style>
