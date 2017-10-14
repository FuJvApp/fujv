<template>
    <div class="follow">
      <mt-header fixed>
        <div slot="left">
          <mt-button icon="back" @click="goBack"></mt-button>
          <ul class="tabType">
            <li v-for="(item,index) in homeTypes" @click="tabMap(index+1,item.type)">
              <span :class="types == index+1 ? 'active':''">{{item.name}}</span>
            </li>
          </ul>
        </div>
        <div slot="right">
          <mt-button @click="mapSearch">编辑</mt-button>
        </div>
      </mt-header>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        homeTypes: []
      }
    }
  }
</script>

<style>

</style>
