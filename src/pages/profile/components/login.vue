<template>
 <div class="login-wrapper">
    <ul class="login">
      <li class="logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </li>
      <li class="logintype">
        <input type="text" placeholder="请输入手机号" v-model="phoneNum" v-show="isphone" @input="validate('phoneNum')">
        <input type="text" placeholder="请输入邮箱" v-model="emailNum" v-show="!isphone" @input="validate('emailNum')">
        <span class="phone" v-if="phoneErr||emailErr">
            {{phoneErr?"手机格式错误":"email格式错误"}}
          </span>
      </li>
      <li>
        <input type="password" placeholder="请输入短信验证码" v-show="isphone" v-model="pwd" @input="validate('pwd')">
        <input type="password" placeholder="请输入密码" v-show="!isphone" v-model="pwd" @input="validate('pwd')">
        <input class="checkbtn" type="button" value="获取验证码" v-show="!isphone"/>
      </li>
      <li class="help">
          <span>遇到问题</span>
          <span  @click="goto('phone')" v-show="!isphone">短信快捷登录</span>
          <span  @click="goto('email')" v-show="isphone">使用密码验证登录</span>
          <span class="msgerr" v-show="pwdErr">
            密码格式错误
          </span>
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
import {debounce} from "lodash"
export default {
  data(){
    return {
      isphone:true,
      //密码
      phoneNum:"",
      emailNum:"",
      //密码
      pwd:"",
      phoneErr:false,
      emailErr:false,
      pwdErr:false
    }
  },
  methods:{
    goto(params){
      if(params!=='phone'){
        this.isphone=false
      }else{
        this.isphone=true
      }
      this.phoneNum="",
      this.emailNum="",
      this.pwd=""
      this.$router.push(`/profile/login/${params}`)
    },
    validate:
      debounce(
        function(value){
          if(value==="phoneNum"){
           const regNum=/^1[3-9]\d{9}$/
           const flag=regNum.test(this.phoneNum*1)
           this.phoneErr=!flag
           if(this.phoneNum===""){
             this.phoneErr=false
           }
          }else if(value==="emailNum"){
            const regMail=/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})*)$/
            const mailflag=regMail.test(this.emailNum)
            console.log(mailflag)
            this.emailErr=!mailflag
            if(this.emailErr===""){
             this.emailErr=false
           }
          }else if(value==="pwd"){
             const pwdReg=/\W/
             const pwdFlag = pwdReg.test(this.pwd)
             console.log(pwdFlag)
             this.pwdErr=pwdFlag
             if(this.pwd===""){
             this.pwdErr=false
            }
          }
          },10
        ),
    
  },
  mounted(){

  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    .login-wrapper
      margin-top 150px
      .login
        width 100%
        padding 0 20px
        background #fff
        .logintype
          position relative
         .phone
            font-size 24px
            color red
            position absolute
            left 0
            top 70px
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
        .help
          position relative
          span 
            margin-top 20px
          .msgerr
            position absolute
            left  0px
            top -55px
            color red
            font-size 24px
</style>