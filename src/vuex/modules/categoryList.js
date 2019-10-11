import {reqCategory} from "../../api/index"

import {RECIEVE_CATEGORYS,RECIEVE_ITEM} from "../mutation-types"

const state={
  item:{},
  category:[]
}

const mutations={
[RECIEVE_CATEGORYS](state,category){
    state.category=category
  },
[RECIEVE_ITEM](state,item){
    state.item=item
  }
}

const getters={

}

const actions={
  async getCategorys({commit},params){
    const result =await reqCategory()
    if(result.code===0){
      const categoryList=result.data.categoryL1List
      commit(RECIEVE_CATEGORYS,categoryList)
      const id=params*1
      const item=categoryList.find((item,index)=>item.id ===id)

      commit(RECIEVE_ITEM,item)
    }else{
      console.log('数据没获取到')
    }
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}