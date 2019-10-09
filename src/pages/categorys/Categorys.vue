<template>
 <div>
    <div class="wrapper">
      <Header>
        <div slot='search' class="search">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png"/>
          <span>搜索商品,共23080款好物</span>
        </div>
      </Header>
        <div class="content">
          
        </div>
    </div>
 </div>
</template>

<script>
import {reqCategory,reqCategoryList} from "../../api"
import Header from "../../components/header/Header"
export default {
  components:{
    Header
  },
  mounted(){
    reqCategoryList()
    reqCategory()
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrapper
  &:after
    content ''
    display block
    background #d9d9d9
    height 1px
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
</style>