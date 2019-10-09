<template>
 <div class="home-wrapper">
    <Header>
      <div slot='logo' class="logo"></div>
      <div slot='search' class="search">
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png"/>
         <span>搜索商品,共23080款好物</span>
      </div>
      <div slot='button' class="button">登录</div>
     </Header>
     <router-view></router-view>
 </div>
</template>

<script>
import Header from "../../components/header/Header"
import Recommend from "./children/recommend/recommend"
import FamilyLife from "./children/family-life/family-life"
export default {
  components:{
    Header,
    Recommend,
    FamilyLife
  },
  mounted(){
   
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    .home-wrapper 
       width 100%
       height 100%
      .logo
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png") no-repeat
        width 138px
        height 40px
      .search
        width 442px
        height 56px
        line-height 56px
        font-size 28px
        text-align center
        background #ededed
        border-radius 8px
        img 
         margin-right 10px
         padding-top 10px
      .button
        width 74px
        height 40px
        border-radius 8px
        text-align center
        border 1px solid #b4282d
        color  #b4282d  
</style>