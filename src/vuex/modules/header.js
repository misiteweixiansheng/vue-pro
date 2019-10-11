import {reqSeeGoodsTab,reqHome} from "../../api"

import {RECIEVE_SEE_GOODS_ARR,RECIEVE_HOME_ARR} from "../mutation-types"

const state={
  seeGoodsArr:[
  ],
  isShow:true
}

const mutations={
   [RECIEVE_SEE_GOODS_ARR](state,seeGoodsArr){
      state.seeGoodsArr=seeGoodsArr
   },
   setIsShow(state,isShow){
     state.isShow=isShow
   }
}
const getters={
  
}
const actions={
  async getSeeGoodsHeader ({commit}){
    const result =await reqSeeGoodsTab()
    if(result.code==="200"){
      commit(RECIEVE_SEE_GOODS_ARR,result.data)
    }
  },
  async getHomeHeader ({commit}){
    const result =await reqHome()
    if(result.code===0){
      const list=result.data.kingKongModule.kingKongList
      commit(RECIEVE_SEE_GOODS_ARR,list)
    }
  }
}

export default{
  state,
  mutations,
  actions,
  getters
}