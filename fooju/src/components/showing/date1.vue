<template>
    <div class="main">
      <div class="one"><img src="../../assets/imgwqn/lookhome/liwu.png" alt="">
      <div>你还没有看房安排，快去预约吧</div></div>
      <input type="button" value="去预约" class="two" @click="liebiao">
      <div class="three"><img src="../../assets/imgwqn/lookhome/renwu.png" alt=""><div>没有相关经验可以去练习经纪人</div></div>
    </div>
</template>
<script>
    export default{
      data () {
        return {
        }
      },
      methods: {
        liebiao () {
          this.$router.push('/liebiaolist')
        }
      }
    }
</script>
<style scoped>
.main{
  background-color:rgb(239,239,239) ;
}
 .one{
   padding-top: 1.1rem;
 }
  .one div{
    margin: .2rem auto;
  }
  .two{
    font-size: .16rem;
    width: 40%;
    border: 1px solid red;
    text-align: center;
    line-height: .35rem;
    border-radius: .05rem;
    outline: none;
    background-color:rgb(239,239,239) ;
  }
  .three img{
    margin: .2rem auto;
  }
</style>

