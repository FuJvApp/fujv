<template>
  <div class="rent map">
    <mt-header fixed>
      <div slot="left">
        <mt-button icon="back" @click="goBack"></mt-button>
        <ul class="tabType">
          <li v-for="(item,index) in homeTypes" @click="tabMap(index+1,item.type)">
            <span :class="types == index+1 ? 'active':''">{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div slot="right">
        <mt-button class="iconfont icon-search" @click="mapSearch"></mt-button>
        <mt-button class="iconfont icon-shaixuan" @click="showTab"></mt-button>
      </div>
    </mt-header>
    <div class="bdmap">
      <bdmap :mapList="mapList" :mapSize="mapSize" :longitude="longitude" :latitude="latitude"></bdmap>
    </div>
    <mt-popup
      v-model="navVisible"
      position="top"
      class="tab-content">
    </mt-popup>
    <div class="homeTypeList" v-if="navVisible">
      <div class="list">
        <ul>
          <li v-for="(item,index) in typeList">
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
      </div>
      <div class="affirm">
        <div class="type-affirm clear-condition" @click="clearMoreSelect">清空条件</div>
        <div class="type-affirm aff" @click="moreTypeSelect()">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        homeTypes: [
          {
            name: '二手房',
            type: 'used'
          },
          {
            name: '新房',
            type: 'new'
          },
          {
            name: '租房',
            type: 'used'
          }],
        types: this.$route.query.types,
        navVisible: false,
        mapSize: '12',
        longitude: 111.6658,
        latitude: 40.83087,
        province: '内蒙古',
        city: '呼和浩特',
        ad: 'area',
        mapList: [],
        navType: 1,
        typeList: [],
        homeType: 'used',
        direction: '',
        built_area: '',
        label: '',
        age: '',
        floor_type: '',
        decoration: '',
        dianti: '',
        m_type: ''
      }
    },
    created () {
      console.log('*' + this.types)
      this.getMapList()
      this.getHomeTypeList()
    },
    methods: {
      showTab () {
        this.navVisible = true
      },
      clearMoreSelect () {
        var ori = document.querySelectorAll('.rent.map .homeTypeList .list .listContent li')
        console.log(ori)
        for (var i = 0; i < ori.length; i++) {
          ori[i].classList.remove('isSelect')
        }
      },
      moreTypeSelect () {
        this.navVisible = false
        var L = 0
        for (var i = 0; i < this.typeList.length; i++) {
          L += this.orientationSelect(i)
        }
        console.log('*' + L)
        this.commentSelect(L)
      },
      orientationSelect (n) {
//        console.log(n)
        var ori = document.querySelectorAll('.rent.map .homeTypeList .list .listContent' + n + ' li')
//        console.log(ori)
        var arr = []
        for (var i = 0; i < ori.length; i++) {
          if (ori[i].className === 'isSelect') {
//            console.log(this.typeList, arr)
            arr.push(this.typeList[n].data[i].value)
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
      mLCSelect (el) {
        if (el.className !== 'isSelect') {
          el.className = 'isSelect'
        } else {
          el.classList.remove('isSelect')
        }
      },
      commentSelect () {},
      getHomeTypeList () {
        var self = this
        this.$api.BasicsDrop({type: this.homeType}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.typeList = res.data.data
          }
        })
      },
      getMapList () {
        var self = this
        var data = {
          types: this.types,
          province: this.province,
          city: this.city,
          ad: this.area
        }
        this.$api.MapMapHouse(data).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.mapList = res.data.datas
            console.log(self.mapList)
          } else {
            console.log(res.msg)
          }
        })
      },
      goBack () {
        this.$router.go(-1)
      },
      tabMap (type, homeType) {
        this.types = type
        this.homeType = homeType
        this.getHomeTypeList()
      },
      mapSearch () {
        this.$router.push({path: '/mapSearch', query: {types: this.types}})
      }
    }
  }
</script>

<style>
  @import '../../../style/zuhome.css';
  .rent.map {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .rent.map .homeTypeList{
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    width: 75%;
    z-index: 9999;
    display: flex;
    text-align: left;
    flex-direction: column;
    animation: showList 1s forwards;
  }
  @-webkit-keyframes showList {
    from{
      right: -100%;
    }
    to{
      right: 0;
    }
  }
  .rent.map .homeTypeList .list{
    flex: 1;
    overflow: auto;
    background-color: #fff;
    padding: .15rem .1rem;
  }
  .rent.map .homeTypeList .list>ul{
    background-color: #fff;
  }
  .rent.map .homeTypeList .list>ul>li{
    border-bottom: 1px solid #eeeeee;
  }
  .rent.map .homeTypeList .list>ul>li p{
    padding: .15rem .1rem;
  }
  .rent.map .homeTypeList .list .listContent{
    padding: .05rem;
  }
  .rent.map .homeTypeList .list .listContent li{
    display: inline-block;
    width: .7rem;
    height: .22rem;
    line-height: .22rem;
    text-align: center;
    border: 1px solid #601986;
    border-radius: .02rem;
    margin: .05rem;
  }
  .rent.map .homeTypeList .list .listContent li.isSelect{
     background-color: #601986;
     color: #fff;
   }
  .rent.map .homeTypeList .affirm{
    width: 100%;
    background-color: #fff;
    display: flex;
    height: .43rem;
    border-top: 1px solid #eeeeee;
    justify-content: space-between;
  }
  .rent.map .homeTypeList .affirm .type-affirm{
    flex: 1;
    line-height: .43rem;
    font-size: .16rem;
    text-align: center;
  }
  .rent.map .homeTypeList .affirm .type-affirm.aff{
    color: #fff;
    background-color: #601986;
    font-weight: bold;
  }
  .rent.map .homeTypeList .affirm .type-affirm.clear-condition{
    color: #999;
  }
  .rent.map .hint{
    position: absolute;
    background-color: rgba(108,42,142,0.9);
    height: .6rem;
    width: 1.2rem;
    color: #fff;
    border-radius: .3rem;
    text-align: center;
    line-height: .6rem;
    white-space: nowrap;
    font-weight: bold;
  }
  .rent.map .hint::after{
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-100%) translateY(-50%) rotateZ(45deg);
    content: '';
    display: block;
    width: 0;
    height: 0rem;
    border: .1rem solid transparent;
    border-right-color: rgba(108,42,142,0.9);
    border-bottom-color: rgba(108,42,142,0.9);
  }
  .rent.map .hint .arrow{
    position: absolute;
    width: .11rem;
    height: .1rem;
    top: .2rem;
    left: .1rem;
    overflow: hidden;
  }
  .rent.map header{
    background-color: #fff;
    border-bottom: 1px solid #eeeeee;
  }
  .rent.map .bdmap{
    flex: 1;
  }
  .rent.map header .iconfont{
    padding: 0 .05rem;
  }
  .rent.map header .tabType{
    flex: 1;
    display: flex;
    justify-content: center;
    height: 100%;
  }
  .rent.map header .tabType li{
    text-align: center;
    flex: 1;
    line-height: .44rem;
    height: .44rem;
  }
  .rent.map header .tabType li span{
    display: inline-block;
    height: .36rem;
  }
  .rent.map header .tabType li span.active{
    border-bottom: 2px solid #c30d23;
    color: #c30d23;
  }
</style>
