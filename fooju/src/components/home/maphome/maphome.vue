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
        <mt-button class="iconfont icon-search" @click="mapSearch()"></mt-button>
        <mt-button class="iconfont icon-shaixuan" @click="showTab"></mt-button>
      </div>
    </mt-header>
    <div id="bdMap"></div>
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
    <plot-data :v_id="v_id" :types="types" :plotHomeList="plotHomeList" :count="count" :typeList="typeList" :plotName="plotName" @hide="hidePlot()" :plotVisable="plotVisable" class="plot-data" v-if="plotVisable"></plot-data>
  </div>
</template>

<script>
  import BMap from 'BMap'
  export default {
    data () {
      return {
        plotVisable: false,
        plotName: '',
        count: '',
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
        types: 1,
        navVisible: false,
        mapSize: '12',
        longitude: 111.672,
        latitude: 40.85,
        province: '内蒙古',
        city: '呼和浩特',
        ad: 'area',
        mapList: [],
        rent: [],
        rentName: '价格',
        child1: [
          {
            area: '50万以下',
            id: '1-50'
          },
          {
            area: '50万-100万',
            id: '50-100'
          },
          {
            area: '100万-200万',
            id: '100-200'
          },
          {
            area: '200万-300万',
            id: '200-300'
          },
          {
            area: '300万-400万',
            id: '300-400'
          },
          {
            area: '400万-500万',
            id: '400-500'
          },
          {
            area: '500万-600万',
            id: '500-600'
          },
          {
            area: '600万-700万',
            id: '600-700'
          },
          {
            area: '700万-800万',
            id: '700-800'
          },
          {
            area: '800万-900万',
            id: '800-900'
          },
          {
            area: '900万-1000万',
            id: '900-1000'
          },
          {
            area: '1000万以上',
            id: '1000-9999999999'
          }
        ],
        child2: [
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
        ],
        homeList: [],
        plotHomeList: [],
        navType: 1,
        typeList: [],
        homeType: 'used',
        v_id: null,
        direction: null,
        built_area: null,
        building_type: null,
        house_property: null,
        label: null,
        age: null,
        floor_type: null,
        decoration: null,
        dianti: null,
        m_type: null,
        key: this.$route.params.key,
        title: ''
      }
    },
    created () {
      console.log('*1*' + this.$route.params.types)
      if (this.$route.params.types) {
        this.types = this.$route.params.types
      }
      if (this.key) {
        this.getHomeList()
      } else {
        this.getHomeTypeList()
      }
    },
    mounted () {
      if (!this.key) {
        this.getMapList()
      }
    },
    methods: {
      getParams () {
        let routerParams = this.$route.params.key
        this.key = routerParams
        console.log('*121*' + this.key)
        if (this.key) {
          console.log('*11*' + this.key)
          this.getHomeList()
        }
      },
      hidePlot () {
        var plot = document.querySelector('.rent.map .plot-data')
        plot.classList.add('hide-plot')
        setTimeout(function () {
          this.plotVisable = false
        }, 1000)
      },
      showMap (mapList, log, lat) {
        var self = this
        console.log(11111)
        console.log(mapList)
        console.log(11111)
        var bdmap = new BMap.Map('bdMap')
        bdmap.centerAndZoom(new BMap.Point(log, lat), this.mapSize)
//        bdmap.addControl(new BMap.MapTypeControl())
//        bdmap.setCurrentCity('呼和浩特')
//        bdmap.enableScrollWheelZoom()
        console.log(typeof this.types)
        console.log(this.types)
        for (var i = 0; i < mapList.length; i++) {
          var area = mapList[i]
          var text1 = area.area
          var count = '0'
          if (!text1) {
            text1 = area.name
          }
          if (area.count) {
            count = area.count
          }
//          console.log(area)
          var opts = {
            position: new BMap.Point(area.log, area.lat),
            offset: new BMap.Size(-45, -30)
          }
          var str = '套'
          if (this.types === 2) {
            str = '个楼盘'
          }
          var text2 = count + str
          if (this.types === 2 && parseInt(area.id) > 7) {
            text2 = '价格：' + area.average_price + '元/平'
          }
          var label = new BMap.Label(text1 + '<br>' + text2, opts)
          label.setStyle({
            backgroundColor: 'rgba(108,42,142,0.9)',
            height: '.4rem',
            color: '#fff',
            border: 'none',
            borderRadius: '.3rem',
            textAlign: 'center',
            fontWeight: 'bold',
            padding: '.05rem .35rem'
          })
          if (count === '0' && this.types !== 2) {
            label.setStyle({
              display: 'none'
            })
          } else if (this.types === 2 && parseInt(area.id) <= 7 && count === '0') {
            label.setStyle({
              display: 'none'
            })
          }
          bdmap.addOverlay(label)
          label.id = area.id
          label.log = area.log
          label.lat = area.lat
          label.name = area.name
          label.count = count
          label.addEventListener('click', function () {
            console.log(this.id)
            if (parseInt(this.id) <= 7) {
              console.log(typeof self.types)
              self.getHomeList(this.id)
            } else {
              console.log(this.id)
              if (self.types !== 2) {
                self.getPlotData(this.id)
                self.plotVisable = true
                self.plotName = this.name
                self.count = this.count
                setTimeout(function () {
                  var plot = document.querySelector('.rent.map .plot-data')
                  plot.classList.remove('hide-plot')
                }, 1000)
              }
            }
          })
        }
      },
      getPlotData (id) {
        this.v_id = id
        var self = this
        console.log(typeof this.types)
        if (this.types === 1) {
          this.$api.usedLists({v_id: id}).then(function (res) {
            if (res.data && res.data.code === 200) {
              self.plotHomeList = res.data.data
            }
          })
        } else if (this.types === 3) {
          this.$api.retalLists({v_id: id}).then(function (res) {
            if (res.data && res.data.code === 200) {
              self.plotHomeList = res.data.data
            }
          })
        }
      },
      getHomeList (id) {
        var self = this
        this.$api.mapHouseVillage({types: this.types, area: id, key: this.key}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.homeList = res.data.datas
            self.mapSize = '15'
            if (self.key) {
              self.mapSize = '16'
            }
            self.showMap(self.homeList, self.homeList[0].log, self.homeList[0].lat)
          }
        })
      },
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
            if (this.types === 1 || this.types === 3) {
              this.direction = str
            } else {
              this.building_type = str
            }
            break
          case 1:
            if (this.types === 1 || this.types === 3) {
              this.built_area = str
            } else {
              this.house_property = str
            }
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
      commentSelect (id) {
        this.navType = null
        this.navVisible = false
        if (id) {
          this.getMapList()
        }
      },
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
          direction: this.direction,
          built_area: this.built_area,
          label: this.label,
          age: this.age,
          floor_type: this.floor_type,
          decoration: this.decoration,
          dianti: this.dianti,
          type: this.m_type,
          village: this.village,
          types: this.types,
          province: this.province,
          city: this.city,
          ad: this.ad,
          building_type: this.building_type,
          house_property: this.house_property
        }
        this.$api.MapMapHouse(data).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.mapList = res.data.datas
//            console.log(self.mapList)
            self.showMap(self.mapList, self.mapList[0].log, self.mapList[0].lat)
          } else {
            console.log(res.msg)
          }
        })
      },
      goBack () {
        this.$router.push('/home')
      },
      tabMap (type, homeType) {
        console.log(type)
        this.types = type
//        this.key = null
        this.homeType = homeType
        this.mapSize = '12'
        if (this.key) {
          if (this.types !== 2) {
            this.getHomeList()
          }
        } else {
          this.getHomeTypeList()
          this.getMapList()
        }
      },
      mapSearch () {
        this.$router.push({path: '/mapSearch', query: {types: this.types}})
      }
    },
    watch: {
      '$route': 'getParams'
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
  .rent.map .plot-data{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 100%;
    left: 0;
    z-index: 99999;
    background-color: #fff;
    animation: plotshow  1s forwards;
  }
  @keyframes plotshow {
    from{
      top: 100%;
    }
    to{
      top: 0;
    }
  }
  .rent.map .hide-plot{
    animation: plothide  1s forwards;
  }
  @keyframes plothide {
    from{
      top: 0;
    }
    to{
      top: 100%;
    }
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
  .rent.map .BMapLabel::after{
    position: absolute;
    top: 100%;
    left: .25rem;
    transform: translateY(-50%) rotateZ(45deg);
    content: '';
    display: block;
    width: 0;
    height: 0rem;
    border: .08rem solid transparent;
    border-right-color: rgba(108,42,142,0.9);
    border-bottom-color: rgba(108,42,142,0.9);
  }
  .rent.map header{
    background-color: #fff;
    border-bottom: 1px solid #eeeeee;
  }
  #bdMap{
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
