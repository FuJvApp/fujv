<template>
  <div class="main">
    <header><a href="#/"><</a><span class="one">在线委托</span></header>
    <div class="middle">
      <div class="m-one"><img src="../../../assets/imgwqn/tu1.png" alt="">
        <div class="m-two">您身边的专业房产经纪人!</div>
        <div class="m-three">
          <a href=""><img src="../../../assets/imgwqn/zhaof.png" alt=""><div>帮我找房</div></a>
          <a href=""><img src="../../../assets/imgwqn/yezhu.png" alt=""><div>我是业主</div></a>
        </div>
      </div></div>
  </div>
</template>

<script>
  export default{
  }
</script>

<style scoped>
  .main{
    width: 100%;
    height: 100%;
  }
  header{
    margin: 0;
    width: 100%;
    line-height: 50px;
    border-bottom: 1px solid grey;
  }
  a{
    font-size: 30px;
    color: grey;
    font-weight: 500;
    float:left;
    padding-left: 20px;
  }
  .one{
    font-size: 20px;
    color: black;
  }
  .m-two{
    width:100%;
    line-height:200px;
    color:black ;
    font-size: 20px;
  }
  .m-three{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .m-three a img{
    width:90px ;
  }
  .m-three a div{
    font-size: 20px;
  }
</style>
