<template>
    <div class="rent map">
      <mt-header fixed>
        <div slot="left">
          <mt-button icon="back" @click="goBack"></mt-button>
          <ul class="tabType">
            <li v-for="item in homeType">
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
        <div slot="right">
          <mt-button class="iconfont icon-search"></mt-button>
          <mt-button class="iconfont icon-shaixuan"></mt-button>
        </div>
      </mt-header>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        homeType: ['二手房', '新房', '租房']
      }
    },
    methods: {
      goBack () {
        this.$router.push('/zuhome')
      }
    }
  }
</script>

<style>
  @import '../../../style/zuhome.css';
  .rent.map header{
    background-color: #fff;
  }
  .rent.map header .iconfont{
    padding: 0 .05rem;
  }
  .rent.map header .tabType{
    flex: 1;
    display: flex;
    justify-content: center;
    height: 100%;
  }
  .rent.map header .tabType li{
    text-align: center;
    flex: 1;
    line-height: .44rem;
  }
  .rent.map header .tabType li span{
    display: inline-block;
    height: .44rem;
    box-sizing: border-box;
    /*border-bottom: 2px solid #c30d23;*/
  }
</style>
