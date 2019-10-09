import Ajax from "./ajax"

export const reqCategoryList=()=>Ajax({
  url:'/categorylist'
})
export const reqCategory=()=>Ajax({
  url:'/category'
})
export const reqHome=()=>Ajax({
  url:'/home'
})