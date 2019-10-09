
import Mock from "mockjs"

import category from "./category.json"
import homedata from "./homeData.json"
import categoryList from "./categoryList.json"

Mock.mock('/home',{code:0,data:homedata})
Mock.mock('/category',{code:0,data:category})
Mock.mock('/categorylist',{code:0,data:categoryList})
