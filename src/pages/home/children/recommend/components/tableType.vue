<template>
 <div class="tableList">
   <div class="tb-outer" v-for="(item,index) in categoryModule" :key="index">
    <div class="banner">
      <img src="https://yanxuan.nosdn.127.net/a13e54e6f22d3407bba3daf269283edc.png" alt="">
    </div>
    <div class="list-wrapper" ref="ele">
        <ul class="table-list">
          <li v-for="(ele) in item.itemList" :key="ele.id"><img :src="ele.listPicUrl"><span>{{ele.simpleDesc}}</span><i>￥{{ele.retailPrice}}</i></li>
        </ul>
      </div>
   </div>
 </div>
</template>

<script>
import Bscroll from "better-scroll"
import {mapState} from "vuex"
  export default {
    computed:{
      ...mapState({
         categoryModule:(state)=>state.recommend.categoryModule 
      })
    }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.tableList
  margin-top 50px
  .tb-outer
    .banner
      img
        margin-left 0px
        height 370px
    .list-wrapper
      width 100%  
      display flex  
      .table-list
        display flex
        li
          display flex
          flex-direction column
          justify-content space-around
          padding 30px
          img
            width 200px
            height 200px
          span 
            font-size 24px
          i 
            color red  
</style>