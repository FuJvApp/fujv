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
          <a class="one" href="" ><img src="../../assets/lunbotu.png" alt=""></a>
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
            <div class="w"><span>不限</span></div>
            <div class="w"><span>金桥开发区</span></div>
            <div class="w"><span>如意开发区</span></div>
            <div class="w"><span>玉泉区</span></div>
            <div class="w"><span>回民区</span></div>
            <div class="w"><span>赛罕区</span></div>
            <div class="w"><span>新城区</span></div>
          </mt-tab-container-item>
          <mt-tab-container-item id='2'>
            <div class="w"><span>不限</span></div>
            <div class="w"><span>50万以下</span></div>
            <div class="w"><span>50万-100万</span></div>
            <div class="w"><span>100万-200万</span></div>
            <div class="w"><span>200万-300万</span></div>
            <div class="w"><span>300万-400万</span></div>
            <div class="w"><span>400万-500万</span></div>
            <div class="w"><span>500万-600万</span></div>
            <div class="w"><span>600万-700万</span></div>
            <div class="w"><span>700万-800万</span></div>
            <div class="w"><span>800万-900万</span></div>
            <div class="w"><span>900万-1000万</span></div>
            <div class="w"><span>1000万以上</span></div>
          </mt-tab-container-item>
          <mt-tab-container-item id='3'>
            <div class="c"><span>不限</span></div>
            <mt-checklist
              v-model="value"
              align="right"
              :options="options" @change="check">
            </mt-checklist>
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
        direct0: ['东', '南', '西', '北'],
        direct1: ['50以下', '50-70', '70-90', '90-110', '110-130', '130-150', '150-200', '200以上'],
        direct2: ['精品房源', '满五唯一'],
        direct3: ['10年以内', '15年以内', '20年以内', '20年以上', '5年以内'],
        direct4: ['底层', '低楼层', '中楼层', '高楼层', '顶层'],
        direct5: ['毛坯', '简易装修', '精装修', '豪华装修'],
        direct6: ['有电梯', '无电梯'],
        direct7: ['平层', '复式', '跃层'],
        activeIndex: '1',
        tableData: [],
        selected: '1',
        selected1: '',
        popupVisible: false,
        value: [], // 切记单选按钮是字符串类型
        options: [{
          label: '一室',
          value: 'A'
        },
        {
          label: '二室',
          value: 'B'
        },
        {
          label: '三室',
          value: 'C'
        },
        {
          label: '四室',
          value: 'D'
        },
        {
          label: '五室',
          value: 'E'
        },
        {
          label: '五室以上',
          value: 'F'
        }]
      }
    },
    created () {
      this.getData()
    },
    component: {
    },
    methods: {
      getData () {
        var self = this
        usedLists({page_num: 1, page_size: 30}).then(function (res) {
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
      areafour () {
        this.popupVisible = true
        this.selected = '4'
      },
      check () {
        console.log(this.value)
      }
    }
  }
</script>
<style scoped>
  @import "lbstyle.less";
  .mint-tab-container .mint-tab-container-wrap .mint-tab-container-item .w{
    width: 100%;
    line-height: 40px;
    border-bottom: 1px solid rgb(233,233,233);
    text-align: left;
  }
  .mint-tab-container .mint-tab-container-wrap .mint-tab-container-item .w span{
    margin-left: 20px;
    font-size: 15px;
  }

</style>
<style>
  .mint-tab-container .mint-tab-container-wrap .mint-tab-container-item div[data-v-37b24f22].c{
    text-align: left;
    padding: 10px 0 0 20px;
    line-height: 40px;
    font-size: 16px;
    border-bottom: 1px solid rgb(233,233,233) ;
  }
  /*菜单导航*/
  .mint-tab-item-label span{
    font-size: 16px;
  }
  .mint-navbar .mint-tab-item.is-selected .mint-tab-item-label span{
    color: rgb(95,25,134);
  }
  /*房型*/
  .mint-checklist-label .mint-checkbox-label{
    float: left;
  }
  .mint-cell{
    border-bottom:1px solid rgb(233,233,233) ;
  }
  .direct{
    height: 415px;
    overflow-y: auto;
  }
  .direct .direct-li{
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid rgb(233,233,233);
  }
  .direct .direct-li>label{
    font-size: 14px;
  }
  .mint-tab-container .mint-tab-container-wrap .mint-tab-container-item div[data-v-37b24f22]{
    line-height: 20px;
    border: none;
  }

  .el-checkbox-button{
    margin:10px;
    border: 1px solid rgb(95,25,134);
    border-radius: 5px;
    line-height: 10px;
  }
   .el-checkbox-button.is-checked .el-checkbox-button__inner{
    line-height: 5px;
    background-color: rebeccapurple;
     border: none;
     box-shadow:0 0 0 rgb(95,25,134);
  }
  .el-checkbox-button__inner:hover{
    color: rgb(95,25,134);
  }
  .el-checkbox-button__inner{
    height: 10px;
    line-height: 5px;
    border: none;
    outline: 1px solid rgb(95,25,134);
    border-radius: 5px;
    font-size: 12px;
  }
</style>

