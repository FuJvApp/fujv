<template>
  <div class="main">
    <header><a href="" @click.prevent="$router.go(-1)"><</a><span class="one">帮我找房</span></header>
    <div class="middle">
      <div>
        <ul>
          <li><img src="../../../assets/imgwqn/first/mai1.png" alt="">
            <img src="../../../assets/imgwqn/first/mai2.png" alt=""><div>我要买房</div></li>
          <li><img src="../../../assets/imgwqn/first/zu1.png" alt="">
            <img src="../../../assets/imgwqn/first/zu2.png" alt=""><div>我要租房</div></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
    export default{}
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
</style>

