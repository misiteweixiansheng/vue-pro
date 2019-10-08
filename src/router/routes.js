

const Home =()=>import ('../pages/home/Home.vue')
const Categorys =()=>import ('../pages/categorys/Categorys.vue')
const BuyCar =()=>import ('../pages/buyCar/BuyCar.vue')
const SeeGoods =()=>import ('../pages/seeGoods/SeeGoods.vue')
const Profile =()=>import ('../pages/profile/Profile.vue')

export default [
    {
        path:'/home',
        compoent:Home
    },
    
    {
        path:'/categorys',
        compoent:Categorys
    },
    
    {
        path:'/buycar',
        compoent:BuyCar
    },
    
    {
        path:'/seegoods',
        compoent:SeeGoods
    },
    
    {
        path:'/profile',
        compoent:Profile
    }
]