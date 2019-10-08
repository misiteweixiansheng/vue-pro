<template>
 <div id="wrapper">
     <nav class="m-tabBar">
         <a href="##"  class="item" @click="goto('/home')">
          <i :class="{active:$route.path==='/home'}"></i><span :class="{active:$router.path==='/home'}">首页</span>
         </a>
         <a href="##" class="item" @click="goto('/categorys')">
          <i :class="{active:$route.path==='/categorys'}"></i><span :class="{active:$router.path==='/categorys'}">分类</span>
         </a>
         <a href="##" class="item" @click="goto('/seeGoods')">
          <i :class="{active:$route.path==='/seeGoods'}"></i><span :class="{active:$router.path==='/seeGoods'}">识物</span>
         </a>
         <a href="##" class="item" @click="goto('/buyCar')">
          <i :class="{active:$route.path==='/buyCar'}"></i><span :class="{active:$router.path==='/buyCar'}">购物车</span>
         </a>
         <a href="##" class="item" @click="goto('/profile')">
          <i :class="{active:$route.path==='/profile'}"></i><span :class="{active:$router.path==='/profile'}">个人</span>
         </a>
     </nav>
 </div>
</template>
    
<script>
export default {
    data(){
        return {
            selected:[1,2,3,4,5],
            isActive:false
        }
    },
    methods:{
        goto(route){
            this.$router.push(route)
          }
        }
    }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
    #wrapper
      position fixed
      bottom 0
      width 100%
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
              background-position 0 -200px
          &:nth-of-type(2)
            i
              background-position 0 -153px
            .active
              background-position 0 -100px    
          &:nth-of-type(3)
            i
                background-position 0 -353px
            .active
              background-position 0 -300px      
          &:nth-of-type(4)
            i
                background-position 0 -53px
            .active
              background-position 0 0    
          &:nth-of-type(5)
            i
                background-position 0 -453px
            &:.active
              background-position 0 -254px          
          span 
            box-sizing border-box
            height 24px
            margin-top -2px
          .active
            color red  

</style>