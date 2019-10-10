<template>
 <div class="recom-wrapper">
   <div class="content">
      <nav class="swiper-nav">
          <Swiper/>
      </nav>
      <Policy :policyList="homelist.policyDescList"/>
      <KingKongModule :kklist="homelist.kingKongModule"/>
      <IndexActivityModule :activeModule="homelist.indexActivityModule"/>
   </div>
 </div>
</template>

<script>
import {reqHome} from "../../../../api"
import Swiper from "./components/swiper"
import Policy from "./components/policyList"
import KingKongModule from "./components/kingKongModule"
import IndexActivityModule from "./components/indexActivityModule"
import {mapState} from "vuex"
import Bscroll from "better-scroll"
export default{
  computed:{
   ...mapState({
      homelist:state=>state.recommend.homelist
   })
  }
  ,
  components:{
    Swiper,
    Policy,
    KingKongModule,
    IndexActivityModule
  },
  mounted(){
    this.$store.dispatch("getHomeList")
    new Bscroll(" .recom-wrapper",{
      click:true
    })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .recom-wrapper
    margin-top 150px
    width 100%
    height 1080px
</style>