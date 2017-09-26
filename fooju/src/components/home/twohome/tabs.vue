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
      </el-tab-pane>
      <el-tab-pane class="lis">
        <span slot="label">房型 <i class="iconfont icon-jiantouxia"></i></span>
      </el-tab-pane>
      <el-tab-pane class="lis">
        <span slot="label">更多 <i class="iconfont icon-jiantouxia"></i></span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    export default{}
</script>

<style lang="less" scope>
  @import "tabs.less";
</style>
