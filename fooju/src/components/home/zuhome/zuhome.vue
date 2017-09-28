<template>
    <div class="rent">
      <mt-header fixed>
        <div slot="left">
          <mt-button icon="back" @click="goBack"></mt-button>
          <span class="input">
            <i class="iconfont icon-sousuo"></i>
            <input @focus="isFocus" type="text" placeholder="请输入小区或商圈名">
          </span>
        </div>
        <mt-button class="iconfont icon-map-copy" slot="right"></mt-button>
      </mt-header>
      <section>
        <mt-swipe :auto="1000*(ad_list.length*2+1) " :speed="1000">
          <mt-swipe-item v-for="item in ad_list">
            <img :src="'http://www.fooju.cn/'+item.picurl" alt="">
          </mt-swipe-item>
        </mt-swipe>
        <div class="tab-space">
          <el-menu class="zu-tab" default-active="100">
            <template v-for="(item,index) in navList">
              <el-submenu :index="index+''">
                <template slot="title">
                  {{item.name}}
                  <i slot="icon" class="iconfont icon-xia"></i>
                </template>
                <el-menu-item v-for="child in item.child">

                </el-menu-item>
              </el-submenu>
            </template>
          </el-menu>
        </div>
        <ol class="zu-lists"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="5"
          infinite-scroll-immediate-check="loading">
          <li v-for="item in lists">
            <a href="#" class="rec_router">
              <dl>
                <dt>
                  <img :src="'http://www.fooju.cn/'+item.pic" alt="" lazy="loaded">
                </dt>
                <dd>
                  <h3>{{item.title}}</h3>
                  <span>
                    {{item.bedroom}}室{{item.livingroom}}厅{{item.wc}}卫
                    / {{item.built_area}}m² / {{item.direction}}
                  </span>
                  <p class="rec_jprice">
                    {{item.rent}}元 / 月
                  </p>
                </dd>
              </dl>
            </a>
          </li>
          <div class="load">
            <mt-spinner type="snake" color="#7d31ff" :size="8"></mt-spinner>
            房源加载中···
          </div>
        </ol>
      </section>
      <div class="sort" @click="sortSheet">
        <i class="iconfont icon-paixu"></i>排序
      </div>
      <mt-actionsheet
        :actions="sortType"
        v-model="sortVisible"
        cancelText="">
      </mt-actionsheet>
      <mt-popup
        v-model="tabVisible"
        position="top"
        class="tab-content">
      </mt-popup>
    </div>
</template>

<script>
  export default{
    data () {
      return {
        lists: [],
        page_num: 1,
        page_size: 5,
        districtList: [1, 2, 3],
        navList: [
          {
            name: '区域',
            child: this.districtList
          },
          {
            name: '租金'
          },
          {
            name: '房型'
          },
          {
            name: '更多'
          }
        ],
        order: -1,
        loading: false,
        ad_list: [],
        sortType: [
          {
            name: '默认排序',
            method: this.defaultSort
          },
          {
            name: '最新发布',
            method: this.newIssue
          },
          {
            name: '租金从低到高',
            method: this.rentAsc
          },
          {
            name: '租金从高到低',
            method: this.rentDesc
          },
          {
            name: '面积从低到高',
            method: this.areaAsc
          },
          {
            name: '面积从高到低',
            method: this.areaDesc
          }
        ],
        sortVisible: false,
        tabVisible: false,
        tabTop: '',
        tabN: -1,
        type: 1,
        position: 3
      }
    },
    created () {
      console.log(this.navList[0].child)
      this.getData()
      this.getAdList()
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
//      var tabs = document.querySelectorAll('.zu-tab li')
//      var icons = document.querySelectorAll('.zu-tab li i')
//      var self = this
//      for (var i = 0; i < tabs.length; i++) {
//        tabs[i].index = i
//        tabs[i].flag = false
//        tabs[i].addEventListener('click', function () {
//          console.log(this.index)
//          self.tabN = this.index
//          self.houseType(this, tabs, icons)
//        })
//      }
//      console.log(tabs)
    },
    methods: {
      getAdList () {
        var self = this
        var data = {
          type: this.type,
          position: this.position
        }
        this.$api.adLists(data).then(function (res) {
//          console.log(res)
          if (res.data && res.data.code === 200) {
            self.ad_list = res.data.data
            if (self.ad_list.length === 1) {
              self.ad_list.push(res.data.data[0])
            }
            console.log(self.ad_list)
          }
        })
      },
      handleScroll () {
        var tab = document.querySelector('.zu-tab')
        var tabTop = tab.offsetTop
        console.log(tab.offsetHeight)
        var L = document.body.scrollTop || document.documentElement.scrollTop
        console.log(L)
        if (L >= tabTop) {
          tab.classList.add('fixed-tab')
        } else {
          tab.classList.remove('fixed-tab')
        }
      },
//      houseType (el, tabs, icons) {
//        // console.log(el)
//        for (var i = 0; i < tabs.length; i++) {
//          if (el.index !== i) {
//            tabs[i].flag = false
//          }
//        }
//        el.flag = !el.flag
//        this.tabVisible = el.flag
//        var tab = document.querySelector('.zu-tab')
//        tab.classList.add('tab-fixed')
//        for (var j = 0; j < tabs.length; j++) {
//          tabs[j].classList.remove('active')
//          icons[j].classList.remove('icon-active')
//          console.log(tabs[j])
//        }
//        console.log(1111)
//        el.classList.add('active')
//        var icon = document.querySelector('.active i')
//        icon.classList.add('icon-active')
//      },
      defaultSort () {
        console.log('默认排序')
        this.order = 0
        this.page_size = 5
        this.getData()
      },
      newIssue () {
        console.log('默认排序1')
        this.order = 1
        this.page_size = 5
        this.getData()
      },
      rentAsc () {
        console.log('默认排序2')
        this.order = 2
        this.page_size = 5
        this.getData()
      },
      rentDesc () {
        console.log('默认排序3')
        this.order = 3
        this.page_size = 5
        this.getData()
      },
      areaAsc () {
        console.log('默认排序4')
        this.order = 4
        this.page_size = 5
        this.getData()
      },
      areaDesc () {
        console.log('默认排序5')
        this.order = 5
        this.page_size = 5
        this.getData()
      },
      sortSheet () {
        this.sortVisible = true
      },
      isFocus () {
        this.$router.push('/twoSearch')
      },
      goBack () {
        console.log(11111)
        this.$router.go(-1)
      },
      getData () {
        var self = this
        var data = null
        console.log(this.order)
        if (this.order >= 0) {
          data = {
            page_num: this.page_num,
            page_size: this.page_size,
            order: this.order
          }
        } else {
          data = {
            page_num: this.page_num,
            page_size: this.page_size
          }
        }
        this.$api.retalLists(data).then(function (res) {
          console.log(res.data)
          if (res.data.code === 200 && res.data.data) {
            self.lists = res.data.data
            console.log(res.data.data)
          }
        }).catch(function (e) {
          console.log(e)
          console.log(11111)
        })
      },
      loadMore () {
        console.log(this.page_size)
        this.loading = true
        this.page_size += 5
        setTimeout(() => {
//            let last = this.lists[this.lists.length - 1]
//            for (let i = 1; i <= 10; i++) {
//              this.lists.push(last + i)
//            }
          this.getData()
          this.loading = false
        }, 1500)
      }
    },
    watch: {
      tabVisible (a, b) {
        if (!a) {
          var tab = document.querySelector('.zu-tab')
          tab.classList.remove('tab-fixed')
          var tabs = document.querySelectorAll('.zu-tab li')
          var icons = document.querySelectorAll('.zu-tab li i')
          for (var j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active')
            icons[j].classList.remove('icon-active')
            console.log(tabs[j])
          }
        }
      }
    }
  }
</script>

<style>
  @import "../../../style/zuhome.css";
</style>
