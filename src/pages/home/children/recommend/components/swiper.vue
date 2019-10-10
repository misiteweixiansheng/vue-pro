<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
            <swiper-slide v-for='item of swiperList' :key="item.id">
                <img :src="item.imgUrl" class="swiper-img">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination" v-for='item of swiperList' :key="item.id"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el:'.swiper-pagination',
        },
        autoplay:true,
        loop: true
      },
      swiperList:[{
      id:"0001",
      imgUrl:"https://yanxuan.nosdn.127.net/647c2450daf2874ae5611a504e36fbef.jpg?imageView&quality=75&thumbnail=750x0"
      },{
      id:"0002",
      imgUrl:"https://yanxuan.nosdn.127.net/0f27264fcef20e1dce16d2c92f649072.png?imageView&quality=75&thumbnail=750x0"
      },{
      id:"0003",
      imgUrl:"https://yanxuan.nosdn.127.net/1cdfc1b7ef19d9398c6a9c7b55683ba5.jpg?imageView&quality=75&thumbnail=750x0"

      },{
      id:"0004",
      imgUrl:"https://yanxuan.nosdn.127.net/565108c1cfa310ea5294dc64d13e5cb5.jpg?imageView&quality=75&thumbnail=750x0"

      },{
      id:"0005",
      imgUrl:"https://yanxuan.nosdn.127.net/7c6dfa4b1aad6bec5f2ac72278dde34d.jpg?imageView&quality=75&thumbnail=750x0"

      },{
      id:"0006",
      imgUrl:"https://yanxuan.nosdn.127.net/8d2af3ab55bf51d5ac03e5d9c6fa1fc4.jpg?imageView&quality=75&thumbnail=750x0"

      },{
      id:"0007",
      imgUrl:"https://yanxuan.nosdn.127.net/c88cae9ce2d76bbbab20aeb85f499512.jpg?imageView&quality=75&thumbnail=750x0"

      },{
      id:"0008",
      imgUrl:"https://yanxuan.nosdn.127.net/a9827ac1ad9c54b31cda1debf38c3414.jpg?imageView&quality=75&thumbnail=750x0"
        },
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet
        width 40px 
        height 4px
        background #ccc
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff
    .wrapper
        overflow hidden
        width 100%
        height 370px
        .swiper-img
            width 100%
</style>
