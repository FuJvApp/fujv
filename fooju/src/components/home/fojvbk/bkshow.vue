<template>
  <div>
    <el-col :span="6">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">房产政策</mt-tab-item>
        <mt-tab-item id="2">购房建议</mt-tab-item>
        <mt-tab-item id="3">法律纠纷</mt-tab-item>
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
        EncyList({cat1: 5, cat2: 22, page_size: this.page_size}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.rows = res.data.data
          }
        })
      },
      getData1 () {
        var self = this
        EncyList({cat1: 5, cat2: 23, page_size: this.page_size}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.rows1 = res.data.data
          }
        })
      },
      getData2 () {
        var self = this
        EncyList({cat1: 5, cat2: 24, page_size: this.page_size}).then(function (res) {
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
