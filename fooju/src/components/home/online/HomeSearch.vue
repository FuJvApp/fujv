<template>
  <div class="main">
    <header><a href="" @click.prevent="$router.go(-1)"><</a><span class="one">帮我找房</span></header>
    <div class="middle">
      <div class="mn-a">
        <ul>
          <li><img v-if="status==0" @click="appear(0)" src="../../../assets/imgwqn/first/mai1.png" alt="">
            <img v-else="status==1" @click="appear(1)" src="../../../assets/imgwqn/first/mai2.png" alt=""><div class="">我要买房</div></li>
          <li><img v-if="bstatus==0" @click="appearsa(0)" src="../../../assets/imgwqn/first/zu1.png" alt="">
            <img v-else="bstatus==1" @click="appearsa(1)" src="../../../assets/imgwqn/first/zu2.png" alt=""><div>我要租房</div></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
    export default{
      data () {
        return {
          status: 0,
          bstatus: 0
        }
      },
      methods: {
        appear (status) {
          var self = this
          self.bstatus = 0
          if (status === 0) {
            self.status = !self.status
          } else {
            self.status = !self.status
          }
        },
        appearsa (status) {
          var self = this
          self.status = 0
          if (status === 0) {
            self.bstatus = !self.bstatus
          } else {
            self.bstatus = !self.bstatus
          }
        }
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
  .mn-a{
    width: 100%;
    background-color: rgb(239,239,239);
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }
  .mn-a ul{
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
  .mn-a ul li img{
     width: 80px;
    height: 80px;
  }
</style>

