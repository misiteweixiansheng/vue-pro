<template>
 <div class="wrapper">
   <h2>— 新人专享礼 —</h2>
   <ul class="indexModule">
     <li>
       <div>新人专享礼包</div>
       <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
     </li>
     <li>
       <div class="top">
         <p>福利社<br/>今日特价</p>
         <span></span>
         <img src="http://yanxuan.nosdn.127.net/aa2bbfa0e4f63160b454c67c911c9290.png" alt="">
       </div>
       <div class="bottom">
         <p>新人拼团<br/>1元起包邮</p>
         <img src="http://yanxuan.nosdn.127.net/f608f7868d43c5ac67fc03189b07c589.png" alt="">
       </div>
     </li>
   </ul>
 </div>
</template>

<script>
export default {
  props:["activeModule"]
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    .wrapper
      width 100%
      height 528px
      padding-bottom 30px
      padding-left 30px
      margin 20px 0
      h2
        width 100%
        height 90px
        line-height 90px
        font-size 30px
        font-weight 400
        text-align center
      ul
        display flex
        justify-content space-between
        width 100%
        height 100%
        margin-bottom 90px
        li
          height 434px
          width 343px
          &:nth-child(1)
            background #f9e9c9
            div
              margin 30px 0 0 30px
              font-size 30px
            img 
              display block
              width 258px
              margin 40px auto 50px
          &:nth-child(2)
            display flex  
            margin-right 15px
            flex-direction column
            justify-content space-around
            .top
              height 50%
              margin-bottom 5px
              background #fbe2d3
              img 
                width 200px
                height 200px
                position relative
                left 100px
                bottom 40px
            .bottom
              height 50%
              background #ffecc2
              img 
                width 200px
                height 200px
                position relative
                left 100px
                bottom 80px
              
              
</style>