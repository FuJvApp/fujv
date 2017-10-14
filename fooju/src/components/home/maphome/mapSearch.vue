<template>
  <div class="twoSearch rent">
    <mt-header fixed>
      <div slot="left">
        <span class="input">
          <div class="home-type" @click="typeToggle">
            {{homeType}}
            <i class="iconfont icon-xia" style="font-size: .14rem"></i>
            <ul class="type-list" v-if="typeShow">
              <li v-for="(item,index) in homeTypes" @click="typeChange(item, index+1)">
                {{item}}
              </li>
            </ul>
          </div>
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
        historyList: [],
        types: this.$route.query.types,
        homeTypes: ['二手房', '新房', '租房'],
        homeType: this.$route.query.types === 1 ? '二手房' : this.$route.query.types === 2 ? '新房' : '租房',
        typeShow: false
      }
    },
    created () {
//      this.getVillageList()
      var str = localStorage.getItem('village')
      if (str) {
        this.historyList = str.split(',').splice(0, 4)
      }
      console.log(this.historyList)
//      var arr = [1, 2, 3, 4, 5]
      console.log('***' + this.types)
    },
    methods: {
      typeChange (item, types) {
        this.homeType = item
        this.types = types
      },
      typeToggle () {
        this.typeShow = !this.typeShow
      },
      goBack () {
        this.$router.push({name: 'maphome', params: {types: this.types}})
      },
      searchContent (key) {
        this.historyList.unshift(key)
        localStorage.setItem('village', this.historyList)
        this.$router.push({name: 'maphome', params: {types: this.types, key: key}})
      },
      historySearch (key) {
        this.$router.push({name: 'maphome', params: {types: this.types, key: key}})
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
  .twoSearch.rent .mint-header .is-left{
    position: relative;
  }
  .twoSearch.rent .mint-header .is-left .type-list{
    position: absolute;
    top: .5rem;
    left: .2rem;
    background-color: #fff;
    border: 1px solid #c5c5c5;
    border-radius: .07rem;
    line-height: .4rem;
    animation: show 1s forwards;
  }
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .twoSearch.rent .mint-header .is-left .type-list::before{
    content: '';
    display: block;
    height: .1rem;
    width: .1rem;
    border-top: 1px solid #e2e2e2;
    border-left: 1px solid #e2e2e2;
    position: absolute;
    bottom: 100%;
    background-color: #fff;
    left: 50%;
    transform: translateX(-50%) rotateZ(45deg) translateY(50%);
  }
  .twoSearch.rent .mint-header .is-left .type-list li{
    border-bottom: 1px solid #c5c5c5;
    padding: 0 .15rem;
    text-align: center;
    position: relative;
  }
  .twoSearch.rent .input,.twoSearch.rent .input input{
    background-color: #f4f4f4;
  }
  .twoSearch.rent .input .home-type{
    padding-right: .1rem;
    font-size: .14rem;
    margin-right: .11rem;
    height: .2rem;
    line-height: .2rem;
    border-right: 1px solid #999999;
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
