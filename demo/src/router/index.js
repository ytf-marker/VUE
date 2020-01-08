import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import home from '../components/router-study/home'
// import news from '../components/router-study/news'
Vue.use(Router)
const home =()=> import ('../components/router-study/home');
const news =  ()=> import ('../components/router-study/news');
const Profile = () => import('../components/router-study/Profile')
export default new Router({ 
 
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/news/:id',
      name: 'news',
      component: news
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/Profile',
      name: 'home',
      component: Profile
    }
  ]
})
