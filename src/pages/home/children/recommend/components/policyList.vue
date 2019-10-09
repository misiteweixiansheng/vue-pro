<template>
 <div class="policyList">
    <ul class="list">
      <li v-for="(item,index) in policyList" :key="index">
        <span class="icon">
        <img :src="item.icon"/>
        </span>
        <span>{{item.desc}}</span>
      </li>
    </ul>
 </div>
</template>

<script>
export default {
    props:["policyList"],
    data(){
      return {
       
      }
    }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    .policyList 
      width 100%
      .list 
        display flex
        justify-content space-around 
        width 100%
        height 72px
        border-bottom 1px solid #ccc
        li
          line-height 72px
          vertical-align middle
          .icon 
            display inline-block
            width 32px
            height 32px
            img
              display block
              width 100%
</style>