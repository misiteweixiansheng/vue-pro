<template>
 <div class="recom-wrapper">
   <div class="content-wrapper">
      <nav class="swiper-nav">
       <Swiper/>
      </nav>
      <Policy :policyList="homelist.policyDescList"/>
      <KingKongModule :kklist="homelist.kingKongModule"/>
      <IndexActivityModule :activeModule="homelist.indexActivityModule"/>
      <TableList/>
   </div>
 </div>
</template>

<script>
import Swiper from "./components/swiper"
import Policy from "./components/policyList"
import KingKongModule from "./components/kingKongModule"
import IndexActivityModule from "./components/indexActivityModule"
import TableList from "./components/tableType"
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
    IndexActivityModule,
    TableList
  },
  mounted(){
    this.$store.dispatch("getHomeList")
    this.scroll=new Bscroll(".recom-wrapper",{
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