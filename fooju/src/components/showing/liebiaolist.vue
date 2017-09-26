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
            <div><span>不限</span></div>
            <div><span>金桥开发区</span></div>
            <div><span>如意开发区</span></div>
            <div><span>玉泉区</span></div>
            <div><span>回民区</span></div>
            <div><span>赛罕区</span></div>
            <div><span>新城区</span></div>
          </mt-tab-container-item>
          <mt-tab-container-item id='2'>
            <div><span>不限</span></div>
            <div><span>50万以下</span></div>
            <div><span>50万-100万</span></div>
            <div><span>100万-200万</span></div>
            <div><span>200万-300万</span></div>
            <div><span>300万-400万</span></div>
            <div><span>400万-500万</span></div>
            <div><span>500万-600万</span></div>
            <div><span>600万-700万</span></div>
            <div><span>700万-800万</span></div>
            <div><span>800万-900万</span></div>
            <div><span>900万-1000万</span></div>
            <div><span>1000万以上</span></div>
          </mt-tab-container-item>
          <mt-tab-container-item id='3'>
            <div style="line-height: 40px;border: none"><span>不限</span></div>
            <mt-checklist
              v-model="value"
              align="right"
              :options="options" @change="check">
            </mt-checklist>
          </mt-tab-container-item>
          <mt-tab-container-item id='4'>
            <ul class="direct">
              <li class="direct-li">
                <label>朝向</label>
                <ul class="dir-li-div">
                  <li>东</li>
                  <li>南</li>
                  <li>西</li>
                  <li>北</li>
                  <li>南北</li>
                </ul>
              </li>
              <li class="direct-li">
                <label>朝向</label>
                <el-checkbox-group v-model="dir">
                  <el-checkbox-button v-for="direction in direct" :label="direction" :key="direction">{{direction}}</el-checkbox-button>
                </el-checkbox-group>
              </li>
              <li>3</li>
              <li>4</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </mt-tab-container-item>

        </mt-tab-container>
      </transition>
    </mt-popup>
  </div>
</template>
<script >
  import { usedLists } from '../../api/config.js'
  const directions = ['东', '南', '西', '北']
  export default{
    data () {
      return {
        dir: [],
        direct: directions,
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
  .mint-popup-top{
    width: 100%;
  }
  .mint-tab-container{
    margin-top: 54px;
  }
  .mint-navbar{
    border-bottom: 1px solid rgb(223,223,223);
  }
  .mint-navbar .mint-tab-item.is-selected{
    border: none;
  }
  .mint-navbar .mint-tab-item  .mint-tab-item-label .icon-arrow-bottom{
    transition: all 0.3s;
  }
  .mint-navbar .mint-tab-item.is-selected  .mint-tab-item-label .icon-arrow-bottom{
    display:inline-block;
    transform:rotate(180deg);
  }
  /*.mint-tab-container[data-v-37b24f22] .mint-tab-container-wrap .mint-tab-container-item{
    animation: xiala 3s ease 0s both ;
  }*/
  .mint-tab-container {
    height: 0;
    overflow: visible;
  }
  .mint-tab-container .mint-tab-container-wrap .mint-tab-container-item{
    background-color: white;
    animation: xiala 1s ease 0s both ;
  }
  @keyframes xiala {
    0%{
      transform:translateY(-100%);
      visibility: visible;
    }
    100%{
      transform: translateY(0);
    }
  }
     .mint-tab-container .mint-tab-container-wrap .mint-tab-container-item div{
       width: 100%;
       line-height: 40px;
       border-bottom: 1px solid rgb(233,233,233);
       text-align: left;
     }
  .mint-tab-container .mint-tab-container-wrap .mint-tab-container-item div span{
    margin-left: 20px;
    font-size: 15px;
  }
  .mint-tab-item-label span{
    font-size: 16px;
  }
  .mint-navbar .mint-tab-item.is-selected .mint-tab-item-label span{
    color: rgb(95,25,134);
  }

</style>

