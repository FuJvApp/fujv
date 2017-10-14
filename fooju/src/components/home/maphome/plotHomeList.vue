<template>
    <div class="plot">
      <mt-header>
        <div slot="left">
          <mt-button icon="back" @click="hide"></mt-button>
          <div class="title">{{plotName}}</div>
        </div>
      </mt-header>
      <div class="tab-space">
        <ul class="zu-tab" :class="navVisible ? 'tab-fixed':''">
          <li v-for="(item,index) in navList" @click="changNav(index)">
            {{item.name}}
            <i class="iconfont icon-xia" :class="navType == index && navVisible ? 'isSelect':''"></i>
          </li>
        </ul>
        <ul class="rentList" v-if="navType==0">
          <li @click="rentSelect(null)">不限</li>
          <li v-for="item in navList[0].child" @click="rentSelect(item.id)">
            {{item.area}}
          </li>
        </ul>
        <ul class="typeList" v-if="navType==1">
          <li @click="houseTypeSelect()" style="height: .4rem; line-height: .4rem">不限</li>
          <li v-for="item in navList[1].child">
            <label :for="'a'+item.value">{{item.label}}</label>
            <input type="checkbox" :id="'a'+item.value" @click="typeChange(item.value, $event.target)">
          </li>
          <li class="type-affirm" @click="houseTypeSelect()">确认</li>
        </ul>
        <div class="moreList" v-if="navType==2">
          <ul>
            <li v-for="(item,index) in navList[2].child">
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
      <section>
        <div class="count">共为您找到{{homeCount}}套房源</div>
        <ol class="zu-lists">
          <li v-for="item in plotHomeList">
            <router-link :to="types == 1 ? {name: '',params: {listId: item.id}} : {name: 'rentMsg',params: {listId: item.id}}" class="rec_router">
              <dl>
                <dt>
                  <img :src="'http://www.fooju.cn/'+item.pic" alt="" lazy="loaded">
                </dt>
                <dd>
                  <h3>{{item.title}}</h3>
                  <p>
                    <span>
                    {{item.bedroom}}室{{item.livingroom}}厅{{item.wc}}卫
                    / {{item.built_area}}m² / {{item.direction}}
                  </span>
                  </p>
                  <p class="deploy" v-if="item.property_right&&item.property_right!=''">
                    <span v-for="item in item.property_right.split(';')">{{item}}</span>
                  </p>
                  <p class="rec_jprice">
                    <span v-if="item.total_price">{{item.total_price}}万</span>
                    <span v-if="item.unit_price">{{item.unit_price}}元 / m²</span>
                    <span v-if="item.rent">{{item.rent}}元 / 月</span>
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
      <mt-popup
        v-model="navVisible"
        position="top"
        class="tab-content">
      </mt-popup>
    </div>
</template>

<script>
  export default {
    name: 'plot-data',
    data () {
      return {
        navList: [
          {
            name: '价格',
            child: [
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
            child: this.typeList
          }],
        navType: null,
        homeCount: this.count,
        navVisible: false,
        v_id: this.v_id,
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
        m_type: null
      }
    },
    props: {
      plotHomeList: [],
      typeList: [],
      plotName: '',
      plotVisable: {
        type: Boolean
      },
      count: '',
      types: {
        type: Number
      },
      v_id: '',
      total_price: ''
    },
    created () {
      console.log(111111)
      if (this.types === 3) {
        this.navList[0].name = '租金'
        this.navList[0].child = [
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
      } else if (this.types === 1) {
        this.navList[0].name = '价格'
        this.navList[0].child = [
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
        ]
      }
    },
    methods: {
      moreTypeSelect () {
        var L = 0
        for (var i = 0; i < this.navList[2].child.length; i++) {
          L += this.orientationSelect(i)
        }
        console.log(L)
        this.village = null
        this.commentSelect(L)
      },
      orientationSelect (n) {
        console.log(n)
        var ori = document.querySelectorAll('.plot .moreList .listContent' + n + ' li')
        console.log(ori)
        var arr = []
        for (var i = 0; i < ori.length; i++) {
          if (ori[i].className === 'isSelect') {
            console.log(this.navList[2].child, arr)
            arr.push(this.navList[2].child[n].data[i].value)
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
      clearMoreSelect () {
        var ori = document.querySelectorAll('.plot .moreList .listContent li')
        console.log(ori)
        for (var i = 0; i < ori.length; i++) {
          ori[i].classList.remove('isSelect')
        }
      },
      houseTypeSelect () {
        var checkboxs = document.querySelectorAll('.plot .typeList input')
        var bedroomTypes = []
        for (var i = 0; i < checkboxs.length; i++) {
          if (checkboxs[i].checked) {
            bedroomTypes.push(this.navList[1].child[i].value)
          }
        }
        this.bedroomType = bedroomTypes.join(',')
        console.log(this.bedroomType.length)
        this.commentSelect(this.bedroomType.length)
      },
      rentSelect (id) {
        if (this.types === 3) {
          this.rent = id
        } else if (this.types === 1) {
          this.total_price = id
        }
        this.commentSelect(id)
      },
      commentSelect (id) {
        this.navType = null
        this.navVisible = false
        this.getData()
      },
      getData () {
        var self = this
        var data = {
          v_id: this.v_id,
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
        if (this.types === 3) {
          data.rent = this.rent
          this.$api.retalLists(data).then(function (res) {
            console.log(res.data)
            if (res.data.code === 200 && res.data.data) {
              self.plotHomeList = res.data.data
              self.homeCount = self.plotHomeList.length
              console.log(res.data.data)
            } else if (res.data.code === 101) {
              console.log(res.data.msg)
              self.plotHomeList = []
              self.homeCount = 0
              self.isMore = false
            }
          }).catch(function (e) {
            console.log(e)
            console.log(11111)
          })
        } else if (this.types === 1) {
          data.total_price = this.total_price
          this.$api.usedLists(data).then(function (res) {
            console.log(res.data)
            if (res.data.code === 200 && res.data.data) {
              self.plotHomeList = res.data.data
              self.homeCount = self.plotHomeList.length
              console.log(res.data.data)
            } else if (res.data.code === 101) {
              console.log(res.data.msg)
              self.plotHomeList = []
              self.homeCount = 0
              self.isMore = false
            }
          }).catch(function (e) {
            console.log(e)
            console.log(11111)
          })
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
      hide () {
        this.plotVisable = false
        console.log(this.plotVisable)
        this.$emit('hide')
      }
    },
    watch: {
      types (a, b) {
        console.log(1112111)
        console.log(a)
        console.log(1113111)
        if (a === 3) {
          this.navList[0].name = '租金'
          this.navList[0].child = [
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
        } else if (a === 1) {
          this.navList[0].name = '价格'
          this.navList[0].child = [
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
          ]
        }
      },
      navVisible (a, b) {
        if (!a) {
          this.navType = null
        }
      }
    }
  }
</script>

<style>
  .plot
  .plot .isleft>div{
    display: flex;
    position: relative;
  }
  .plot .title{
    flex: 1;
    text-align: center;
  }
  .plot section{
    box-sizing: border-box;
    padding: .48rem 0 .48rem .15rem;
    height: 100%;
    overflow: auto;
  }
  .plot .count{
    position: absolute;
    top: .88rem;
    background-color: #fff;
    border-bottom: 1px solid #eeeeee;
    border-top: 1px solid #eeeeee;
    height: .48rem;
    width: 100%;
    line-height: .48rem;
    text-align: left;
    margin-left: .15rem;
    font-weight: bold;
  }
</style>
