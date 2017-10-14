<template>
    <div>
      <div class="sousuo-tap">
        <router-link to="/home">
          <i class="el-icon-arrow-left"></i>
        </router-link>
        <div class="sousuo2">
          <div class="search">
            <i class="iconfont icon-search" @click="clicksousuo"></i>
            <input type="text" placeholder="请输入楼盘进行搜索" v-model="value" @input="getdata" @keydown="" id="inputHouseType">
          </div>
        </div>
        <a @click.prevent="back1">取消</a>
      </div>
      <div class="lishi">
        <div>历史搜索</div>
        <ul class="onedata">
          <li v-for="item in onedata" @click="searchto(item.name)">
            <span>{{item.name}}</span>
            <span>{{item.count}}套</span>
          </li>
        </ul>
        <ul>
          <li v-if="lishidata[0]"><span @click='searchto(lishidata[0])'>{{lishidata[0]}}</span><span @click="deleteone(0)">X</span></li>
          <li v-if="lishidata[1]"><span @click='searchto(lishidata[1])'>{{lishidata[1]}}</span><span @click="deleteone(1)">X</span></li>
          <li v-if="lishidata[2]"><span @click='searchto(lishidata[2])'>{{lishidata[2]}}</span><span @click="deleteone(2)">X</span></li>
          <li v-if="lishidata[3]"><span @click='searchto(lishidata[3])'>{{lishidata[3]}}</span><span @click="deleteone(3)">X</span></li>
        </ul>
      </div>
      <div class="allclear" @click="clearall">清空历史记录</div>
      <!--<mt-checklist-->
        <!--title="复选框列表"-->
        <!--v-model="value"-->
        <!--align="right"-->
        <!--:options="['选项A', '选项B', '选项C']">-->
      <!--</mt-checklist>-->

      <!--<el-dialog v-model="dialogvisible">-->
        <!--<div style="color: red; padding: 30px; font-size: 20px">确定清空历史吗?</div>-->
        <!--<div>-->
          <!--<el-button @click="dialogvisible=false">取消</el-button>-->
          <!--<el-button type='danger' @click="sure">确定</el-button>-->
        <!--</div>-->
      <!--</el-dialog>-->
    </div>
</template>


<script>
  import {MessageBox, checklist} from 'mint-ui'
  import {villagefind} from '../../../api/config'
  export default{
    data () {
      return {
        value: '',
        lishidialog: false,
        dialogvisible: false,
        onedata: [],
        lishidata: []
      }
    },
    components: {
      checklist
    },
    mounted () {
      this.$el.querySelector('#inputHouseType').focus()
      var str = localStorage.getItem('searchArr')
      if (str) {
        this.lishidata = localStorage.getItem('searchArr').split(',').splice(0, 4)
      }
    },
    methods: {
      getdata () {
        var self = this
        villagefind({type: 'used', name: this.value}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.onedata = res.data.data
          }
        }).catch(function () {
        })
      },
      back1 () {
        this.$router.push('newhome')
        // sessionStorage.setItem('sousuo', '')
      },
      searchto (e) {
        this.lishidata.unshift(e)
        localStorage.setItem('searchArr', this.lishidata)
        // this.$router.push({path: 'newhome'})
        // sessionStorage.setItem('sousuo', e)
        this.$router.push({path: 'newhome', query: {village: e}})
      },
      clicksousuo () {
        // this.$router.push('/newhome')
//        villagefind({type: 'new', name: this.value}).then(function (res) {
//          if (res.data && res.data.code === 200) {
//            self.tabledata = res.data
//            self.$message({
//              message: 'res.data.msg',
//              type: 'success'
//            })
//          } else {
//            self.$message({
//              message: 'res.data.msg',
//              type: 'error'
//            })
//          }
//        })
        if (this.value !== '') {
          this.lishidata.unshift(this.value)
          localStorage.setItem('searchArr', this.lishidata)
          this.value = ''
        }
      },
      deleteone (n) {
        this.lishidata.splice(this.lishidata.indexOf(n), 1)
        localStorage.setItem('searchArr', this.lishidata)
      },
      clearall () {
        // this.dialogvisible = true
        var self = this
        MessageBox.confirm('确定执行此操作?', '提示')
        MessageBox.confirm('确定执行此操作?').then(action => {
          self.lishidata = []
          localStorage.clear('searchArr')
        }).catch(function () {
        })
      },
      chanchu () {

      },
      sure () {
        this.lishidialog = false
        this.dialogvisible = false
      },
      routerback () {
        this.$router.go(-1)
      }
    }
  }
</script>


<style lang="less">
  .sousuo-tap{
    height: 48px;
    line-height: 48px;
    display: flex;
    justify-content: space-around;
    .sousuo2 {
      width: 80%;
      i{
        font-size: 12px;
      }
      input {
        border-radius: 10px;
        outline: none;
        border: none;
      }
    }
  }
  .lishi{
    position: relative;
    div{
      text-align: left;
      color: #cccccc;
    }
    ul {
      li {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        padding: 10px;
      }
    }
    .onedata{
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 12;
      box-shadow: 0 2px 3px 0 #eee;
      background: white;
      li{
        border-bottom:1px solid #eee;
      }
    }
  }
  .allclear{
    padding: 10px;
    color: indianred;
    font-size: 20px;
  }
</style>
