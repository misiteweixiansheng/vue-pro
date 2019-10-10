<template>
 <div class="wrapper-route">
   <div class="list-wrapper">
      <div class="swiper">
        <img :src="category.bannerUrl" alt="居家生活大图">
      </div>
      <ul class="list">
        <li class="item" v-for="(item,index) in category.subCateList" :key="index">
          <img :src="item.wapBannerUrl" :alt="item.name">
          <span>{{item.name}}</span>
        </li>
      </ul>
   </div>
 </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
  props:["category"],
  watch:{
    category(){
      this.$nextTick(()=>{
        console.log("sss")
        new BScroll('.wrapper-route',{
          click:true
        })
      }
      )
    }
  },
  mounted(){
      if(this.category.subCateList.length){
        new BScroll('.wrapper',{
          click:true
        })
      }
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