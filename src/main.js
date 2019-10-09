import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import './mock/mock-server'
import 'swiper/dist/css/swiper.css'
import router from "./router/index.js"
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
