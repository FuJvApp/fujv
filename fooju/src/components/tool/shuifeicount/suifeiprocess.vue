<template>
    <div>
        <span><i class="el-icon-arrow-left"></i></span>
        <el-tabs v-model="activename" @tap-click="">
          <el-tap-pane label="新房" name="1">
            <ul>
              <li>
                <span>建筑面积</span>
                <input type="number" placeholder="请输入大于0的数字">
                <span>平米</span>
              </li>
              <li>
                <span>单价</span>
                <input type="number" placeholder="请输入大于0的数字">
                <span>万元</span>
              </li>
              <li>
                <span>首次购房</span>
                <span>{{number.value}}<i class="el-icon-arrow-right"></i></span>
                <ul>
                  <li v-for='item in number'>{{item}}</li>
                </ul>
              </li>
            </ul>
          </el-tap-pane>
          <el-tap-pane label="二手房" name="2">
            <ul>
              <li>
                <span>适用人群</span>
                <span>买房 <i class="el-icon-arrow-right"></i></span>
                <ul>
                  <li v-for='item in number'>{{item}}</li>
                </ul>
              </li>
              <li>
                <span>适用人群</span>
                <span>买房<i class="el-icon-arrow-right"></i></span>
                <ul>
                  <li v-for='item in number'>{{item}}</li>
                </ul>
              </li>
              <li>
                <span>适用人群</span>
                <span>买房 <i class="el-icon-arrow-right"></i></span>
                <ul>
                  <li v-for='item in number'>{{item}}</li>
                </ul>
              </li>
              <li>
                <span>适用人群</span>
                <span>买房 <i class="el-icon-arrow-right"></i></span>
                <ul>
                  <li v-for='item in number'>{{item}}</li>
                </ul>
              </li>
              <li>
                <span>适用人群</span>
                <span>买房 <i class="el-icon-arrow-right"></i></span>
                <ul>
                  <li v-for='item in number'>{{item}}</li>
                </ul>
              </li>
              <li>
                <span>建筑面积</span>
                <input type="number" placeholder="请输入大于0的数字">
                <span>平米</span>
              </li>
              <li>
                <span>建筑面积</span>
                <input type="number" placeholder="请输入大于0的数字">
                <span>平米</span>
              </li>
            </ul>
          </el-tap-pane>
        </el-tabs>
      <footer>
        <div>
          <button>开始计算</button>
        </div>
        <div>
          税费计算器仅供参考计算，实际由银行评估
        </div>
      </footer>
    </div>
</template>


<script>
  export default{
    data () {
      return {
        activename: '1',
        number: [{name: 1, value: '首套'}, {name: 2, value: '二套'}, {name: 3, value: '三套'}]
      }
    }
  }
</script>


<style lang="less">

</style>
