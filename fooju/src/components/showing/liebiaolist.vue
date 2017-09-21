<template>
  <div class="nav">
  <header>
    <a href="" @click.prevent="$router.go(-1)"><</a>
    <img src="../../assets/imgwqn/lookhome/sousuo.png" @click.prevent="sousuoone" alt="">
    <img src="../../assets/imgwqn/lookhome/ditu.png" alt="">
  </header>
    <main>
    <div class="block">
      <el-carousel height="261px">
        <el-carousel-item v-for="item in 2" :key="item">
         <!-- <h3>{{ item }}</h3>-->
        </el-carousel-item>
      </el-carousel>
    </div>
      <ul class="biu">
        <li>区域<i class="iconfont icon-arrow-bottom"></i></li>
        <li>价格<i class="iconfont icon-arrow-bottom"></i></li>
        <li>房型<i class="iconfont icon-arrow-bottom"></i></li>
        <li>更多<i class="iconfont icon-arrow-bottom"></i></li>
      </ul>
      <ul class="lie-list">
        <li v-for="data in tableData">
          <a class="one" href=""><img src="../../assets/lunbotu.png" alt=""></a>
          <a class="two" href="">
          <p>{{data.title}}</p>
          <p>{{data.bedroom}}室{{data.livingroom}}厅{{data.wc}}卫/{{data.built_area}}㎡/{{data.direction}}</p>
          <p>{{data.total_price}}万 <span>{{data.unit_price}}元/㎡</span></p>
          </a>
        </li>
      </ul>
    </main>
  </div>
</template>
<script >
  import { usedLists } from '../../api/config.js'
  export default{
    data () {
      return {
        activeIndex: '1',
        tableData: [],
        selected: '1'
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        var self = this
        usedLists({page_num: 1, page_size: 10}).then(function (res) {
          // console.log(res)
          if (res.data && res.data.code === 200) {
            self.tableData = res.data.data
            console.log(self.tableData)
          }
        })
      },
      sousuoone () {
        this.$router.push('/searchOne')
      }
    }
  }
</script>
<style scoped>
  @import "lbstyle.less";
  .biu{
    margin: 0;
    background-color: white;
    line-height: 50px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid lightgrey;
  }
.iconfont{
  color: lightgrey;
  font-size: 20px;
  margin-left: 5px;
}
  .lie-list{
    width: 100%;
  }
  .lie-list li{
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 0;
  }
  .lie-list li .one img{
    width: 80px;
    height: 80px;
    vertical-align: middle;
  }
  /*.lie-list li .one{
    width: 100px;
    height: 100px;
    margin: 0 ;
    float: left;
  }

  .lie-list li .two{
    height: 100px;
    display: inline-block;
    margin: auto 10px;
  }*/
</style>

