<template>
  <div>
    <el-col :span="6">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">注意事项</mt-tab-item>
        <mt-tab-item id="2">租房风险</mt-tab-item>
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
        rows1: []
      }
    },
    created () {
      this.getData()
      this.getData1()
    },
    methods: {
      getData () {
        var self = this
        EncyList({cat1: 7, cat2: 17, page_size: this.page_size}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.rows = res.data.data
          }
        })
      },
      getData1 () {
        var self = this
        EncyList({cat1: 7, cat2: 29, page_size: this.page_size}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.rows1 = res.data.data
          }
        })
      }
    }
  }
</script>

<style>
</style>
