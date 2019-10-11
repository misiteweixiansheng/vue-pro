<template>
    <div class="wrapper">
      <Header>
        <div slot='search' class="search">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png"/>
          <span>搜索商品,共23080款好物</span>
        </div>
      </Header>
        <div class="content">
          <div class="left-nav-wrapper">
          <ul class="leftnav">
            <li v-for="(item,index) in category" :key="index" :class="{active:$route.path.match(item.id)}" @click='goto(item)'>
              {{item.name}}
            </li>
          </ul>
        </div>
            <router-view class="route"/>
        </div>
    </div>
</template>

<script>
import {RECIEVE_ITEM} from "../../vuex/mutation-types"
import Header from "../../components/header/Header"
import CategoryList from "./components/categoryList"
import Bscroll from "better-scroll"
import {mapState,mapMutations,mapActions} from "vuex"

export default {
  computed:{
    ...mapState({
      category:(state)=>state.categorylist.category,
      item:(state)=>state.categorylist.item
    })
  }
  ,
  methods:{
    goto(item){
      if(this.$route.path===`/categorys/item/${item.id}`){
        return;
      }
      this.$router.push(`/categorys/item/${item.id}`)
      // this.item=item
      this.$store.commit(RECIEVE_ITEM,item)
    }
  }
  ,
  components:{
    Header
  },
  watch:{
    category(){
        this.$nextTick(()=>{
          new Bscroll(".left-nav-wrapper",{
            click:true
          })
      })
    }
  },
  mounted(){
    const params=this.$route.params.id
    this.$store.dispatch("getCategorys",params)
    new Bscroll(".left-nav-wrapper",{
            click:true
          })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrapper
  overflow hidden
  &:after
    content ''
    display block
  .search
    width 100%
    height 56px
    line-height 56px
    font-size 28px
    text-align center
    background #ededed
    border-radius 8px
    img 
      margin-right 10px
      padding-top 10px
  .content
      display flex
      justify-content space-around
      margin-top 90px
      margin-bottom 100px
    .left-nav-wrapper
      height 1100px
      .leftnav
        padding 40px 0
        li
          height 50px
          width 165px
          font-size 28px
          margin-top 40px
          text-align center
          &.active
            border-left 6px solid #ab2b2b
            color #ab2b2b
    .route
          width 528px
          padding 30px
</style>