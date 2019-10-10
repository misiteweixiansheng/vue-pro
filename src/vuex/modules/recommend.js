import {reqHome} from "../../api"

import {RECIEVE_HOME} from "../mutation-types"

const state={
    homelist:{}
  }

const mutations={
    [RECIEVE_HOME](state,homelist){ 
        console.log(homelist)
        state.homelist=homelist
    }
}

const getters={
    
}

const actions={
  async getHomeList({commit}){
    const result = await reqHome()
    if(result.code===0){
      commit(RECIEVE_HOME,result.data)
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