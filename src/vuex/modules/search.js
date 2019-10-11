import {reqInitSearch,reqSearchResult} from "../../api"

import {RECIEVE_KYE_WORDS} from "../mutation-types"
const state={
  keywords:[],
  getSearchData:[]
}

const mutations={
  [RECIEVE_KYE_WORDS](state,wordslist){
      state.keywords=wordslist
  }
}

const getters={

}

const actions={
  async getInitSearch ({commit}){
      const result =await reqInitSearch()
      if(result.code==="200"){
        commit(RECIEVE_KYE_WORDS,result.data.hotKeywordVOList)
      }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}