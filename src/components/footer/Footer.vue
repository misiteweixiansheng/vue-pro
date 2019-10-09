<template>
 <div id="footer-wrapper" :class="{active:zIndex}">
     <nav class="m-tabBar">
         <a href="##"  class="item" @click="goto('/home')">
          <i :class="{active:$route.path.match('/home')}"></i><span :class="{active:$route.path==='/home'}">首页</span>
         </a>
         <a href="##" class="item" @click="goto('/categorys')">
          <i :class="{active:$route.path==='/categorys'}"></i><span :class="{active:$route.path==='/categorys'}">分类</span>
         </a>
         <a href="##" class="item" @click="goto('/seegoods')">
          <i :class="{active:$route.path==='/seegoods'}"></i><span :class="{active:$route.path==='/seegoods'}">识物</span>
         </a>
         <a href="##" class="item" @click="goto('/buyCar')">
          <i :class="{active:$route.path==='/buyCar'}"></i><span :class="{active:$router.path==='/buyCar'}">购物车</span>
         </a>
         <a href="##" class="item" @click="goto('/profile')">
          <i :class="{active:$route.path==='/profile'}"></i><span :class="{active:$route.path==='/profile'}">个人</span>
         </a>
     </nav>
 </div>
</template>
    
<script>

export default {
    data(){
        return {
            selected:[1,2,3,4,5],
            isActive:false,
            zIndex:false
        }
    },
    computed:{
          
    },
    methods:{
        goto(path){
            this.$router.push(path)
          }
        }
    }
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
    #footer-wrapper
      position fixed
      bottom 0
      width 100%
      background #fff
      &.active
        z-index -1
      .m-tabBar
        display flex
        height 98px
        font-size 24px
        border-top 1px solid #d9d9d9
        align-items center
        justify-content space-around
        .item
          display flex
          color #666
          flex-direction column
          align-items center
          justify-content center 
          height 71px
          i 
            width 40px
            height 40px
            margin-top -2px
            background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png) no-repeat
          &:nth-of-type(1)
            i
              background-position 0 -253px
            .active
              background-position 0 -203px
          &:nth-of-type(2)
            i
              background-position 0 -153px
            .active
              background-position 0 -103px    
          &:nth-of-type(3)
            i
                background-position 0 -353px
            .active
              background-position 0 -300px      
          &:nth-of-type(4)
            i
                background-position 0 -53px
            .active
              background-position 0 -3px    
          &:nth-of-type(5)
            i
                background-position 0 -453px
            .active
              background-position 0 -403px          
          span 
            box-sizing border-box
            height 24px
            margin-top -2px
          .active
            color red  

</style>