<template>
 <div class="recom-wrapper">
   <div class="content">
      <nav class="swiper-nav">
          <Swiper/>
      </nav>
      <Policy :policyList="policyList"/>
   </div>
 </div>
</template>

<script>
import {reqHome} from "../../../../api"
import Swiper from "./components/swiper"
import Policy from "./components/policyList"
export default{
  data(){
    return {
      policyList:[]
    }
  },
  components:{
    Swiper,
    Policy
  },
 async mounted(){
    let result=await reqHome()
      console.log(result)
    if(result.data&&result.data.policyDescList.length>0){
      this.policyList=result.data.policyDescList
      console.log(this.policyList)
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .recom-wrapper
    margin-top 150px
    width 100%
    height 100%
</style>