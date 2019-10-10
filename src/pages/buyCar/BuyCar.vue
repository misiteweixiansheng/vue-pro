<template>
 <div class="buycar-wrapper">
   <Header>
      <div slot="logo" class="logo">购物车</div>
      <div slot="button" class="button">领券</div>
   </Header>
    <div class="content">
      <ul class="listnav">
      <li>
        <i></i>
        <span>30天无忧退款</span>
      </li>
      <li>
        <i></i>
        <span>30天无忧退款</span>
      </li>
      <li>
        <i></i>
        <span>30天无忧退款</span>
      </li>
    </ul>
      <div class="bottom-car">
        <div class="img-btn">
          <div class="img">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
          去添加点什么吧
          </div>
          <button>
            登录
          </button>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
import Header from "../../components/header/Header"
export default {
  components:{
    Header
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
   .buycar-wrapper
      height 100%
      .logo
        width 108px
        height 88px
        line-height 88px
        font-size 35px
      .button
        font-size 30px
        color #b4282d  
    .content
      margin-top 90px
      height 100%
      .listnav
        width 100%
        line-height 70px
        height 70px 
        display flex
        justify-content space-around
        background #eee
      .bottom-car
        width 100%
        height 100%
        .img-btn
          position absolute
          top 40%
          left 15%
          width 480px
          padding 0 20px
          display flex
          flex-direction column
          .img 
            display flex
            flex-direction column
            justify-content center
            align-items center
            margin-bottom 30px
            img 
              width 250px
              height 250px
          button
            height 92px
            width 480px
            color #fff
            font-size 30px
            border-radius 6px
            background #b4282d
</style>