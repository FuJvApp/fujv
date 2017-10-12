<template>
  <div>
    <el-col :span="6">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">准备换房</mt-tab-item>
        <mt-tab-item id="2">换房风险</mt-tab-item>
        <mt-tab-item id="3">缴税/过户</mt-tab-item>
      </mt-navbar>
    </el-col>
    <el-col :span="18">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <p v-for="item in rows">{{item.title}}</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <p v-for="item in rows1">{{item.title}}</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <p v-for="item in rows2">{{item.title}}</p>
        </mt-tab-container-item>
      </mt-tab-container>
    </el-col>
  </div>
</template>

<script>
  import {EncyList} from '../../../api/config'
  export default{
    data () {
      return {
        selected: '1',
        page_size: '100',
        rows: [],
        rows1: [],
        rows2: []
      }
    },
    created () {
      this.getData()
      this.getData1()
      this.getData2()
    },
    methods: {
      getData () {
        var self = this
        EncyList({cat1: 6, cat2: 26, page_size: this.page_size}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.rows = res.data.data
          }
        })
      },
      getData1 () {
        var self = this
        EncyList({cat1: 6, cat2: 27, page_size: this.page_size}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.rows1 = res.data.data
          }
        })
      },
      getData2 () {
        var self = this
        EncyList({cat1: 6, cat2: 28, page_size: this.page_size}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.rows2 = res.data.data
          }
        })
      }
    }
  }
</script>

<style>
</style>
