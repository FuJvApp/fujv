<template>
  <div>
    <el-tabs class="tabs" type="border-card">
      <el-tab-pane class="lis">
        <span slot="label">区域 <i class="iconfont icon-jiantouxia"></i></span>
        <el-form>
          <li>不限</li>
          <li v-for="item in tableData" @click="submit1(item.id)">{{item.area}}</li>
        </el-form>
      </el-tab-pane>
      <el-tab-pane class="lis">
        <span slot="label">价格 <i class="iconfont icon-jiantouxia"></i></span>
        <li v-for="item in totalPrice" @click="submit2(item.total_price)">{{item.name}}</li>
      </el-tab-pane>
      <el-tab-pane class="lis">
        <span slot="label">房型 <i class="iconfont icon-jiantouxia"></i></span>
        <li>不限</li>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="1">一室</el-checkbox>
          <el-checkbox label="2">二室</el-checkbox>
          <el-checkbox label="3">三室</el-checkbox>
          <el-checkbox label="4">四室</el-checkbox>
          <el-checkbox label="5">五室</el-checkbox>
          <el-checkbox label="6">五室以上</el-checkbox>
        </el-checkbox-group>
        <mt-button class="checklistbtn" @click="submit3(checkList)" size="large">确认</mt-button>
      </el-tab-pane>
      <el-tab-pane class="lis" @touchmove.prevent>
        <span slot="label">更多 <i class="iconfont icon-jiantouxia"></i></span>
          <el-checkbox-group v-model="direction">
            <p>朝向</p>
            <el-checkbox-button class="checkboxtbtn" v-for="item in directions" :label="item" :key="item">{{item}}</el-checkbox-button>
          </el-checkbox-group>

          <el-checkbox-group v-model="built_area">
            <p>建筑面积</p>
            <el-checkbox-button class="checkboxtbtn" v-for="item in builtAreas" :label="item" :key="item">{{item}}</el-checkbox-button>
          </el-checkbox-group>

          <el-checkbox-group v-model="label">
            <p>标签</p>
            <el-checkbox-button class="checkboxtbtn" v-for="item in labels" :label="item" :key="item">{{item}}</el-checkbox-button>
          </el-checkbox-group>

          <el-checkbox-group v-model="age">
            <p>房龄</p>
            <el-checkbox-button class="checkboxtbtn" v-for="item in ages" :label="item" :key="item">{{item}}</el-checkbox-button>
          </el-checkbox-group>

          <el-checkbox-group v-model="floor_type">
            <p>楼层</p>
            <el-checkbox-button class="checkboxtbtn" v-for="item in floorTypes" :label="item" :key="item">{{item}}</el-checkbox-button>
          </el-checkbox-group>

          <el-checkbox-group v-model="decoration">
            <p>装修情况</p>
            <el-checkbox-button class="checkboxtbtn" v-for="item in decorations" :label="item" :key="item">{{item}}</el-checkbox-button>
          </el-checkbox-group>

          <el-checkbox-group v-model="dianti">
            <p>是否配备电梯</p>
            <el-checkbox-button class="checkboxtbtn" v-for="item in diantis" :label="item" :key="item">{{item}}</el-checkbox-button>
          </el-checkbox-group>

          <el-checkbox-group v-model="type">
            <p>类型</p>
            <el-checkbox-button class="checkboxtbtn" v-for="item in types" :label="item" :key="item">{{item}}</el-checkbox-button>
          </el-checkbox-group>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    import {RegionLists, usedLists} from '../../../api/config'
    const directions = ['东', '南', '西', '北', '南北']
    const builtAreas = ['50以下', '50-70', '70-90', '90-110', '110-130', '130-150', '150-200', '200以上']
    const labels = ['精品房源', '满五唯一']
    const ages = ['10年以内', '15年以内', '20年以内', '20年以上', '5年以内']
    const floorTypes = ['底层', '低楼层', '中楼层', '高楼层', '顶层']
    const decorations = ['毛坯', '简易装修', '精装修', '豪华装修']
    const diantis = ['有电梯', '无电梯']
    const types = ['平层', '复式', '跃层']
    export default{
      props: {
        rid: {
          type: String
        },
        total_price: {
          type: String
        },
        va: {
          type: Object
        }
      },
      data () {
        return {
          rid: '',
          area: [],
          value: [],
          direction: [],
          built_area: [],
          label: [],
          age: [],
          floor_type: [],
          decoration: [],
          dianti: [],
          type: [],
          tableData: [],
          mainData: [],
          page_size: 5,
          page_num: 1,
          checkList: [],
          totalPrice: [{name: '不限', total_price: ''}, {name: '50万以下', total_price: '1-50'},
          {name: '50万-100万', total_price: '50-100'}, {name: '100万-200万', total_price: '100-200'},
          {name: '200万-300万', total_price: '200-300'}, {name: '300万-400万', total_price: '300-400'},
          {name: '400万-500万', total_price: '400-500'}, {name: '500万-600万', total_price: '500-600'},
          {name: '600万-700万', total_price: '600-700'}, {name: '700万-800万', total_price: '700-800'},
          {name: '800万-900万', total_price: '1'}, {name: '900万-1000万', total_price: '1'},
          {name: '1000万以上', total_price: '1000-9999999999'}],
          directions,
          builtAreas,
          labels,
          ages,
          floorTypes,
          decorations,
          diantis,
          types
        }
      },
      created () {
        this.getData()
        this.getmain()
      },
      methods: {
        getData () {
          var self = this
          RegionLists().then(function (res) {
            if (res.data && res.data.code === 200) {
              self.tableData = res.data.data
            }
          })
        },
        getmain () {
          var self = this
          usedLists({
            page_num: this.page_num,
            page_size: this.page_size
          }).then(function (res) {
            if (res.data && res.data.code === 200) {
              self.mainData = res.data.data
            }
          })
        },
        submit1 (id) {
          this.rid = id
          this.$emit('area', this.rid)
        },
        submit2 (price) {
          this.total_price = price
          this.$emit('price', this.total_price)
        },
        submit3 (v) {
          this.va = v
          console.log(typeof (this.va))
          this.$emit('bed', this.va)
        }
      }
    }
</script>

<style lang="less" scope>
  @import "tabs.less";
</style>
