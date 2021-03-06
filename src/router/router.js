import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/dialogDrag',
        component:()=>import ('../views/dialogDrag'),
    },
    {
        path:'/tableRollLoading',
        component:()=>import ('../views/tableRollLoading'),
    },
    {
        path:'/login',
        component:()=>import ('../views/login')
    },
    {
        path:'/product',
        components:{
            default:()=>import ('../views/product'),
            header:()=>import('../components/Header'),
        }
    },
    {
        path:'/productadd',
        components:{
            default:()=>import ('../views/productadd'),
            header:()=>import('../components/Header'),
        }
    },
    {
        path:'/productedit',
        components:{
            default:()=>import ('../views/productedit'),
            header:()=>import('../components/Header'),
        }
    }
]


const router = new VueRouter({
    routes
})
export default router;