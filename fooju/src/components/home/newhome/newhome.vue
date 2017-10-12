<template>
    <div class="box">
      <header>
        <router-link to="home">
          <i class="el-icon-arrow-left"></i>
        </router-link>
        <router-link to="/sousuo">
          <div class="search">
          <i class="iconfont icon-search"></i>
          <input type="search" placeholder="请输入小区或商圈名">
          </div>
        </router-link>
        <router-link to="/ditu">
          <i class="iconfont icon-dizhi"></i>
        </router-link>
      </header>
      <main>
        <div class="block">
          <!--<el-carousel height="429px">-->
            <!--<el-carousel-item v-for="item in 2" :key="item"></el-carousel-item>-->
          <!--</el-carousel>-->
          <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in 2" :key='item'></mt-swipe-item>
          </mt-swipe>
        </div>
        <div>
          <ul class="tap" v-show="tapvisible">
            <li @click="tapclick">{{tapdata}}<i class="iconfont icon-jiantouxia"></i></li>
            <li @click="tapclick">价格 <i class="iconfont icon-jiantouxia"></i></li>
            <li @click="tapclick">房型 <i class="iconfont icon-jiantouxia"></i></li>
            <li @click="tapclick">类型 <i class="iconfont icon-jiantouxia"></i></li>
          </ul>
            <ul class="content" v-infinite-scroll="loadmore" infinite-scroll-disabled="loading">
              <li v-for="data in tableData">
                <a class="one" href="" ><img :src="'http://www.fooju.cn/'+data.pic" alt=""></a>
                <a class="two" href="">
                  <p>{{data.title}}</p>
                  <p>{{data.address}}</p>
                  <p><b style="color: #c30d23">均价{{data.average_price}}元/㎡</b></p>
                </a>
              </li>
              <div class="load" v-if="loadvisible">
                <mt-spinner type="fading-circle" color="#26a2ff"></mt-spinner>
                 正在加载中...
              </div>
              <div class="load2" v-if="load2visible">
                加载完毕
              </div>
            </ul>
        </div>
        <div class="fixed" @click="action">
          <i class="iconfont icon-rank"></i>
          排序
        </div>
        <mt-popup class="tappopup" v-model="popupvisible" position="top" popup-transition="popup-fade">
          <el-menu class="menu" unique-opened menu-trigger="click" @select="menuselect" @open="open1" :default-active="index1">
            <el-submenu index="1" >
              <template slot="title">{{tapdata}}</template>
              <el-menu-item  @click="m1">不限</el-menu-item>
              <el-menu-item  v-for="(item,n) in tableData2" :key="1-n" @click="m(item)">{{item.area}}</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">{{pricedata.name}}</template>
              <el-menu-item  @click="m2">不限</el-menu-item>
              <el-menu-item  v-for="(item,n) in pricedata.child" :key="2-n" @click="mm(item)"> {{item}} </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">房型</template>
              <el-menu-item @click='m3' index="3-1">不限</el-menu-item>
              <el-menu-item :index="3-n" v-for="(item,n) in tableData3" :key="3-n"><el-checkbox v-model="allvalue2" :label="item.value">{{item.value}}</el-checkbox></el-menu-item>
              <div @click='allselect2' style="padding: 10px; background: #601986; color: white">确认</div>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">类型</template>
              <el-menu-item @click='m4' index="4">不限</el-menu-item>
              <el-menu-item :index="4-n" v-for="(item,n) in tableData4" :key="4-n"><el-checkbox-group v-model="allvalue"><el-checkbox :label="item.value">{{item.value}}</el-checkbox></el-checkbox-group></el-menu-item>
              <div @click='allselect' style="padding: 10px; background: #601986; color: white">确认</div>
            </el-submenu>
          </el-menu>
        </mt-popup>
        <mt-actionsheet :actions="actions" v-model="sheetvisible" cancelText=""></mt-actionsheet>
      </main>
    </div>
</template>

<script>
  import {regionlist, basicsdrop, twolist} from '../../../api/config'
  import {swipe, swipeitem, popup, navbar, tabitem, loadmore, spinner, actionsheet, checklist} from 'mint-ui'
  export default{
    data () {
      return {
        tapvisible: true,
        loading: false,
        sheetvisible: false,
        loadvisible: true,
        load2visible: false,
        popupvisible: false,
        actions: [{name: '默认排布', method: this.f1}, {name: '最新发布', method: this.f2}, {name: '均价从低到高', method: this.f3}, {name: '均价从高到低', method: this.f4}],
        tapdata: '区域',
        allvalue: [],
        allvalue2: [],
        pricedata: {
          name: '价格',
          child: ['1-4000', '4000-6000', '6000-7000', '7000-8000', '8000-10000', '10000以上']
        },
        index1: '2',
        order: 0,
        r_id: null,
        average_price: '',
        building_type: '',
        houde_property: '',
        page_size: 5,
        list: [],
        village: '',
        tableData: [],
        tableData2: [],
        tableData3: [],
        tableData4: []
      }
    },
    components: {
      swipe,
      swipeitem,
      popup,
      navbar,
      tabitem,
      loadmore,
      spinner,
      actionsheet,
      checklist
    },
    mounted () {
      this.getData()
      this.getData2()
      this.getData3()
      window.addEventListener('scroll', this.scroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.scroll)
    },
    watch: {
    },
    methods: {
      getData () {
        var self = this
        console.log(this.building_type)
        this.village = this.$route.query.village
        // this.village = sessionStorage.getItem('sousuo')
        twolist({page_num: 1, page_size: this.page_size, order: this.order, r_id: this.r_id, average_price: this.average_price, house_property: this.house_property, building_type: this.building_type, village: this.village}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.tableData = res.data.data
//            res.data.data.map(function (item) {
//              self.list.push(item)
//              console.log(self.list)
//            })
          }
        })
      },
      getData2 () {
        var self = this
        regionlist().then(function (res) {
          if (res.data && res.data.code === 200) {
            self.tableData2 = res.data.data
          }
        })
      },
      getData3 () {
        var self = this
        basicsdrop({type: 'new'}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.tableData3 = res.data.data[1].data
            self.tableData4 = res.data.data[0].data
          }
        })
      },
      scroll () {
        var nav = document.querySelector('.tap')
        var ot = nav.offsetTop
        console.log(ot)
        var t = document.body.scrollTop || document.documentElement.scrollTop
        if (t >= ot) {
          nav.classList.add('navfixed')
        } else {
          nav.classList = ('tap')
        }
      },
      tapclick () {
        // this.tapvisible = false
        this.popupvisible = true
        console.log(this.tableData2)
        console.log(this.$el.querySelector('.fixed').innerHTML)
//        for (var item in this.tableData2) {
//          console.log(item.area)
//        }
      },
      menuselect () {
       // this.popupvisible = false
      },
      allselect () {
        this.building_type = String(this.allvalue)
        this.popupvisible = false
        this.getData()
      },
      allselect2 () {
        this.house_property = this.allvalue2.join(',')
        this.popupvisible = false
        this.getData()
      },
      loadmore () {
        var self = this
        this.loading = true
        var a = setTimeout(() => {
          self.page_size += 5
          self.getData()
          self.loading = false
        }, 1000)
        console.log(self.page_size)
        if (self.page_size >= 76) {
          clearTimeout(a)
          this.loadvisible = false
          this.load2visible = true
        }
      },
      action () {
        this.sheetvisible = true
      },
      f1 () {
        this.order = 0
        this.getData()
      },
      f2 () {
        this.order = 1
        this.getData()
      },
      f3 () {
        this.order = 2
        this.getData()
      },
      f4 () {
        this.order = 3
        this.getData()
      },
      m1 () {
        this.r_id = null
        this.getData()
        this.popupvisible = false
        this.tapdata = '区域'
      },
      m (e) {
        this.r_id = e.id
        this.getData()
        this.popupvisible = false
        this.tapdata = e.area
      },
      open1 () {
//        var tap1 = document.querySelector('.tap')
//        tap1.classList.remove('active')
        console.log(this.index1)
      },
//      close1 () {
//        var tap1 = document.querySelector('.tap')
//        tap1.classList.remove('active')
//      },
      m2 () {
        this.r_id = null
        this.average_price = null
        this.getData()
        this.popupvisible = false
      },
      mm (e) {
        this.average_price = e
        this.getData()
        this.popupvisible = false
      },
      m3 () {
        this.house_property = ''
        this.getData()
        this.popupvisible = false
      },
      m4 () {
        this.building_type = ''
        this.getData()
        this.popupvisible = false
      }
    }
  }
</script>

<style lang="less">
  .box {
    /*width: 90%;*/
    /*margin: 0 auto;*/
    header {
      height: 48px;
      line-height: 48px;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      display: flex;
      justify-content: space-around;
      background: #efefef;
      img {
        vertical-align: middle;
      }
    }
    .search{
      background: white;
      height: 30px;
      line-height: 30px;
      border-radius: 10px;
      margin-top: 10px;
      i{
        font-size:12px;
        margin:0 10px;
        vertical-align: middle;
      }
      input{
        border: none;
        outline: none;
        width: 200px;
        height: 20px;
        background: transparent;
      }
    }
    .block {
      margin-top: 48px;
      height: 240px;
      /*.el-carousel__item:nth-child(2n) {*/
        /*background: url("../../../assets/lunbotu.png") no-repeat center;*/
        /*background-size: cover;*/
      /*}*/
      /*.el-carousel__item:nth-child(2n+1) {*/
        /*background: url("../../../assets/lunbotu.png") no-repeat center;*/
        /*background-size: cover;*/
      /*}*/
      .mint-swipe-item:nth-child(2n+1){
        background: url("../../../assets/lunbotu.png") no-repeat center;
        background-size: cover;
      }
      .mint-swipe-item:nth-child(2n){
        background: url("../../../assets/lunbotu.png") no-repeat center;
        background-size: cover;
      }
    }
    .tap{
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-around;
    }
    .tap.active{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2001;
    }
    .content {
      li {
        width: 100%;
        padding: 5px 0;
        background: white;
        display: flex;
        border-top: 1px solid #cccccc;
        border-bottom: 1px solid #cccccc;
      }
      .one img {
        width: 132px;
        height: 100px;
        margin: 0 10px;
      }
      .two p {
        text-align: left;
        margin: 8px 0;
      }
      .two p:nth-child(2) {
        font-size: 12px;
        color: #cccccc;
      }
      .load {
        display: flex;
        justify-content: center;
        line-height: 28px;
        color: #26a2ff;
      }
      .load2 {
        line-height: 28px;
        color: #26a2ff;
      }
    }
    .fixed {
      position: fixed;
      color: white;
      right: 20px;
      bottom: 30%;
      padding: 8px;
      background: #4d4d4d;
      border-radius: 20px;
      i {
        color: white;
      }
    }
    .navfixed {
      position: fixed;
      top: 48px;
      z-index: 10;
      left: 0;
      width: 100%;
    }
    .tappopup{
      width: 100%;
      .el-submenu {
        width: 25%;
        position: static;
        .el-submenu__title{
          border-bottom: hidden;
        }
        .el-icon-arrow-down{
          right: auto;
        }
      }
      .el-menu{
        width: 100%;
        top:auto;
        padding: 0;
      }
      .menu{
        display: flex;
        position: relative;
        .el-menu{
          position: absolute;
          left: 0;
          width: 100%;
        }
      }
      .el-menu-item{
        border-top:0.5px solid #cccccc;
        border-bottom:0.5px solid #cccccc;
        text-align: left;
        color: inherit;
        display: flex;
        justify-content: space-between;
        .el-checkbox-group{
          width: 100%;
        }
        label{
          width: 100%;
          position: relative;
          display: flex;
          justify-content: space-between;
          .el-checkbox__input {
            position: absolute;
            top:50%;
            left: 90%;
            transform: translate(-50%,-50%);
            width: 20px;
            height: 20px;
            .el-checkbox__inner{
              border-radius: 10px;
            }
            /*border-radius: 50%;*/
            /*background-color: #26a2ff;*/
            /*border-color: #26a2ff;*/
          }
        }
      }
    }
  }
</style>
