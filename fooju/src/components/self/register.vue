<template>
  <div class="box2">
    <header>
      <router-link to="/self" class="back">
        <i class="el-icon-arrow-left"></i>
      </router-link>
      <span>用户注册</span>
    </header>
    <main>
      <div>
        <input v-model="value" type="number" placeholder="请输入手机号">
      </div>
      <div>
        <input v-model="msg" type='number' placeholder="请输入验证码">
        <span class="yzm2" @click="yzm">获取验证码</span>
      </div>
    </main>
    <div class="forget">
      (请在60秒内完成验证，超时请点击重新发送)
    </div>
    <div class="button">
      <el-button type="danger" @click="next">下一步</el-button>
    </div>
  </div>
</template>


<script>
  import { Toast } from 'mint-ui'
  import {msg, msgsend} from '../../api/config'
  export default{
    data () {
      return {
        value: '',
        msg: ''
      }
    },
    components: {
    },
    mounted () {
    },
    methods: {
      yzm () {
        var self = this
        var yzm2 = this.$el.querySelector('.yzm2')
        var time = null
        var init = 60
        clearInterval(time)
        // yzm2.disabled = true
        if (!(/^1[^2|^9]\d{9}$/.test(self.value))) {
          Toast('您输入的手机号格式有误,请重新输入！')
        } else {
          yzm2.style.zIndex = -1
          time = setInterval(function () {
            init--
            if (init >= 0) {
              yzm2.innerHTML = init + '秒重新发送'
            } else {
              yzm2.innerHTML = '获取验证码'
              yzm2.disabled = false
              yzm2.style.zIndex = 1
              clearInterval(time)
            }
          }, 1000)
          msg({mobile: self.value}).then(function (res) {
            if (res.data) {
              Toast(res.data.msg)
            }
          })
        }
      },
      next () {
        var self = this
        if (this.msg === '') {
          Toast({
            message: '请输入验证码！',
            duration: 500
          })
        } else {
          msgsend({mobile: self.value, verify: self.msg}).then(function (res) {
            if (res.data && res.data.code === 200) {
              self.$router.push({path: '/register2', query: {phone: self.value}})
            } else {
              Toast('你输入的验证码有误，请重新输入！')
            }
          })
        }
      }
    }
  }
</script>


<style lang="less">
  .box2{
    header {
      height: 48px;
      line-height: 48px;
      font-size: 18px;
      .back{
        position: fixed;
        left: 5px;
      }
    }
    main{
      padding: 10px;
      position: relative;
      div{
        padding: 20px;
        line-height: 20px;
        text-align: left;
        border-bottom: 1px solid #999;
        display: flex;
        justify-content: space-between;
        input{
          font-size: 16px;
          outline: none;
          border: none;
        }
        span{
          color: red;
        }
      }
    }
    .forget{
      padding-left: 10px;
      text-align: left;
    }
    .button{
      position: fixed;
      bottom: 20px;
      width: 100%;
      padding: 10px;
      margin-top: 20px;
      .el-button{
        width: 100%;
        span{
          color: white;
        }
      }
    }
  }
</style>
