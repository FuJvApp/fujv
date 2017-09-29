<template>
  <div>
    <el-col :span="6">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">认购新房</mt-tab-item>
        <mt-tab-item id="2">看房/选房</mt-tab-item>
        <mt-tab-item id="3">签约/定房</mt-tab-item>
        <mt-tab-item id="4">收房/验房</mt-tab-item>
        <mt-tab-item id="5">装修/入住</mt-tab-item>
        <mt-tab-item id="6">看房/选房</mt-tab-item>
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
        <mt-tab-container-item id="4">
          <p v-for="item in rows3">{{item.title}}</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <p v-for="item in rows4">{{item.title}}</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="6">
          <p v-for="item in rows5">{{item.title}}</p>
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
        rows2: [],
        rows3: [],
        rows4: [],
        rows5: []
      }
    },
    created () {
      this.getData()
      this.getData1()
      this.getData2()
      this.getData3()
      this.getData4()
      this.getData5()
    },
    methods: {
      getData () {
        var self = this
        EncyList({cat1: 4, cat2: 15, page_size: this.page_size}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.rows = res.data.data
          }
        })
      },
      getData1 () {
        var self = this
        EncyList({cat1: 4, cat2: 16, page_size: this.page_size}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.rows1 = res.data.data
          }
        })
      },
      getData2 () {
        var self = this
        EncyList({cat1: 4, cat2: 19, page_size: this.page_size}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.rows2 = res.data.data
          }
        })
      },
      getData3 () {
        var self = this
        EncyList({cat1: 4, cat2: 20, page_size: this.page_size}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.rows3 = res.data.data
          }
        })
      },
      getData4 () {
        var self = this
        EncyList({cat1: 4, cat2: 21, page_size: this.page_size}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.rows4 = res.data.data
          }
        })
      },
      getData5 () {
        var self = this
        EncyList({cat1: 4, cat2: 25, page_size: this.page_size}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.rows5 = res.data.data
          }
        })
      }
    }
  }
</script>

<style>
</style>
