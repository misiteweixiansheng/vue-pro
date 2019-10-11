<template>
 <div class="profile-wrapper" :class="{bg:$route.path==='/profile'}">
    <div class="wrapper" >
      <Header class="header-nav">
        <div slot="logo" class="logo" @click="$router.replace('/home')">
        </div>
        <div slot="search" class="nav">
         <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
        </div>
        <div slot="button" class="button">
          <router-link class="search" to="/search"></router-link>
          <router-link class="buycar" to="/buycar"></router-link>
        </div>
      </Header>
      <div class="content" v-if="$route.path==='/profile'">
          <div class="title">
            <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="bottom-login" >

          <div class="phoneLogin" @click="$router.push('/profile/login/phone')">
            <i class=" iconfont icon-phone"></i>
            手机号码登录
          </div>
          <div class="mailLogin" @click="$router.push('/profile/login/email')">
            <i class="iconfont icon-email"></i>
            邮箱账号登录
          </div>
          <div class="fastlogin">
            手机号快捷注册>
          </div>
          <div class="loginList">
            <span>
              <i class="iconfont icon-weixin"></i>
              微信
            </span>
            <span>
              <i class="iconfont icon-qq"></i>
              QQ
            </span>
            <span>
              <i class="iconfont icon-tubiao214"></i>
              微博
            </span>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from "../../components/header/Header"
export default {
  components:{
    Header
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .profile-wrapper
    height 100%
    &.bg
      background #f2f5f4
    .wrapper
      border-top 1px solid #ccc
      .header-nav
      .nav
        font-size 28px
      .logo
        width 50px
        height 50px
        background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMAcNAP9uD9Bfrx5B8v6LSdTgr37N/Uxb14Gtm5r6aVjWhgVTkUgTYpp0pCSlNj4QAAATNJREFUSMfd0+tugyAYBmAUREXtwbNW7Vptu+29//tbsolkahSTbVn6/oM8An4fkKeLL4Kjvn5zgbTT1S8ccYTS08J2A2TUKyF8DX3cAXubkC6F+76qPRPI5XfOda0kAZg09h4wFvWBIbir4Q04L2iDI/FGNXq1J0xtfqKT7TI6q+kJaCZLtRHMYq4kCfjcjz0sWI/J7D0AO5C5FCaidjR3ZaqJ01OOV8qhTjiNXYPn30uyW7ywZ6gG0AyobbKYCth/Ea8EFwZZjgHeH6CCe8M6b1zsPhtd+4YGN/y4koNFrsSf8zZGn+CgwTNYfXiiwU3I++1av8qFBo8VZxqcDZw5m7izjXM93m3hEbwtPEEhebip7qH4ma5eIEyZ0JGvXDjmEIGL4jTFkDAfFmFQSSn5d/kA8eoi0xqdj94AAAAASUVORK5CYII=") no-repeat
        .find
            color #7f7f7f
            margin 0 20px
        .selected
            color #7f7f7f
            margin 0 20px
        .active
            color #b4282d
            font-weight 700
            font-size 40px
      .button
        display flex
        justify-content space-between
        align-items center
        width 120px
        height 50px
        .search
          width 50px
          height 50px
          background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAKlBMVEUAAAA0NDQ0NDQ0NDQ0NDQ0NDQzMzMUFBQ0NDROTk4zMzMzMzMzMzM2NDTc2xHNAAAADXRSTlMAbezXT6YsFM0O+L+FggY9rwAAAP5JREFUOMtjIBOwiTat0ghMQBeeaHsXBC5Logoz6l4KTGcoE9W9JIBiSO9tBzCDZe8NZKOcLgOFIRK2KghhlrWRcPbUWw5wttcdJL1nl8BN1z2AJM5zCWYDx1UUt8U2QBmylijiky9CaE5dBxRxlksTIH66jeb3vRC/MV9BE/c1AFO5CmjiTNcg1gagibNCLI4VQBNnhLi7NwE9Km6AKd0CNHH2S2BqLUbc3cIljsscXPbicicuf+EKB1zhhiuc8cYLZjzij3fMdII9XV3Bng7vXi7Amm4Vbc2xp/NisAbMfMEO0YCZj8AaMPMdTAMmQGhAAPwabmAXZ+9mIBUAAIJuXNa9gIYoAAAAAElFTkSuQmCC") no-repeat
        .buycar
          width 50px
          height 50px
          background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAk1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM1idyXAAAAMHRSTlMAYbmIKS7ss/BPwREDeAjlt52EIc3HQTs3JRv53djTjn5XFQ2+p6JH9K+XZDJzb12hgxUyAAABlElEQVRIx82V23KCMBCGV8AYAgLlrChaz4ce/vd/utopKks10YvO9LvaMN+E7OZnoP9FCGDgPKzv63SC1KPHWWQ40hMcMXtG32JTHHtGkkbvV1EEM1mje5n8eLf1xLYANRzwSkamu3P1gdhoFyI9ly4GgUn/rNbnsi/DkUkfXk/gZchN+gt6l/pwqg2sUFzqd9gG20+R0LXXaKnXk4kYXxZ9Yeo1l9k1tkuFQq/3sAlafZvuNcbc51PVsmH7ubD0vVooWysnlNpegxROe6lQ6vRR2Jqjude8Uh5PkK0P2EtArNf92rqP6LzcCScSGuYBj5CC69xn5BNnDZeeYA7bf0J3qxXXjYHO+/dIfu+U4T5VvOgeRqC2UkCsB20UIL7HvvKYPQ4xW9Byjqnf+SzqnKioMQv4LUdNdmZsFynKn69zN2IRa8ZewmKXjdVPEeHtth5xXd3Uh82um85hhCzoxJuQCftBTXAYkxdDsMf+qfct0XYKm2dsu8NU1cAnMZYDSKUELI845R6AlVMHbygAOVzQn/MFg0s1dXIHznQAAAAASUVORK5CYII=") no-repeat
    .content
      text-align center
      margin-top 90px
      .title
        height 410px
        width 100%
        text-align center
        margin-top 140px
        margin-bottom -70px
        line-height 410px
        img 
          width 268px 
          height 90px
      .bottom-login
        height 690px
        padding 40px
        .phoneLogin,.mailLogin,.fastlogin
          margin-bottom 20px
          width 100%
          height 100px
          background #b4282d
          border-radius 4px
          line-height 100px
          font-size 28px
          color #fff
          vertical-align center
        .mailLogin
            background #fff
            color #b4282d
            border 1px solid #b4282d
        .fastlogin
            background #f2f5f4
            color #000
        .loginList
            position fixed
            bottom 100px
            width 100%
            display flex
            justify-content space-around
</style>