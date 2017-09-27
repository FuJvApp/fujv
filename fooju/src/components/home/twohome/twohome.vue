<template>
  <div v-model="popupVisible">
    <section class="headertop">
      <router-link to="/">
        <span class="headericon el-icon-arrow-left"></span>
      </router-link>
      <router-link to="/sousuo">
        <input type="text" placeholder="请输入小区或商圈名">
      </router-link>
      <span class="searchicon"></span>
      <span class="dizhi"></span>
    </section>
    <section class="lunbo">
      <mt-swipe class="activeswipe">
        <mt-swipe-item class="activeitem"><img src="../../../assets/home-icon/twolunbo.png" alt=""></mt-swipe-item>
        <mt-swipe-item class="activeitem"><img src="../../../assets/home-icon/twolunbo.png" alt=""></mt-swipe-item>
      </mt-swipe>
    </section>
    <ul class="tab">
      <li @click="handleClick1">区域 <i class="iconfont icon-jiantouxia"></i></li>
      <li @click="handleClick2">价格 <i class="iconfont icon-jiantouxia"></i></li>
      <li @click="handleClick3">房型 <i class="iconfont icon-jiantouxia"></i></li>
      <li @click="handleClick4">类型 <i class="iconfont icon-jiantouxia"></i></li>
    </ul>
    <el-dialog v-model="popupVisible">
      <tabs></tabs>
    </el-dialog>
      <ul
          class="content"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
        <li v-for="data in tableData">
          <a class="pic" href="" ><img :src="'http://www.fooju.cn/'+data.pic" alt=""></a>
          <a class="info" href="">
            <p>{{data.title}}</p>
            <p>{{data.bedroom}}室{{data.livingroom}}厅{{data.wc}}卫/{{data.built_area}}m²/{{data.direction}}</p>
            <p><span>{{data.total_price}}万 </span> {{data.unit_price}}元/㎡</p>
          </a>
        </li>
        <mt-spinner color="deepskyblue" type="fading-circle"></mt-spinner>
      </ul>
  </div>
</template>

<script>
  import {usedLists} from '../../../api/config'
  import tabs from './tabs.vue'
  export default{
    components: {
      tabs
    },
    data () {
      return {
        popupVisible: false,
        page_num: 1,
        page_size: 5,
        tableData: [],
        loading: false
      }
    },
    created () {
      this.getData()
    },
    mounted () {
    },
    methods: {
      handleClick1: function () {
        this.popupVisible = true
      },
      handleClick2: function () {
        this.popupVisible = true
      },
      handleClick3: function () {
        this.popupVisible = true
      },
      handleClick4: function () {
        this.popupVisible = true
      },
      getData () {
        var self = this
        usedLists({page_num: this.page_num, page_size: this.page_size}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.tableData = res.data.data
          }
        })
      },
      loadMore () {
        this.loading = true
        setTimeout(() => {
          this.getData()
          this.page_size += 5
          this.loading = false
        }, 2500)
      }
    }
  }
</script>

<style lang="less" scope>
  @import "twohome.less";
</style>
