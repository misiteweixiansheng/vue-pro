<template>
 <div class="kingkong-wrapper">
    <ul>
      <li v-for="(item,index) in kklist.kingKongList" :key="index">
        <a href="##">
          <img :src="item.picUrl" alt="">
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
 </div>
</template>

<script>
export default {
  props:{
    kklist:Object
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .kingkong-wrapper
    width 100%
    height 341px
    border-top 1px solid #ccc
    ul
      width 100%
      display flex
      justify-content space-around
      flex-wrap wrap
      padding-bottom 32px
      li
        width 110px
        height 156px
        margin 10px 20px 9px 20px
        img 
          width 110px
        span 
          color #000
        
</style>