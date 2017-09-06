<template>
    <div>
      <Swipe class="swipe" :auto="2000">
        <SwipeItem class="swipeItem"><img src="../../assets/lunbotu.png" alt=""></SwipeItem>
        <SwipeItem class="swipeItem"><img src="../../assets/lunbotu.png" alt=""></SwipeItem>
      </Swipe>
    </div>
</template>

<script type="text/ecmascript-6">
  import { Swipe, SwipeItem } from 'mint-ui'
  export default {
    components: {
      SwipeItem,
      Swipe
    }
  }
</script>

<style lang="less">
  .swipe{
    width: 770px;
    height: 475px;
    margin: 0 auto;
    overflow: hidden;
    .swipeItem{
      float: left;
      img{
        width: 770px;
        height:475px;
      }
    }
  }

  footer{width: 100%; display: flex;border-top: 1px solid #cccccc;padding: 10px 0;position: fixed;bottom: 0;  }
  footer a{flex: 1}
</style>
