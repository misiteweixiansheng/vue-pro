import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import './mock/mock-server'
import 'swiper/dist/css/swiper.css'
import router from "./router/index.js"
import VueAwesomeSwiper from 'vue-awesome-swiper'

import store from "./vuex"

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false

Vue.use(Antd)


Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
