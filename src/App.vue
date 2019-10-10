<template>
  <div id="app">
      <router-view/>
    <Footer v-if="!$route.path.match('/profile')"/>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Footer from "./components/footer/Footer.vue"
import Home from './pages/home/Home.vue'
import Categorys from './pages/categorys/Categorys.vue'
import BuyCar from './pages/buyCar/BuyCar.vue'
import SeeGoods from './pages/seeGoods/SeeGoods.vue'
import Profile from './pages/profile/Profile.vue'

export default {
  components: {
    Header,
    Footer,
    Home,
    Categorys,
    BuyCar,
    SeeGoods,
    Profile
  }
}
</script>

<style  lang='stylus' rel='stylesheet/stylus' scoped> 
  #app
   position absolute
   top 0
   bottom 0
   width 100%
   height 100%
   overflow hidden
</style>
