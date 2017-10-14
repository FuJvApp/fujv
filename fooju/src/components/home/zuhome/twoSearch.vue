<template>
    <div class="twoSearch rent">
      <mt-header fixed>
        <div slot="left">
          <span class="input">
            <i class="iconfont icon-sousuo"></i>
            <input id="v_search" @input="searchVillage($event.target.value)" type="text" v-focus="true" placeholder="请输入小区或商圈名">
            <i @click="clearInput" class="iconfont icon-close" v-if="show"></i>
          </span>
        </div>
        <mt-button @click="goBack" slot="right">取消</mt-button>
      </mt-header>
      <ul class="villageList" v-if="showVillage">
        <li v-for="item in villageList" @click="searchContent(item.name)">
          <span>{{item.name}}</span>
          <i>{{item.count}}套</i>
        </li>
      </ul>
      <div class="searchRecord">
        <div class="search-content">
          <p class="title">历史搜索</p>
          <ul class="record-content">
            <li v-for="(item,index) in historyList" @click="historySearch(item)">
              <p>{{item}}</p>
              <i class="iconfont icon-shanchu" @click.stop="removeOne(index)"></i>
            </li>
          </ul>
        </div>
        <div class="clear-search" @click="removeAll">
          清空历史记录
        </div>
      </div>
    </div>
</template>

<script>
  import { MessageBox, Toast, Indicator } from 'mint-ui'
  export default {
    data () {
      return {
        show: false,
        showVillage: true,
        villageList: [],
        historyList: []
      }
    },
    created () {
//      this.getVillageList()
      var str = localStorage.getItem('village')
      if (str) {
        this.historyList = str.split(',').splice(0, 4)
      }
      console.log(this.historyList)
      var arr = [1, 2, 3, 4, 5]
      console.log(arr)
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      searchContent (village) {
        this.historyList.unshift(village)
        localStorage.setItem('village', this.historyList)
        this.$router.push({name: 'zuhome', params: {village: village}})
      },
      historySearch (village) {
        this.$router.push({name: 'zuhome', params: {village: village}})
        this.$router.push({path: '/zuhome', query: {village: village}})
      },
      getVillageList (name) {
        var self = this
        this.$api.villagefind({type: 'retal', name: name}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.villageList = res.data.data
            console.log(self.villageList)
          }
        })
      },
      searchVillage (value) {
        console.log(value)
        if (value.length) {
          this.show = true
        } else {
          this.show = false
        }
        this.getVillageList(value)
      },
      clearInput () {
        var input = document.getElementById('v_search')
        input.value = ''
        this.show = false
      },
      removeOne (index) {
        console.log('removeOne')
        var arr = []
        for (var i = 0; i < this.historyList.length; i++) {
          if (i !== index) {
            arr.push(this.historyList[i])
          }
        }
        console.log(arr)
        if (arr.length) {
          localStorage.setItem('village', arr)
          this.historyList = localStorage.getItem('village').split(',').splice(0, 4)
        } else {
          localStorage.clear()
          this.historyList = []
        }
      },
      removeAll () {
        console.log('removeAll')
        var self = this
        MessageBox.confirm('确定执行此操作？').then(function (res) {
          Indicator.open({
            text: '删除中...',
            spinnerType: 'fading-circle'
          })
          localStorage.clear()
          self.historyList = []
          setTimeout(function () {
            Indicator.close()
          }, 1000)
        }).catch(function (res) {
          Toast('已取消删除')
        })
      }
    }
  }
</script>

<style>
  @import '../../../style/zuhome.css';
  .twoSearch.rent{
    background-color: #fff;
  }
  .twoSearch .searchRecord{
    background-color: #efefef;
  }
  .twoSearch .search-content{
    padding: .2rem;
    text-align: left;
    background-color: #fff;
  }
  .twoSearch .clear-search{
    background-color: #fff;
    margin-top: .1rem;
    padding: .2rem 0;
    color: #c30d23;
    font-size: .15rem;
  }
  .twoSearch .record-content li{
    border-bottom: 1px solid #eeeeee;
    line-height: .6rem;
    display: flex;
  }
  .twoSearch .record-content li .iconfont{
    color: #999;
  }
  .twoSearch .record-content li p{
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .twoSearch.rent .mint-header{
    background-color: #fff;
    border-bottom: 1px solid #eeeeee;
    position: static;
  }
  .twoSearch.rent .input,.twoSearch.rent .input input{
    background-color: #f4f4f4;
  }
  .twoSearch.rent .is-right .mint-button-text{
    color: #999999;
  }
  .twoSearch .villageList{
    position: fixed;
    background-color: #fff;
    padding-left: .15rem;
    width: 100%;
    box-sizing: border-box;
    font-size: .14rem;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,0.3);
  }
  .twoSearch .villageList li{
    padding: .1rem 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;
  }
  .twoSearch .villageList li i{
    padding-right: .15rem;
    font-size: .12rem;
    color: #999;
  }
</style>
