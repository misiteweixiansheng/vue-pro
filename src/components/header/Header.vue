<template>
<div class="out-header-wrapper">

 <div id='header-wraper'>
     <!-- <div class="logo" > -->
     <slot name="logo" class="logo"></slot>
         <!-- <div class="search">
         <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png"/>
        <span>搜索商品,共23080款好物</span>
        </div> -->
         <slot name='search' class="search">
         </slot>
     <!-- <div class="button">登录</div> -->
     <slot name="button" class="button"></slot>
 </div>
     <HeaderList v-if="$route.path.match('/home')||$route.path.match('/seegoods')"/>
</div>
</template>

<script>
import HeaderList from "./HeaderList"
export default {
   
   components:{
      HeaderList
   }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
   .out-header-wrapper
      position fixed
      width 100%
      top 0px
      z-index 100
      background #fff
      border-bottom 1px solid #ccc
      #header-wraper
         width 100%
         height 88px
         display flex
         align-items center
         justify-content space-between
         padding 16px 30px
</style>