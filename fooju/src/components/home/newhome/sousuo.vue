<template>
    <div>
      <div class="sousuo-tap">
        <div class="sousuo2">
          <el-input  v-model="value" icon='search' placeholder="输入楼盘进行搜索" :on-icon-click="clicksousuo"></el-input>
        </div>
        <a @click="routerback">取消</a>
      </div>
      <div class="lishi">
        <div>历史搜索</div>
        <ul v-if="lishidialog">
          <li v-for="item in tabledata">
            <a href="">{{item.data}}</a>
            <a href="" @click=""><i class="iconfont icon-close"></i></a>
          </li>
        </ul>
      </div>
      <div class="allclear" @click="clearall">清空历史记录</div>
      <el-dialog v-model="dialogvisible">
        <div style="color: red; padding: 30px; font-size: 20px">确定清空历史吗?</div>
        <div>
          <el-button @click="dialogvisible=false">取消</el-button>
          <el-button type='danger' @click="sure">确定</el-button>
        </div>
      </el-dialog>
    </div>
</template>


<script>
  import {villagefind} from '../../../api/config'
  export default{
    data () {
      return {
        value: '',
        lishidialog: false,
        dialogvisible: false,
        tabledata: []
      }
    },
    methods: {
      clicksousuo () {
        this.lishidialog = true
        // this.$router.push('/newhome')
        console.log(this.lishidialog)
        var self = this
        villagefind({type: 'new', name: this.value}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.tabledata = res.data
            self.$message({
              message: 'res.data.msg',
              type: 'success'
            })
          } else {
            self.$message({
              message: 'res.data.msg',
              type: 'error'
            })
          }
        })
      },
      clearall () {
        this.dialogvisible = true
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
    padding: 20px;
    div{
      text-align: left;
      color: #cccccc;
    }
    ul {
      li {
        width: 100%;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .allclear{
    padding: 10px;
    color: indianred;
    font-size: 20px;
  }
</style>
