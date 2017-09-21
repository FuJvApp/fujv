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
      <ul>
        <li stripe :data="tableData">
          <!--img src="" alt="">
          <p>{{data.title}}</p>
          <p>{{data.bedroom}}室{{data.livinggroom}}厅{{data.wc}}卫/{{data.use_area}}</p>
          <p></p>-->
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
        tableData: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
//        var self = this
        usedLists({page_num: 1, page_size: 5}).then(function (res) {
          console.log(res)
//          if (res.data && res.data.code === 1) {
//            self.tableData = res.data.data
//            console.log(res.data)
//          }
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
    background-color: white;
    line-height: 50px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid lightgrey;
  }
.iconfont{
  color: lightgrey;
  font-size: 20px;
  margin-left: 5px;
}
</style>

