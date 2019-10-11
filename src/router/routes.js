

const Home =()=>import ('../pages/home/Home.vue')
const Categorys =()=>import ('../pages/categorys/Categorys.vue')
const BuyCar =()=>import ('../pages/buyCar/BuyCar.vue')
const SeeGoods =()=>import ('../pages/seeGoods/SeeGoods.vue')
const Profile =()=>import ('../pages/profile/Profile.vue')

const CategoryList=()=>import ('../pages/categorys/components/categoryList.vue')

import Recommend from "../pages/home/children/recommend/recommend.vue"
import FamilyLife from "../pages/home/children/family-life/family-life.vue"
import Login from "../pages/profile/components/login.vue"
import Search from "../pages/search/Search.vue"


export default [
    {
        path:'/home',
        component:Home,
        children:[
        {
            path:'/home/recommend',
            component:Recommend
        },
        {
            path:'/home/familylife',
            component:FamilyLife
        },
        {
            path: '',
            redirect: '/home/recommend'
          }
        ]
    },
    
    {
        path:'/categorys',
        component:Categorys,
        children:[
            {
                path:'/categorys/item/:id',
                component:CategoryList
            },
            {
                path:'',
                redirect:'/categorys/item/1022001'
            }
        ]
    },
    
    {
        path:'/buycar',
        component:BuyCar
    },
    
    {
        path:'/seegoods',
        component:SeeGoods
    },
    
    {
        path:'/profile',
        component:Profile,
        children:[
            {
            path:'/profile/login/:id',   
            component:Login
            }
        ]
    },

    {
        path:"/search",
        component:Search
    },
    {
        path:'/',
        redirect:'/home'
    }
]