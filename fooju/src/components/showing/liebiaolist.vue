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
        <li @click="areaone">区域<i class="iconfont icon-arrow-bottom"></i></li>
        <li>价格<i class="iconfont icon-arrow-bottom"></i></li>
        <li>房型<i class="iconfont icon-arrow-bottom"></i></li>
        <li>更多<i class="iconfont icon-arrow-bottom"></i></li>
      </ul>
      <ul class="lie-list">
        <li v-for="data in tableData">
          <a class="one" href="" ><img src="../../assets/lunbotu.png" alt=""></a>
          <a class="two" href="">
          <p>{{data.village}}</p>
          <p>{{data.bedroom}}室{{data.livingroom}}厅{{data.wc}}卫/{{data.built_area}}㎡/{{data.direction}}</p>
          <p><b style="color: #c30d23">{{data.total_price}}万&nbsp</b> <span style="color: #999;font-size: 12px">{{data.unit_price}}元/㎡</span></p>
          </a>
        </li>
      </ul>
    </main>
    <mt-popup
      v-model="popupVisible"
      position="top"
      popup-transition="popup-fade">
      <div class="page-title">Navbar</div>
      <!-- navbar -->
      <mt-navbar class="page-part" v-model="selected" fixed="true">
        <mt-tab-item id="1">区域<i class="iconfont icon-arrow-bottom1"></i></mt-tab-item>
        <mt-tab-item id='2'>选项二</mt-tab-item>
        <mt-tab-item id='3'>选项三</mt-tab-item>
      </mt-navbar>
      <!-- tabcontainer -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 10" :key="10" :title="'内容 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id='2'>
          <mt-cell v-for="n in 4" :key="4" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id='3'>
          <mt-cell v-for="n in 6" :key="6" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </mt-popup>
  </div>
</template>
<script >
  import { usedLists } from '../../api/config.js'
  import { Navbar, TabItem } from 'mint-ui'
  export default{
    data () {
      return {
        activeIndex: '1',
        tableData: [],
        selected: '1',
        popupVisible: false
      }
    },
    created () {
      this.getData()
    },
    component: {
      Navbar,
      TabItem
    },
    methods: {
      getData () {
        var self = this
        usedLists({page_num: 1, page_size: 30}).then(function (res) {
          console.log(res)
          if (res.data && res.data.code === 200) {
            self.tableData = res.data.data
            console.log(self.tableData)
          }
        })
      },
      sousuoone () {
        this.$router.push('/searchOne')
      },
      areaone () {
        this.popupVisible = true
      }
    }
  }
</script>
<style scoped>
  @import "lbstyle.less";
  .mint-popup-top{
    width: 100%;
  }
  .mint-tab-container{
    margin-top: 40px;
  }
</style>

