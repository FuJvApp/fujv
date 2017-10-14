<template>
    <div class="box1" v-loading="loadvisible">
      <header>
        <router-link to="/self">
          <i class="el-icon-arrow-left"></i>
        </router-link>
        <span>登录</span>
        <router-link to="/register">
         <span>注册</span>
        </router-link>
      </header>
      <main>
        <label for="1x">
          <input v-model="number" type="number" id="1x" placeholder="请输入手机号">
        </label>
        <label for="2x">
          <input v-model="psd" type='password' id="2x" placeholder="请输入密码">
        </label>
      </main>
      <div class="forget">
        <a href="#password">
          <div>忘记密码</div>
        </a>
      </div>
      <div class="button">
        <el-button type="danger" @click='enter'>登录</el-button>
      </div>
      <div class="footer">
        <div>第三方登录</div>
        <div class="image">
          <a href="https://graph.qq.com/oauth/show?which=Login&display=pc&response_type=token&client_id=101422474&redirect_uri=http%3A%2F%2Fm.fooju.cn%2Fself">
            <img src="../../assets/self/qq.png" alt="">
          </a>
          <a href="https://api.weibo.com/oauth2/authorize?client_id=4035548413&redirect_uri=http%3A%2F%2Fm.fooju.cn%2Fself">
          <img src="../../assets/self/wb.png" alt="">
          </a>
        </div>
      </div>
    </div>
</template>


<script>
  import {login2} from '../../api/config'
  import {Toast} from 'mint-ui'
  import md5 from 'js-md5'
  export default{
    data () {
      return {
        number: '',
        psd: '',
        qq: [],
        loadvisible: false
      }
    },
    methods: {
      enter () {
        var self = this
        if (!(/1[^2|^9]\d{9}$/).test(self.number)) {
          Toast('你输入的手机号格式错误，请重新输入！')
        } else {
          login2({mobile: self.number, password: md5(md5(self.psd)) + 'fujuwang'}).then(function (res) {
            Toast(res.data.msg)
            if (res.data.code === 200) {
              sessionStorage.setItem('loginsession', JSON.stringify(res.data.data))
              self.$store.commit('login', true)
              // self.$store.state.user === true
              sessionStorage.setItem('store', self.$store.state.user)
              setTimeout(function () {
                self.$router.push('home')
              }, 2000)
              console.log(112)
            }
          })
        }
      }
    }
  }
</script>


<style lang="less">
  .box1{
    header {
      height: 48px;
      line-height: 48px;
      padding: 0 5px;
      font-size: 18px;
      display: flex;
      justify-content: space-between;
    }
    main{
      padding: 10px;
      position: relative;
      label{
        display: block;
        padding: 20px;
        text-align: left;
        border-bottom: 1px solid #999;
        input{
          width: 100%;
          font-size: 16px;
          outline: none;
          border: none;
        }
      }
    }
    .forget{
      padding-right: 10px;
      text-align: right;
      div{
        color: red;
      }
    }
    .button{
      padding: 10px;
      margin-top: 20px;
      .el-button{
        width: 100%;
        span{
          color: white;
        }
      }
    }
    .footer{
      width: 100%;
      position: fixed;
      bottom: 10px;
      .image {
        display: flex;
        justify-content: space-around;
        img {
          width: 56px;
        }
      }
    }
  }
</style>
