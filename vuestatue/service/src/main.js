import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  axios,
  render: h => h(App),
}).$mount('#app')

//1.axios的基本使用
// axios({
//   url:'http://106.54.54.237:8000/api/hy/home/multidata',
//   method:'get'
// }).then((res)=>{
//   console.log(res)
// })

// axios({
//   url:'http://106.54.54.237:8000/api/hy/home/data',
//   params:{
//   type:'pop',
//   page:1
//   }
//   // method:'get'
// }).then((res)=>{
//   console.log(res)
// })
//axiso的全局配置
axios.defaults.baseURL='http://106.54.54.237:8000'  //全局端口
axios.defaults.timeout= 5000   //超时时间
//2.axios的并发请求


// axios.all([axios({
//   url:'/api/hy/home/data',
//   params:{
//     type:'sell',
//     page:5
//   }
// }),axios({
//   url:'/api/hy/home/multidata'
// }
// )]).then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
// }))   

//4.0创建对应的axios实例(为了应对一个项目里面有多个根路径)

// const instancel = axios.create({
//   baseURL:'http://106.54.54.237:8000',
//   timeout:5000
// })

// instancel({
//   url:'/home/multidata'
// }).then((res)=>{
//   console.log(res['data']) 
// })

