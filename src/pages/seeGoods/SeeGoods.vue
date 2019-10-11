<template>
    <div class="wrapper">
      <Header>
        <div slot="logo" class="logo" @click="$router.replace('/home')">
        </div>
        <div slot="search" class="nav">
         <router-link class="find active" to="/seegoods">发现</router-link>
         <router-link class="selected" to="/selected">甄选家</router-link>
        </div>
        <div slot="button" class="button">
          <router-link class="search" to="/search"></router-link>
          <router-link class="buycar" to="/buycar"></router-link>
        </div>
      </Header>
      <div class="content">
        <div class="list-goods">
        <li v-for="(item,index) in goodsArr" :key="index">
          <div>
            <ul class="recommend" v-if="item.ad">
              <li>
                <img :src="item.ad.picUrl" alt="">
              </li>
            </ul>
            <div v-for="(ele) in item.topics" :key="ele.topicId">

         
            <div class="type2" v-if="ele.type===2">
              <div class="left-text">
                <div class="avatar"><img :src="ele.avatar" alt=""><span>{{ele.nickname}}</span></div>
                <div class="avatar-content">
                  <p class="item1">{{ele.title}}</p>
                  <p class="item2">{{ele.subTitle}}</p>
                  <div class="ps">
                    <i class="iconfont icon-view"></i><span>{{ele.readCount}}</span>
                  </div>
                </div>
              </div>
                <div class="right-img">
                  <img :src="ele.picUrl" alt="">
                </div>
            </div>
            <div class="type0" v-if="ele.type===0">
              <div class="avatar-info"><img :src="ele.avatar" alt=""><span>{{ele.nickname}}</span></div>
              <div class="img-info"><img :src="ele.picUrl" alt=""></div>
              <div class="ps"><i class="iconfont icon-view"></i><span>{{ele.readCount}}</span></div>
            </div>    
            </div> 
          </div>
         </li>
        </div>
      </div>
    </div> 
</template>

<script>
import Header from "../../components/header/Header"
import Bscroll from "better-scroll"
import {mapState} from "vuex"
export default {
  components:{
    Header
  },
  computed:{
    ...mapState({
      goodsArr:(state)=>state.seeGoods.goodsArr
    })
  },
  watch:{
    goodsArr(){
      this.$nextTick(()=>{
      new Bscroll(".content",{
        click:true
      })
    })
    }
  },
  mounted(){
    this.$store.dispatch("getGoodsArr")
    this.$nextTick(()=>{
      new Bscroll(".content",{
        click:true
      })
    })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .wrapper
      height 100%
      border-bottom 1px solid #ccc
      .logo
        width 50px
        height 50px
        background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMAcNAP9uD9Bfrx5B8v6LSdTgr37N/Uxb14Gtm5r6aVjWhgVTkUgTYpp0pCSlNj4QAAATNJREFUSMfd0+tugyAYBmAUREXtwbNW7Vptu+29//tbsolkahSTbVn6/oM8An4fkKeLL4Kjvn5zgbTT1S8ccYTS08J2A2TUKyF8DX3cAXubkC6F+76qPRPI5XfOda0kAZg09h4wFvWBIbir4Q04L2iDI/FGNXq1J0xtfqKT7TI6q+kJaCZLtRHMYq4kCfjcjz0sWI/J7D0AO5C5FCaidjR3ZaqJ01OOV8qhTjiNXYPn30uyW7ywZ6gG0AyobbKYCth/Ea8EFwZZjgHeH6CCe8M6b1zsPhtd+4YGN/y4koNFrsSf8zZGn+CgwTNYfXiiwU3I++1av8qFBo8VZxqcDZw5m7izjXM93m3hEbwtPEEhebip7qH4ma5eIEyZ0JGvXDjmEIGL4jTFkDAfFmFQSSn5d/kA8eoi0xqdj94AAAAASUVORK5CYII=") no-repeat
      .nav
        font-size 28px
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
      position absolute
      top 86px
      height 1058px
      background #f4f4f4
      bottom -275px
      width 100%
      .recommend
        background #fff
        li
          width 100%
          padding 20px 33px
          img 
            width 100%
            border-radius 8px
      .type2
        width 100%
        margin 20px 0
        background #fff
        padding 0 33px
        display flex 
        .left-text
          display flex
          width 50%
          flex-direction column
          justify-content space-around
          .avatar
            img 
              margin 30px 20px 30px 0
              width 56px
              border-radius 50%
              overflow hidden
          .avatar-content
            .item1
              font-size 30px
              color #000
            .item2
              width 100%
              font-size 28px
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
            .ps
              color #ccc
              margin-left 20px
              margin-top 40px
              margin-bottom 20px
              i 
                color #000
                font-size 20px
                margin-right 10px
        .right-img
          width 50%
          img 
            width 100%
            margin-top 60px
            border-radius 5px
      .type0
        width 100%
        margin 20px 0
        background #fff
        padding 0 33px
        display flex
        flex-direction column
        justify-content center
        align-items center
        .avatar-info
          margin 30px 0
          width 100%
          img 
            width 56px
            border-radius 50%
            margin-right 20px
        .img-info
          width 100%
          img
            height 375px
        .ps
          color #ccc
          width 100%
          margin 20px 0
          i 
            color #000
            font-size 20px
            margin-right 10px
      
</style>