<template>
    <div class="box">
      <div class="header">
          <div class="image">
            <a href="#mysession">
              <img src="../../assets/self/header.png" alt="">
            </a>
            <div>{{name}}</div>
          </div>
        <ul>
          <a href="#care">
          <li>
            <div>我的关注({{care}})</div>
            <div>新房、二手房</div>
          </li>
          </a>
          <a href="#agent">
          <li>
            <div>我的经纪人({{agent}})</div>
            <div>收藏的经纪人</div>
          </li>
          </a>
        </ul>
      </div>
      <div class="main">
        <ul>
          <a href="#watchrecord">
          <li>
            <span> <i class="iconfont icon-jilu"></i> 看房记录</span>
            <i class="el-icon-arrow-right "></i>
          </li>
          </a>
          <a href="#watchplan">
          <li>
            <span><i class="iconfont icon-richeng"></i> 看房日程</span>
            <i class="el-icon-arrow-right "></i>
          </li>
          </a>
          <a href="#toolcompute">
          <li>
            <span><i class="iconfont icon-jisuanqi-"></i> 房贷计算器</span>
            <i class="el-icon-arrow-right "></i>
          </li>
          </a>
          <li class="phone">
            <span><i class="iconfont icon-kefudianhua"></i> 客服电话</span>
            <div>
              <span>一键拨号</span>
              <a href="tel:400-898-1018"><span>400-898-1018</span></a>
            </div>
          </li>
          <a href="#userback">
          <li>
            <span><i class="iconfont icon-huibao"></i> 用户反馈</span>
            <i class="el-icon-arrow-right "></i>
          </li>
          </a>
        </ul>
      </div>
      <div class="logout" @click="logout" v-if="logoutvisible">
        <el-button>退出登录</el-button>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {storedetail} from '../../api/config'
  import {Toast} from 'mint-ui'
  export default{
    data () {
      return {
        id: '',
        logoutvisible: false,
        img2: '',
        name: '立即登录',
        care: null,
        agent: null
      }
    },
    mounted () {
      this.getdata()
    },
//    watch: {
//      id (newval, oldval) {
//        if (newval) {
//          this.getdata()
//        }
//      }
//    },
    methods: {
      getdata () {
        this.id = JSON.parse(sessionStorage.getItem('loginsession')).id
        console.log(this.id)
        var store = sessionStorage.getItem('store')
        console.log(store)
        if (store) {
          var self = this
          this.logoutvisible = true
          storedetail({id: this.id}).then(function (res) {
            if (res.data && res.data.code === 200) {
              self.care = res.data.data.house_guanzhu
              self.agent = res.data.data.agent_shoucang
              self.$el.querySelector('.image img').src = res.data.data.face
              self.name = res.data.data.username
            }
          })
        } else {
          this.logoutvisible = false
        }
      },
      logout () {
        this.logoutvisible = false
        this.$store.state.user = false
        sessionStorage.removeItem('loginsession')
        sessionStorage.removeItem('store')
        Toast('已退出登录')
        this.$router.push('login')
      }
    }
  }
</script>

<style lang="less">
  .box{
    background: #efefef;
  }
  .header{
    background: url("../../assets/self/download-1.png") no-repeat center;
    height: 200px;
    padding-top: 40px;
    position: relative;
    .image {
      img {
        width: 68px;
        height: 68px;
        border-radius: 50%;
      }
      div{
        color: white;
        padding-top: 5px;
        font-size: 16px;
      }
    }
    ul{
      width: 300px;
      height: 70px;
      background-color: white;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translate(-50%);
      display: flex;
      justify-content: space-between;
      li{
        padding: 15px 5px 0 60px;
        div{
          padding-bottom: 8px;
          text-align: left;
          font-size: 14px;
        }
        div:nth-child(2){
          color: #999;
        }
      }
      a:nth-child(1) li{
        background: url("../../assets/self/index.png") no-repeat 5px;
        background-size: 40px, 40px;
      }
      a:nth-child(2) li{
        background: url("../../assets/self/index2.png") no-repeat 5px;
        background-size: 40px, 40px;
      }
    }
  }
  .main{
    padding-top: 20px;
    li{
      padding: 10px;
      background: white;
      border-bottom: 1px solid #999;
      display: flex;
      justify-content: space-between;
    }
    a:nth-child(3){
      li{
        margin-bottom: 10px;
      }
    }
    .phone{
      div{
        a{
          span {
            color: red;
          }
        }
      }
    }
  }
  .logout{
    margin-top: 20px;
    button{
      width: 100%;
     span{
       color: red;
     }
    }
  }
</style>
