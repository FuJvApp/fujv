<template>
  <div>
    <el-tabs class="tabs" type="border-card">
      <el-tab-pane class="lis">
        <span slot="label">区域 <i class="iconfont icon-jiantouxia"></i></span>
        <li>不限</li>
        <li>金城开发区</li>
        <li>如意开发区</li>
        <li>玉泉区</li>
        <li>回民区</li>
        <li>赛罕区</li>
        <li>新城区</li>
      </el-tab-pane>
      <el-tab-pane class="lis">
        <span slot="label">价格 <i class="iconfont icon-jiantouxia"></i></span>
        <li>不限</li>
        <li>50万以下</li>
        <li>50万-100万</li>
        <li>100万-200万</li>
        <li>200万-300万</li>
        <li>300万-400万</li>
        <li>400万-500万</li>
        <li>500万-600万</li>
        <li>600万-700万</li>
        <li>700万-800万</li>
        <li>800万-900万</li>
        <li>900万-1000万</li>
        <li>1000万以上</li>
      </el-tab-pane>
      <el-tab-pane class="lis">
        <span slot="label">房型 <i class="iconfont icon-jiantouxia"></i></span>
        <li>不限</li>
        <mt-checklist
          align="right"
          :options="options"
          v-model="value"></mt-checklist>
        <mt-button class="checklistbtn" size="large">确认</mt-button>
      </el-tab-pane>
      <el-tab-pane class="lis">
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
    const directions = ['东', '南', '西', '北', '南北']
    const builtAreas = ['50以下', '50-70', '70-90', '90-110', '110-130', '130-150', '150-200', '200以上']
    const labels = ['精品房源', '满五唯一']
    const ages = ['10年以内', '15年以内', '20年以内', '20年以上', '5年以内']
    const floorTypes = ['底层', '低楼层', '中楼层', '高楼层', '顶层']
    const decorations = ['毛坯', '简易装修', '精装修', '豪华装修']
    const diantis = ['有电梯', '无电梯']
    const types = ['平层', '复式', '跃层']
    export default{
      data () {
        return {
          value: [],
          direction: [],
          built_area: [],
          label: [],
          age: [],
          floor_type: [],
          decoration: [],
          dianti: [],
          type: [],
          options: [{
            label: '一室',
            value: 'A'
          }, {
            label: '二室',
            value: 'B'
          }, {
            label: '三室',
            value: 'C'
          }, {
            label: '四室',
            value: 'D'
          }, {
            label: '五室',
            value: 'E'
          }, {
            label: '五室以上',
            value: 'F'
          }],
          directions,
          builtAreas,
          labels,
          ages,
          floorTypes,
          decorations,
          diantis,
          types
        }
      }
    }
</script>

<style lang="less" scope>
  @import "tabs.less";
</style>
