<template>
 <div class="header-list">
    <div class="list-wrapper" :class="{width:$route.path.match('/seegoods')}">
    <ul class="list-header" v-show="isShow||$route.path.match('/seegoods')">
      <li :class="{active:$route.path==='/home/recommend'}" @click="$router.push('/home/recommend')">
        <span class="item">推荐</span>
      </li>
      <li :class="{active:$route.path==='/home/familylife'}" @click="$router.push('/home/familylife')">
        <span class="item">居家生活</span>
      </li>
      <li>
        <span class="item">服饰鞋包</span>
      </li>
      <li>
        <span class="item">美食酒水</span>
      </li>
      <li>
        <span class="item">美食酒水</span>
      </li>
      <li>
        <span class="item">美食酒水</span>
      </li>
      <li>
        <span class="item">美食酒水</span>
      </li>
      <li>
        <span class="item">美食酒水</span>
      </li>
      <li>
        <span class="item">美食酒水</span>
      </li>
    </ul>
     <div class="toggle-header" >
            全部频道
    </div>
    </div>
    <div class="linear-wrap" v-if="!$route.path.match('/seegoods')">
      <div class="linear"></div>
      <div class="arrow" :class="{active:!isShow}"  @click="isShow=!isShow">
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png" alt="">
      </div>
    </div>
      <div class="mask-list" v-show="!isShow&&!$route.path.match('/seegoods')">
        <ul class="open-list" @click="isActive(event)">
              <li class="open-item active" @click="$route.push('/home/recommend')"><span>推荐</span></li>
              <li class="open-item"><span>居家生活</span></li>
              <li class="open-item"><span>居家生活</span></li>
              <li class="open-item"><span>居家生活</span></li>
              <li class="open-item"><span>居家生活</span></li>
              <li class="open-item"><span>居家生活</span></li>
              <li class="open-item"><span>居家生活</span></li>
              <li class="open-item"><span>居家生活</span></li>
              <li class="open-item"><span>居家生活</span></li>
        </ul>
        <div class="cover"></div>
      </div>
 </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data(){
   return {
      isShow:true
    }
   },
   methods:{
      isActive(eve){
        if(eve.target.nodeName==="LI"){

        }
      }
   },
  mounted(){
     new BScroll('.list-wrapper',{
      scrollX:true,
      click:true
      })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.header-list
  width 100%
  .list-wrapper
    width 650px
    overflow hidden
    display flex
    &.width
      width 100%
      background #fafafa
      border-top 1px solid #ccc  
      border-bottom 1px solid #ccc  
    .toggle-header
      height 60px
      padding-left 30px
      font-size 28px
      padding-top 10px
    .list-header
      display flex
      li
        display flex
        white-space:nowrap
        height 60px
        line-height 60px
        margin-left 30px
        padding 0 16px
        justify-content space-between
        align-items center
        .item
          font-size 28px 
          white-space: nowrap
      .active
          color #b4282d
          border-bottom  4px solid #b4282d   
  .linear-wrap
    position fixed
    right 0 
    top 88px   
    display flex 
    width 160px
    height 60px
    .linear
      width 60px
      height 60px
    .arrow 
      width 100px 
      height 60px
      transition .5s
      img 
       display block
       margin 15px auto 0 
       height 50%
    .active
      transform rotate(180deg) 
  .mask-list
    width 100%
    height 312px
    padding-top 24px
    .open-list
      .open-item
        display inline-block
        width 148px
        height 54px
        text-align center
        line-height 54px
        background #fafafa
        border 1px solid #ccc   
        margin 0 0 40px 30px
      .active 
          color #b4282d   
          border-color #b4282d   
    .cover
      position fixed
      top 460px
      background rgba(0,0,0,0.5)
      height 100%
      width 100%
        

</style>