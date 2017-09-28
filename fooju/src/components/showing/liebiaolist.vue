<template>
  <div class="nav">
    <header>
      <a href="" @click.prevent="$router.go(-1)"><</a>
      <img src="../../assets/imgwqn/lookhome/sousuo.png" @click.prevent="sousuoone" alt="">
      <img src="../../assets/imgwqn/lookhome/ditu.png" alt="">
    </header>
    <main>
      <div class="block">
        <el-carousel height="261px">
          <el-carousel-item v-for="item in 2" :key="item">
            <!-- <h3>{{ item }}</h3>-->
          </el-carousel-item>
        </el-carousel>
      </div>
      <ul class="biu">
        <li @click="areaone">区域<i class="iconfont icon-arrow-bottom"></i></li>
        <li @click="areatwo">价格<i class="iconfont icon-arrow-bottom"></i></li>
        <li @click="areathree">房型<i class="iconfont icon-arrow-bottom"></i></li>
        <li @click="areafour">更多<i class="iconfont icon-arrow-bottom"></i></li>
      </ul>
      <ul class="lie-list">
        <li v-for="data in tableData">
          <a class="one" href="" ><img :src="'http://www.fooju.cn/'+data.pic" alt=""></a>
          <a class="two" href="">
            <p>{{data.village}}</p>
            <p>{{data.bedroom}}室{{data.livingroom}}厅{{data.wc}}卫/{{data.built_area}}㎡/{{data.direction}}</p>
            <p><b style="color: #c30d23">{{data.total_price}}万&nbsp</b> <span style="color: #999;font-size: 12px">{{data.unit_price}}元/㎡</span></p>
          </a>
        </li>
      </ul>
    </main>
    <mt-popup
      v-model="popupVisible"
      position="top">
      <!-- navbar -->
      <mt-navbar class="page-part" v-model="selected" fixed="true">
        <mt-tab-item id="1"><span>区域</span> <i class="iconfont icon-arrow-bottom"></i></mt-tab-item>
        <mt-tab-item id='2'><span>价格</span><i class="iconfont icon-arrow-bottom"></i></mt-tab-item>
        <mt-tab-item id='3'><span>房型</span><i class="iconfont icon-arrow-bottom"></i></mt-tab-item>
        <mt-tab-item id='4'><span>更多</span><i class="iconfont icon-arrow-bottom"></i></mt-tab-item>
      </mt-navbar>
      <!-- tabcontainer -->
      <transition class="fade">
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <div class="w" v-for="liuni in wlie" :key="wlie"><span>{{liuni.name}}</span></div>
          </mt-tab-container-item>
          <mt-tab-container-item id='2'>
            <div class="w" v-for="liuni in wlie1" :key="wlie1"><span>{{liuni.name}}</span></div>
          </mt-tab-container-item>
          <mt-tab-container-item id='3'>
            <div class="w"><span>不限</span></div>
            <div class="w" v-for="liuni in wlie2" :key="wlie2" @click="change(liuni.bedroom)"><span>{{liuni.name}}</span> <aside :class="bdmIndex.indexOf(liuni.bedroom) !== -1 ? 'style2':''">√</aside></div>
            <div class="w" :style="style1"><span style="margin: 0">确认</span></div>
          </mt-tab-container-item>
          <mt-tab-container-item id='4'>
            <ul class="direct" >
              <li class="direct-li">
                <label>朝向</label>
                <el-checkbox-group v-model="dir">
                  <el-checkbox-button v-for="direction in direct0" :label="direction" :key="direction">{{direction}}</el-checkbox-button>
                </el-checkbox-group>
              </li>
              <li class="direct-li">
                <label>建筑面积</label>
                <el-checkbox-group v-model="dir">
                  <el-checkbox-button v-for="direction in direct1" :label="direction" :key="direction">{{direction}}</el-checkbox-button>
                </el-checkbox-group>
              </li>
              <li class="direct-li">
                <label>标签</label>
                <el-checkbox-group v-model="dir">
                  <el-checkbox-button v-for="direction in direct2" :label="direction" :key="direction">{{direction}}</el-checkbox-button>
                </el-checkbox-group>
              </li>
              <li class="direct-li">
                <label>房龄</label>
                <el-checkbox-group v-model="dir">
                  <el-checkbox-button v-for="direction in direct3" :label="direction" :key="direction">{{direction}}</el-checkbox-button>
                </el-checkbox-group>
              </li>
              <li class="direct-li">
                <label>楼层</label>
                <el-checkbox-group v-model="dir">
                  <el-checkbox-button v-for="direction in direct4" :label="direction" :key="direction">{{direction}}</el-checkbox-button>
                </el-checkbox-group>
              </li>
              <li class="direct-li">
                <label>装修情况</label>
                <el-checkbox-group v-model="dir">
                  <el-checkbox-button v-for="direction in direct5" :label="direction" :key="direction">{{direction}}</el-checkbox-button>
                </el-checkbox-group>
              </li>
              <li class="direct-li">
                <label>是否配备电梯</label>
                <el-checkbox-group v-model="dir">
                  <el-checkbox-button v-for="direction in direct6" :label="direction" :key="direction">{{direction}}</el-checkbox-button>
                </el-checkbox-group>
              </li>
              <li class="direct-li">
                <label>类型</label>
                <el-checkbox-group v-model="dir">
                  <el-checkbox-button v-for="direction in direct7" :label="direction" :key="direction">{{direction}}</el-checkbox-button>
                </el-checkbox-group>
              </li>
              <li class="direct-li" :style="style1"><span>清空条件</span></li>
              <li class="direct-li" :style="style1">确定</li>
            </ul>
          </mt-tab-container-item>

        </mt-tab-container>
      </transition>
    </mt-popup>
  </div>
</template>
<script >
  import { usedLists } from '../../api/config.js'
  export default{
    data () {
      return {
        dir: [],
        bdmIndex: [],
        direct0: ['东', '南', '西', '北'],
        direct1: ['50以下', '50-70', '70-90', '90-110', '110-130', '130-150', '150-200', '200以上'],
        direct2: ['精品房源', '满五唯一'],
        direct3: ['10年以内', '15年以内', '20年以内', '20年以上', '5年以内'],
        direct4: ['底层', '低楼层', '中楼层', '高楼层', '顶层'],
        direct5: ['毛坯', '简易装修', '精装修', '豪华装修'],
        direct6: ['有电梯', '无电梯'],
        direct7: ['平层', '复式', '跃层'],
        wlie: [{name: '不限', r_id: 0}, {name: '金桥开发区', r_id: 1}, {name: '如意开发区', r_id: 2}, {
          name: '玉泉区',
          r_id: 3
        }, {name: '赛罕区', r_id: 4}, {name: '新城区', r_id: 5}],
        wlie1: [{name: '不限', total_price: 0}, {name: '50万以下', total_price: 1}, {
          name: '50万-100万', total_price: 2
        }, {name: '100万-200万', total_price: 3}, {name: '200万-300万', total_price: 4}, {
          name: '300万-400万',
          total_price: 5
        }, {name: '400万-500万', total_price: 6}, {name: ' 500万-600万', total_price: 7}, {
          name: '400万-500万',
          total_price: 8
        }, {name: '600万-700万', total_price: 9}, {name: '700万-800万', total_price: 10}, {
          name: '800万-900万',
          total_price: 11
        }, {name: '900万-1000万', total_price: 12}, {name: '1000万以上', total_price: 13}],
        wlie2: [{name: '一室', bedroom: 0}, {name: '二室', bedroom: 1}, {name: '三室', bedroom: 2}, {
          name: '四室',
          bedroom: 3
        }, {name: '五室', bedroom: 4}, {name: '五室以上', bedroom: 5}],
        activeIndex: '1',
        tableData: [],
        selected: '1',
        selected1: '',
        popupVisible: false,
        style1: {textAlign: 'center', backgroundColor: 'darkviolet'}
      }
    },
    created () {
      this.getData()
    },
    component: {},
    methods: {
      getData () {
        var self = this
        usedLists({
          page_num: 1,
          page_size: 30,
          r_id: this.r_id,
          total_price: this.total_price
        }).then(function (res) {
          console.log(res)
          if (res.data && res.data.code === 200) {
            self.tableData = res.data.data
            console.log(self.tableData)
          }
        })
      },
      sousuoone () {
        this.$router.push('/searchOne')
      },
      areaone () {
        this.popupVisible = true
        this.selected = '1'
      },
      areatwo () {
        this.popupVisible = true
        this.selected = '2'
      },
      areathree () {
        this.popupVisible = true
        this.selected = '3'
      },
      change (id) {
        var self = this
        if (Array.isArray(self.bdmIndex) && self.bdmIndex.indexOf(id) === -1) {
          // indexOf的-1表示数组中没有这个项，如果有则返回项的索引值
          self.bdmIndex.push(id)
        } else {
          self.bdmIndex.splice(self.bdmIndex.indexOf(id), 1)
          // splice表示删除第几个开始的某些项
        }
      }
    }
  }
</script>
<style scoped>
  @import "lbstyle.less";
  /*区域，价格*/
  .mint-tab-container .mint-tab-container-wrap .mint-tab-container-item .w{
    width: 100%;
    line-height: 40px;
    border-bottom: 1px solid rgb(233,233,233);
    text-align: left;
  }
isselect{
  background-color:  rgb(95,25,134);
}
  .style2{
    background-color:rgb(95,25,134) ;
  }
</style>
<style>
  @import "lbstyle.less";
</style>

