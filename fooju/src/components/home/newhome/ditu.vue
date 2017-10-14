<template>
    <div class="map">
      <header>
        <a href="#newhome" class="huanhui">
          <i class="el-icon-arrow-left"></i>
        </a>
        <el-tabs v-model="types" @tab-click="handleClick">
          <el-tab-pane label="二手房" name="1" ></el-tab-pane>
          <el-tab-pane label="新房" name="2" >2</el-tab-pane>
          <el-tab-pane label="租房" name="3" >3</el-tab-pane>
        </el-tabs>
        <div class="tool">
        <a href="#sousuo">
          <i class="el-icon-search"></i>
        </a>
        <a href="" @click.prevent="tool2">
          <i class="iconfont icon-loudou"></i>
        </a>
        </div>
        <!--<el-popover v-model="toolvisible" placement="right">123456</el-popover>-->
        <mt-popup
          class="ditupopup"
          v-model="popupVisible"
          position="right">
          123456
        </mt-popup>
      </header>
      <main class="baiduMap" id="allmap"></main>
    </div>
</template>


<script>
  import {navbar, tabitem, popup} from 'mint-ui'
  import {maphouse, mapvillage} from '../../../api/config'
  export default{
    data () {
      return {
        types: '1',
        area: '',
        mapdata: [],
        size: 13,
        toolvisible: false,
        popupVisible: false
      }
    },
    components: {
      navbar,
      tabitem,
      popup
    },
    mounted () {
      this.getdata()
    },
    methods: {
      baiduMap () {
        var self = this
        var label = ''
        var map = new BMap.Map('allmap')
        // var point = new BMap.Point(111.671852, 40.863137)
//        function add (n) {
//          var label = new BMap.Label(n)
//          map.addOverlay(label)
//        }
        var firstpoint = new BMap.Point(self.mapdata[0].log, self.mapdata[0].lat)
        map.centerAndZoom(firstpoint, self.size)
        for (var i = 0; i < self.mapdata.length; i++) {
//          console.log(self.mapdata[i].log)
          var point = new BMap.Point(self.mapdata[i].log, self.mapdata[i].lat)
          var pots = {
            position: point,
            offset: new BMap.Size(-15, -55)
          }
          if (self.area === 1 && self.types === '1') {
            label = new BMap.Label(self.mapdata[i].name + '<br>' + self.mapdata[i].count + '套', pots)  // 创建标注
            label.addEventListener('click', this.popup1)
          } else if (self.types === '2' && self.area === 1) {
            label = new BMap.Label(self.mapdata[i].name + '<br>' + self.mapdata[i].average_price + '元/平', pots)  // 创建标注
          } else if (self.types === '3' && self.area === 1) {
            label = new BMap.Label(self.mapdata[i].name + '<br>' + self.mapdata[i].count + '套', pots)  // 创建标注
          } else if (self.area === '') {
            console.log(self.mapdata)
            label = new BMap.Label(self.mapdata[i].area + '<br>' + self.mapdata[i].count + '套', pots)  // 创建标注
            label.addEventListener('click', this.getdata2)
          }
          label.setStyle({
            borderRadius: '20px',
            whiteSpace: 'normal',
            lineHeight: '16px',
            width: '60px',
            padding: '10px',
            background: '#6b2a8d',
            color: 'white',
            textAlign: 'center'
          })
          map.addOverlay(label)
        }
        map.enableScrollWheelZoom(true)
      },
      getdata () {
        var self = this
        maphouse({types: self.types, province: '内蒙古', city: '呼和浩特', ad: 'area'}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.mapdata = res.data.datas
            self.size = 13
            console.log(self.mapdata)
            self.baiduMap()
          }
        })
      },
      getdata2 () {
        var self = this
        this.area = 1
        mapvillage({types: self.types, area: 1}).then(function (res) {
          if (res.data && res.data.code === 200) {
            self.size = 16
            self.mapdata = res.data.datas
            self.baiduMap()
          }
        })
      },
      popup1 () {
        console.log(111)
      },
      handleClick () {
        console.log(this.types)
        this.area = ''
        this.getdata()
      },
      tool2 () {
        this.toolvisible = true
        this.popupVisible = true
      }
    }
  }
</script>


<style lang="less">
  header{
    height: 48px;
    line-height: 48px;
    position: relative;
    .huanhui{
      position: absolute;
      top: 0;
      left: 20px;
      z-index: 2;
    }
    .tool{
      position: absolute;
      top: 0;
      right: 20px;
    }
    .el-tabs__nav-scroll{
      .el-tabs__nav{
        top:50%;
        left: 50%;
        transform: translate(-50%);
        .el-tabs__active-bar{
          left: auto;
        }
      }
    }
    .ditupopup{
      height: 100%;
      /*transition: width 10s;*/
      animation: move 2s ease-in 0s forwards;
    }
    @keyframes move {
      0%{
        width: 0;
      }
      100%{
        width: 200px;
      }
    }
  }
  .map{
    height: 100%;
  }
  .baiduMap{
    width: 100%;
    height: 100%;
    .BMapLabel:after{
      content:'';
      width:0;
      height: 0;
      border: 10px solid transparent;
      border-top-color: #6b2a8d;
      position: absolute;
      top:100%;
      left: 15px;
    }
  }
</style>
