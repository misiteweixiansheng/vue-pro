<template>
 <div class="wrapper-route">
   <div class="list-wrapper" v-if="item.subCateList">
      <div class="swiper">
        <img :src="item.bannerUrl" alt="居家生活大图">
      </div>
      <ul class="list" >
        <li class="item" v-for="(ele,index) in item.subCateList" :key="index">
          <img :src="ele.wapBannerUrl" :alt="ele.name">
          <span>{{ele.name}}</span>
        </li>
      </ul>
      <ul class="list" >
        <li class="item" v-for="(ele,index) in item.subCateList" :key="index">
          <img :src="ele.wapBannerUrl" :alt="ele.name">
          <span>{{ele.name}}</span>
        </li>
      </ul>
   </div>
 </div>
</template>
<script>
import BScroll from "better-scroll"
import {mapState} from "vuex"
export default {
  computed:{
  ...mapState({
    item:(state)=>state.categorylist.item
  })
  },
  watch:{
    item(){
      this.$nextTick(()=>{
        new BScroll('.wrapper-route',{
          click:true
          })
        }
      )
    }
  },
  mounted(){
      this.$nextTick(
        ()=>{ 
          new BScroll('.wrapper',{
            click:true
          })
        }
      )
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .wrapper-route
    width 100%
    height 1200px
    .list-wrapper
      .swiper
        width 100%
        margin-bottom 20px
        img 
          display block
          height 190px
          width 100%
      .list
        display flex
        flex-wrap wrap
        .item
          display flex
          flex-direction column
          width 143px
          img 
            width 143px
          span 
            text-align center

</style>