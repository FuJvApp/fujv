<template>
    <div class="rent" :style="navVisible ? 'position: fixed' : ''">
      <mt-header fixed>
        <div slot="left">
          <mt-button icon="back" @click="goBack"></mt-button>
          <span class="input">
            <i class="iconfont icon-sousuo"></i>
            <input @focus="isFocus" type="text" placeholder="请输入小区或商圈名">
          </span>
        </div>
        <mt-button @click="goMap" class="iconfont icon-map-copy" slot="right"></mt-button>
      </mt-header>
      <section>
        <mt-swipe :auto="1000*(ad_list.length*2+1) " :speed="1000">
          <mt-swipe-item v-for="item in ad_list" :key="ad_list">
            <img :src="'http://www.fooju.cn/'+item.picurl" alt="">
          </mt-swipe-item>
        </mt-swipe>
        <div class="tab-space">
          <ul class="zu-tab" :class="navVisible ? 'tab-fixed':''">
            <li v-for="(item,index) in navList" @click="changNav(index)">
              {{item.name}}
              <i class="iconfont icon-xia" :class="navType == index && navVisible ? 'isSelect':''"></i>
            </li>
          </ul>
          <ul class="areaList" v-if="navType==0">
            <li @click="areaSelect(null, '区域')">不限</li>
            <li v-for="item in navList[0].child" @click="areaSelect(item.id, item.area)">
              {{item.area}}
            </li>
          </ul>
          <ul class="rentList" v-if="navType==1">
            <li @click="rentSelect(null)">不限</li>
            <li v-for="item in navList[1].child" @click="rentSelect(item.id)">
              {{item.area}}
            </li>
          </ul>
          <ul class="typeList" v-if="navType==2">
            <li @click="houseTypeSelect()" style="height: .4rem; line-height: .4rem">不限</li>
            <li v-for="item in navList[2].child">
              <label :for="'a'+item.value">{{item.label}}</label>
              <input type="checkbox" :id="'a'+item.value" @click="typeChange(item.value, $event.target)">
            </li>
            <li class="type-affirm" @click="houseTypeSelect()">确认</li>
          </ul>
          <div class="moreList" v-if="navType==3">
            <ul>
              <li v-for="(item,index) in navList[3].child">
                <p>
                  {{item.name}}
                </p>
                <ul class="listContent" :class="'listContent'+index">
                  <li v-for="dir in item.data" @click="mLCSelect($event.target)">
                    {{dir.name}}
                  </li>
                </ul>
              </li>
            </ul>
            <div class="type-affirm clear-condition" @click="clearMoreSelect">清空条件</div>
            <div class="type-affirm" @click="moreTypeSelect()">确认</div>
          </div>
        </div>
        <ol class="zu-lists"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="5"
          infinite-scroll-immediate-check="loading">
          <li v-for="item in lists">
            <router-link :to="{path: '/rentMsg',query: {listId: item.id}}" class="rec_router">
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
            </router-link>
          </li>
          <div class="load" v-if="isMore">
            <mt-spinner type="snake" color="#7d31ff" :size="8"></mt-spinner>
            房源加载中···
          </div>
          <div class="load" v-if="!isMore">
            已加载全部房源
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
        v-model="navVisible"
        position="top"
        class="tab-content">
      </mt-popup>
    </div>
</template>

<script>
  export default{
    data () {
      return {
        activeIndex: '1',
        lists: [],
        page_num: 1,
        page_size: 5,
        typeValue: null,
        navType: null,
        navList: [
          {
            name: '区域',
            child: []
          },
          {
            name: '租金',
            child: [
              {
                area: '1000以下',
                id: '1-1000'
              },
              {
                area: '1000-2000',
                id: '1000-2000'
              },
              {
                area: '2000-3000',
                id: '2000-3000'
              },
              {
                area: '3000-4000',
                id: '3000-4000'
              },
              {
                area: '4000-6000',
                id: '4000-6000'
              },
              {
                area: '6000-7000',
                id: '6000-7000'
              },
              {
                area: '7000-8000',
                id: '7000-8000'
              },
              {
                area: '8000-10000',
                id: '8000-10000'
              },
              {
                area: '10000以上',
                id: '10000-9999999999'
              }
            ]
          },
          {
            name: '房型',
            child: [
              {
                label: '一室',
                value: '1'
              },
              {
                label: '二室',
                value: '2'
              },
              {
                label: '三室',
                value: '3'
              },
              {
                label: '四室',
                value: '4'
              },
              {
                label: '五室',
                value: '5'
              },
              {
                label: '五室以上',
                value: ''
              }
            ]
          },
          {
            name: '更多',
            child: []
          }
        ],
        areaList: [],
        order: null,
        r_id: null,
        rent: null,
        bedroom: null,
        bedroomType: null,
        direction: null,
        built_area: null,
        label: null,
        age: null,
        floor_type: null,
        decoration: null,
        dianti: null,
        m_type: null,
        village: this.$route.query.village,
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
        navVisible: false,
        tabTop: '',
        tabN: -1,
        type: 1,
        types: 3,
        houseType: 'used',
        position: 3,
        isMore: true
      }
    },
    created () {
      this.getData()
      this.getAdList()
      this.getAreaList()
      this.getMoreList()
      console.log(this.village)
//      var item
//      for (item in this.navList[0]) {
//        console.log(item)
//      }
//      Object.keys(this.navList[0]).forEach(function (item) {
//        console.log(item)
//      })
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
//      var icons = document.querySelectorAll('.zu-tab li i')
//      var self = this
//      for (var i = 0; i < tabs.length; i++) {
//        tabs[i].index = i
//        tabs[i].flag = false
//        tabs[i].addEventListener('click', function () {
//          console.log(this.index)
//          self.tabN = this.index
//          self.houseType(this, tabs)
//        })
//      }
//      console.log(tabs)
    },
    methods: {
      goMap () {
        this.$router.push({path: '/maphome', query: {types: this.types}})
      },
      mLCSelect (el) {
        if (el.className !== 'isSelect') {
          el.className = 'isSelect'
        } else {
          el.classList.remove('isSelect')
        }
      },
      clearMoreSelect () {
        var ori = document.querySelectorAll('.rent .moreList .listContent li')
        console.log(ori)
        for (var i = 0; i < ori.length; i++) {
          ori[i].classList.remove('isSelect')
        }
      },
      moreTypeSelect () {
        var L = 0
        for (var i = 0; i < this.navList[3].child.length; i++) {
          L += this.orientationSelect(i)
        }
        console.log(L)
        this.village = null
        this.commentSelect(L)
      },
      orientationSelect (n) {
        console.log(n)
        var ori = document.querySelectorAll('.rent .moreList .listContent' + n + ' li')
        console.log(ori)
        var arr = []
        for (var i = 0; i < ori.length; i++) {
          if (ori[i].className === 'isSelect') {
            console.log(this.navList[3].child, arr)
            arr.push(this.navList[3].child[n].data[i].value)
          }
        }
        var str = arr.join(',')
        console.log(str)
        switch (n) {
          case 0:
            this.direction = str
            break
          case 1:
            this.built_area = str
            break
          case 2:
            this.label = str
            break
          case 3:
            this.age = str
            break
          case 4:
            this.floor_type = str
            break
          case 5:
            this.decoration = str
            break
          case 6:
            this.dianti = str
            break
          case 7:
            this.m_type = str
            break
        }
        return arr.length
      },
      typeChange (value, checked) {
        console.log(value, typeof checked)
      },
      houseTypeSelect () {
        var checkboxs = document.querySelectorAll('.rent .typeList input')
        var bedroomTypes = []
        for (var i = 0; i < checkboxs.length; i++) {
          if (checkboxs[i].checked) {
            bedroomTypes.push(this.navList[2].child[i].value)
          }
        }
        this.bedroomType = bedroomTypes.join(',')
        console.log(this.bedroomType.length)
        this.commentSelect(this.bedroomType.length)
      },
      areaSelect (id, area) {
        console.log(id)
        this.r_id = id
        this.navList[0].name = area
        this.commentSelect(id)
      },
      rentSelect (id) {
        this.rent = id
        this.commentSelect(id)
      },
      commentSelect (id) {
        this.navType = null
        this.navVisible = false
        this.page_size = 5
        if (id) {
          this.getData()
        }
      },
      changNav (index) {
        if (this.navType !== index) {
          this.navType = index
          this.navVisible = true
        } else {
          this.navType = null
          this.navVisible = false
        }
        console.log(this.navType)
      },
      getAreaList () {
        var self = this
        this.$api.RegionLists().then(function (res) {
          if (res.data && res.data.code === 200) {
            self.areaList = res.data.data
            self.navList[0].child = self.areaList
          }
        })
      },
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
      getMoreList () {
        var self = this
        this.$api.BasicsDrop({type: this.houseType}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.navList[3].child = res.data.data
            console.log(self.navList[3].child)
          }
        })
      },
      handleScroll () {
        var tab = document.querySelector('.tab-space')
        var tabTop = tab.offsetTop
        console.log(tab.offsetHeight)
        var L = document.body.scrollTop || document.documentElement.scrollTop
//        console.log(L)
        if (L >= tabTop) {
          tab.classList.add('fixed-tab')
        } else {
          tab.classList.remove('fixed-tab')
        }
      },
//      houseType (el, tabs) {
//        console.log('***++')
//        console.log(el)
//        console.log('***++')
        // console.log(el)
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
//          tabs[j].classList.remove('active  is-opened')
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
        this.$router.push('/home')
      },
      getData () {
        var self = this
        var data = {
          page_num: this.page_num,
          page_size: this.page_size,
          order: this.order,
          r_id: this.r_id,
          rent: this.rent,
          bedroom: this.bedroomType,
          direction: this.direction,
          built_area: this.built_area,
          label: this.label,
          age: this.age,
          floor_type: this.floor_type,
          decoration: this.decoration,
          dianti: this.dianti,
          type: this.m_type,
          village: this.village
        }
        this.$api.retalLists(data).then(function (res) {
          console.log(res.data)
          if (res.data.code === 200 && res.data.data) {
            self.lists = res.data.data
            if (self.page_size > self.lists.length) {
              self.isMore = false
            }
            console.log(res.data.data)
          } else if (res.data.code === 101) {
            console.log(res.data.msg)
            self.lists = []
            self.isMore = false
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
          if (this.isMore) {
            this.loading = false
          }
        }, 1500)
      }
    },
    watch: {
      navVisible (a, b) {
        if (!a) {
          this.navType = null
        }
      }
    }
  }
</script>

<style>
  @import "../../../style/zuhome.css";
</style>
