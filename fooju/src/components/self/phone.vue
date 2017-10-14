<template>
  <div class="box2">
    <header>
      <router-link to="/self" class="back">
        <i class="el-icon-arrow-left"></i>
      </router-link>
      <span>手机绑定</span>
    </header>
    <main>
      <div>
        <input v-model="value" type='number' placeholder="请输入手机号" @change="change2">
      </div>
      <div>
        <input v-model="psd" type="password" placeholder="请输入密码" @change="change1">
      </div>
      <span v-if="span1visible">*密码由数字开头，6-16位数字字母组合</span>
    </main>
    <div class="forget">
      注册即视为同意<a href="">《福局网用户协议》</a>
    </div>
    <div class="button">
      <el-button type="danger" @click="next">提交</el-button>
    </div>
  </div>
</template>


<script>
  import { Toast } from 'mint-ui'
  import {register} from '../../api/config'
  import md5 from 'js-md5'
  export default{
    data () {
      return {
        psd: '',
        value: '',
        span1visible: false,
        span2visible: false
      }
    },
    components: {
    },
    methods: {
      next () {
        var self = this
          register({mobile: self.value, verify: md5(self.psd)}).then(function (res) {
            Toast(res.data.msg)
            if (res.data.code === 200) {
              self.$router.push('login')
            }
          })
        }
      },
      change1 () {
        var self = this
        if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(self.psd))) {
          self.span1visible = true
        } else {
          self.span1visible = false
        }
      },
      change2 () {
        var self = this
        if (!(/^1[^2|^9]\d{9}$/.test(self.value))) {
          Toast('您输入的手机号格式有误,请重新输入！')
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
    text-align: left;
  div{
    padding: 20px;
    line-height: 20px;
    text-align: left;
    border-bottom: 1px solid #999;
  input{
    font-size: 16px;
    outline: none;
    border: none;
  }
  }
  span{
    display: block;
    padding-top: 5px;
    color: red;
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
