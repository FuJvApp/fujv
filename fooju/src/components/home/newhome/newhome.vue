<template>
    <div class="box">
      <header>
        <router-link to="/home">
          <i class="el-icon-arrow-left"></i>
        </router-link>
        <router-link to="/sousuo">
          <img src="../../../assets/imgwqn/lookhome/sousuo.png" alt="">
        </router-link>
        <router-link to="">
          <i class="iconfont icon-dizhi"></i>
        </router-link>
      </header>
      <main>
        <div class="block">
          <el-carousel height="429px">
            <el-carousel-item v-for="item in 2" :key="item"></el-carousel-item>
          </el-carousel>
        </div>
        <div>
          <ul class="tap">
            <li @click="">区域 <i class="iconfont icon-jiantouxia"></i></li>
            <li>价格 <i class="iconfont icon-jiantouxia"></i></li>
            <li>房型 <i class="iconfont icon-jiantouxia"></i></li>
            <li>类型 <i class="iconfont icon-jiantouxia"></i></li>
          </ul>
            <ul class="content">
              <li v-for="data in tableData">
                <a class="one" href="" ><img :src="'http://www.fooju.cn/'+data.pic" alt=""></a>
                <a class="two" href="">
                  <p>{{data.title}}</p>
                  <p>{{data.address}}</p>
                  <p><b style="color: #c30d23">均价{{data.average_price}}元/㎡</b></p>
                </a>
              </li>
            </ul>
        </div>
        <div class="fixed">
          <i class="iconfont icon-rank"></i>
          排序
        </div>
      </main>
    </div>
</template>

<script>
  import {newlist} from '../../../api/config'
  import {popup, navbar, tabitem, loadmore} from 'mint-ui'
  export default{
    data () {
      return {
        allloaded: false,
        selected: '1',
        tableData: []
      }
    },
    components: {
      popup,
      navbar,
      tabitem,
      loadmore
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        var self = this
        newlist({page_num: 1, page_size: 5}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.tableData = res.data.data
          }
        })
      },
      loadbottom () {
        // this.allloaded = true
        this.$refs.loadmore.onBottomLoaded()
      }
    }
  }
</script>

<style lang="less">
  .box{
    header{
      height: 48px;
      line-height: 48px;
      width: 100%;
      display: flex;
      justify-content: space-around;
      img{
        vertical-align: middle;
      }
    }
    .el-carousel__item:nth-child(2n) {
      background: url("../../../assets/lunbotu.png") no-repeat center;
      background-size: cover;
    }
    .el-carousel__item:nth-child(2n+1) {
      background: url("../../../assets/lunbotu.png") no-repeat center;
      background-size: cover;
    }
    .tap {
        height: 50px;
        line-height: 50px;
        background: white;
        display: flex;
        justify-content: space-around;
    }
     .content{
       li{
         width: 100%;
         padding: 5px 0;
         background: white;
         display: flex;
         border-top: 1px solid #cccccc;
         border-bottom: 1px solid #cccccc;
       }
      .one img{
        width:132px;
        height:100px;
        margin:0 10px;
      }
       .two p{
         text-align: left;
         margin: 8px 0;
       }
       .two p:nth-child(2){
         font-size: 12px;
         color: #cccccc;
       }
    }
    .fixed{
      position: fixed;
      color: white;
      right: 20px;
      bottom: 30%;
      padding: 8px;
      background: #4d4d4d;
      border-radius: 20px;
      i{
        color: white;
      }
    }
  }
</style>
