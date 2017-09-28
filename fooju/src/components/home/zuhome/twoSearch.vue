<template>
    <div class="twoSearch rent">
      <mt-header fixed>
        <div slot="left">
          <span class="input">
            <i class="iconfont icon-sousuo"></i>
            <input type="text" v-focus="true" placeholder="请输入小区或商圈名">
          </span>
        </div>
        <mt-button @click="goBack" slot="right">取消</mt-button>
      </mt-header>
      <div class="searchRecord">
        <div class="search-content">
          <p class="title">历史搜索</p>
          <ul class="record-content">
            <li>
              <p>dd</p>
              <i class="iconfont icon-shanchu" @click="removeOne"></i>
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
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      removeOne () {
        console.log('removeOne')
      },
      removeAll () {
        console.log('removeAll')
        MessageBox.confirm('确定执行此操作？').then(function (res) {
          Indicator.open({
            text: '删除中...',
            spinnerType: 'fading-circle'
          })
          setTimeout(function () {
            Indicator.close()
          }, 2000)
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
    color: #ff0000;
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
</style>
