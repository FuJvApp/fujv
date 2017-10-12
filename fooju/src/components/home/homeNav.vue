<template>
    <div>
        <router-view></router-view>
        <footer>
            <router-link to="/home">
                <p class="iconfont icon-shouye"></p>
                <p>首页</p>
            </router-link>
            <router-link to="/tool">
                <p class="iconfont icon-jisuanqi"></p>
                <p>工具</p>
            </router-link>
            <router-link to="/showing">
                <p class="iconfont icon-kanfang"></p>
                <p>看房</p>
            </router-link>
            <router-link to="/self">
                <p class="iconfont icon-wo"></p>
                <p>我</p>
            </router-link>
        </footer>
    </div>

</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style>
  .router-link-active p{color: red}
  footer{
    width: 100%;
    display: flex;
    border-top: 1px solid #cccccc;
    padding: .1rem 0;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  footer a{flex: 1}
  footer .iconfont{font-size: .1rem;font-weight: bold;}
    .router-link-active p{color: red}
    footer{
      width: 100%;
      display: flex;
      border-top: 1px solid #cccccc;
      background: white;
      padding: .01rem .01rem;
      position: fixed;
      bottom: 0;
      left: 0;
    }
    footer a{flex: 1}
    footer .iconfont{font-size: .2rem;padding: .01rem;font-weight: bold;}
</style>
