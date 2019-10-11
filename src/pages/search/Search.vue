<template>
 <div class="wrapper">
    <div class="search">
      <input type="text" placeholder="秋冬服饰上新">
        <span @click="$router.back()">取消</span>
    </div>
    <div class="keywords-wrapper">
      <p>热门搜索</p>
      <ul class="keywords-list">
        <li class="item" v-for="(item,index) in keywords" :key="index">{{item.keyword}}</li>
      </ul>
    </div>
 </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  computed:{
    ...mapState({
      keywords:(state)=>state.search.keywords
    })
  },
  mounted(){
    this.$store.dispatch("getInitSearch")
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .wrapper
    padding 20px
    display flex
    height 100%
    flex-direction column
    .search
      width 100%
      height 87px
      font-size 30px
      background #fff
      display flex
      input 
        width 600px
        height 55px
        font-size 28px
        border-radius 5px
        padding-left 50px
        margin 0px 20px
        background #eee url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png) no-repeat 10px 10px
    .keywords-wrapper  
      padding 10px 20px
      background #fff
      p
        color #aaa
        font-size 30px
      ul
       padding 20px   
       display flex
       flex-wrap wrap
       li
        border 1px solid
        height 50px
        padding 0 20px
        line-height 50px
        margin-right 20px
        margin-top 20px
        &:nth-child(1),&:nth-child(3)
          border 1px solid red
</style>