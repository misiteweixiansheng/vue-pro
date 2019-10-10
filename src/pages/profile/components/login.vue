<template>
 <div class="login-wrapper">
    <ul class="login">
      <li class="logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </li>
      <li>
        <input type="text" placeholder="请输入手机号">
      </li>
      <li>
        <input type="text" placeholder="请输入短信验证码" v-show="isphone">
        <input type="text" placeholder="请输入密码" v-show="!isphone">
        <input class="checkbtn" type="button" value="获取验证码" v-show="!isphone"/>
      </li>
      <li class="help">
          <span>遇到问题</span>
          <span  @click="goto('phone')" v-show="!isphone">短信快捷登录</span>
          <span  @click="goto('email')" v-show="isphone">使用密码验证登录</span>
      </li>
      <li>
        <button>登录</button>
      </li>
      <li v-show="!isphone">
        <span>我同意</span>
        <a href="##">《服务条款》</a>
        和
        <a href="##">《网易隐私政策》</a>
      </li>
      <li class="others" @click="$router.replace('/profile')">其他登录方式></li>
    </ul>
 </div>
</template>

<script>
export default {
  data(){
    return {
      isphone:true
    }
  },
  methods:{
    goto(params){
      if(params!=='phone'){
        this.isphone=false
      }else{
        this.isphone=true
      }
      this.$router.push(`/profile/login/${params}`)
    }
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    .login-wrapper
      margin-top 150px
      .login
        width 100%
        padding 0 20px
        background #fff
        li
          width 100%
          height 90px
          font-size 30px
          display flex
          justify-content space-between
          line-height 90px
          text-align center
          margin-bottom 20px
          input 
            width 100%
            height 100%
            border-bottom 1px solid #ccc
          button 
            background #DD1A21
            width 100%
            border-radius 4px
          .checkbtn
            width 167px 
            height 58px
            line-height 58px
            padding 1px 6px
            border-radius 6px
            border 1px solid
            background #fff
            margin-top 10px
        .others
          display block
        .logo
          margin-bottom 100px
          img 
            width 200px
            height 64px  
            margin 0 auto
            
         

</style>