import {reqSeeGoodsData} from "../../api"

import {RECIEVE_GOODS} from "../mutation-types"

const state={
  goodsArr:[]
}

const mutations={
    [RECIEVE_GOODS](state,arr){
      state.goodsArr=arr
    }
}
const getters={

}
const actions={
  async getGoodsArr({commit}){
    const result =await reqSeeGoodsData()
    if(result.code==="200"){
      commit(RECIEVE_GOODS,result.data)
    }
  }
}

export default{
  state,
  mutations,
  actions,
  getters
}