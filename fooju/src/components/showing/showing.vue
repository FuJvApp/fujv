<template>
  <div class="page-navbar">
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div>1</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div>2</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div>3</div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default {
    name: 'page-navbar',
    data () {
      return {
        selected: '1'
      }
    }
  }
</script>
<style>
  .page-navbar{
    flex: 1;
    height: 100%;
  }
</style>
