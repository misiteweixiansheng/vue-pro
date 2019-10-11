import Ajax from "./ajax"

// const prefix ='http://m.you.163.com'

const prefix = process.env.NODE_ENV === 'development' ? '/api' : 'http://m.you.163.com';
//获取首页数据
export const reqHome=()=>Ajax({
  url:'/home'
})

//获取categorys数据
export const reqCategory=()=>Ajax({
  url:'/category'
})


// 搜索 关键字
export const reqInitSearch = () => Ajax.post(`${prefix}/xhr/search/init.json`);

// 获取搜索结果
export const reqSearchResult = (keywordPrefix) => Ajax(`${prefix}/xhr/search/searchAutoComplete.json`, {keywordPrefix});


// 识物-Tab---- http://m.you.163.com/topic/v1/find/getTabs.json
export const reqSeeGoodsTab = () => Ajax(`${prefix}/topic/v1/find/getTabs.json`);

// 识物-数据 ----
export const reqSeeGoodsData = () => Ajax(`${prefix}/topic/v1/find/recManual.json`);

// 识物-上拉加载 ---- http://m.you.163.com/topic/v1/find/recAuto.json
export const reqAutoSeeGoodsData = (page, size, exceptIds = '6409,6201,6408,6410,6490,6488,5821,5716,5711,5641,3583,6383,6242,4513,5950,4035,5823,5867,6458,2876,5714,5712,5868,3438,4648,4001,3334,5942,518,5578,4024,4061,3629,3383') => Ajax(`${prefix}/topic/v1/find/recAuto.json`, {page, size, exceptIds});
