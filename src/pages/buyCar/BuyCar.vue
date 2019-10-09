<template>
 <div class="buycar-wrapper">
   <Header>
      <div slot="logo" class="logo">购物车</div>
      <div slot="button" class="button">领券</div>
   </Header>
    <ul class="listnav" type="circle">
      <li></li>
      <li></li>
      <li></li>
    </ul>
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
      .logo
        width 108px
        height 88px
        line-height 88px
        font-size 35px
      .button
        font-size 30px
        color #b4282d  
</style>