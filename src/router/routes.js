

const Home =()=>import ('../pages/home/Home.vue')
const Categorys =()=>import ('../pages/categorys/Categorys.vue')
const BuyCar =()=>import ('../pages/buyCar/BuyCar.vue')
const SeeGoods =()=>import ('../pages/seeGoods/SeeGoods.vue')
const Profile =()=>import ('../pages/profile/Profile.vue')


import Recommend from "../pages/home/children/recommend/recommend.vue"
import FamilyLife from "../pages/home/children/family-life/family-life.vue"
export default [
    {
        path:'/home',
        name:'/home',
        component:Home,
        children:[
        {
            path:'/home/recommend',
            name:'/home/recommend',
            component:Recommend
        },
        {
            path:'/home/familylife',
            name:'/home/familylife',
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
        name:'/categorys',
        component:Categorys
    },
    
    {
        path:'/buycar',
        name:'/buycar',
        component:BuyCar
    },
    
    {
        path:'/seegoods',
        name:'/seegoods',
        component:SeeGoods
    },
    
    {
        path:'/profile',
        name:'/profile',
        component:Profile
    },
    {
        path:'/',
        redirect:'/home'
    }
]