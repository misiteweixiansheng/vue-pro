<template>
  <div id="app">
    <Header />
      <!-- <router-view/> -->
    <Footer />
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
  name: 'app',
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

<style  lang='stylus' rel='stylesheet/stylus'> 
  #app
   width 100%
   height 100%
</style>
