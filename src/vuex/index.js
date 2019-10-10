import Vue from "vue"
import Vuex from "vuex"

import actions from "./actions"
import getters from "./getters"

import recommend from "./modules/recommend"

import categorylist from "./modules/categoryList"

import seeGoods from "./modules/seeGoods"

import search  from "./modules/search"

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules:{
      recommend,
      categorylist,
      seeGoods,
      search
    }
})