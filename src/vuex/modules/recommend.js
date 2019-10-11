import {reqHome} from "../../api"

import {RECIEVE_HOME, RECIEVE_HOME_CATEGORYS} from "../mutation-types"

const state={
    homelist:{},
    categoryModule:[]
  }

const mutations={
    [RECIEVE_HOME](state,homelist){ 
        state.homelist=homelist
    },
    [RECIEVE_HOME_CATEGORYS](state,categoryModule){ 
        state.categoryModule=categoryModule
    }
}

const getters={
    
}

const actions={
  async getHomeList({commit}){
    const result = await reqHome()
    if(result.code===0){
      commit(RECIEVE_HOME,result.data)
      commit(RECIEVE_HOME_CATEGORYS,result.data.categoryModule)
    }else{
      console.log("获取数据失败")
    }
  }
}


export default{
  state,
  mutations,
  getters,
  actions
}