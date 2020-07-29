import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)
const goods = () => import('components/goods/Goods')
const ratings = () => import('components/ratings/Ratings')
const seller = () => import('components/seller/Seller')

const routes = [
    // {
    //     path: '',
    //     redirect: '/goods'
    // },
    {
        path: '/goods',
        component: goods
    },
    {
        path: '/ratings',
        component: ratings
    },
    {
        path: '/seller',
        component: seller
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
