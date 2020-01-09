import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const Home =()=> import ('../views/home/home');
const Cart =()=> import ('../views/cart/Cart');
const Category =()=> import ('../views/category/Category');
const Profile =()=> import ('../views/profile/Profile');

 const routes=[
  {
    path: '/',
    redirect:'/home',
    meta:{
      title:'首页'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta:{
      title:'首页'
    },
  },
  {
    path: '/cart',
    name: 'home',
    component: Cart,
    meta:{
      title:'购物车'
    },
  },
  {
    path: '/category',
    name: 'home',
    component: Category,
    meta:{
      title:'分类'
    },
  },
  {
    path: '/profile',
    name: 'home',
    component: Profile,
    meta:{
      title:'我的'
    },
  }
  //   children:[
  //     {
  //       path: 'news/:id',
  //       name: 'news',
  //       component: news,
  //       meta:{
  //         title:'新闻'
  //       }
  //     },
  //     {
  //       path: 'Profile',
  //       name: 'home',
  //       component: Profile,
  //       meta:{
  //         title:'我的'
  //       }
  //     }
  //   ]
  // },
  
]

const router = new Router({ 
  mode:'history',
  routes

}) 

export default router

router.beforeEach((to,from,next)=>{
 next()
//  console.log(to.matched[0].meta.title);
 document.title=to.matched[0].meta.title
})
