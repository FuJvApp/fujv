<template>
<div class="page-show">
  <header>
    <span @click="date">看房日程</span>
    <span @click="Records()">看房记录</span>
  </header>
  <main>
    <template>
     <router-view></router-view>
    </template>
  </main>
</div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      date () {
        this.$router.push('/date1')
      },
      Records () {
        this.$router.push('/date2')
      }
    }
  }
</script>
<style scoped="">
.page-show{
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}
  header{
    line-height: 50px;
    display: flex;
    justify-content: space-around;
  }
header span:hover{
  color: red;
  border-bottom: 3px solid red;
}
</style>
