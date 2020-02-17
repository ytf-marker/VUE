import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  axios,
  render: h => h(App),
}).$mount('#app')

//1.axios的基本使用
axios({
  url:'http://106.54.54.237:8000/api/hy/home/multidata',
  method:'get'
}).then((res)=>{
  console.log(res)
})

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


//2.axios的并发请求

axios.all([axios({
  url:'http://106.54.54.237:8000/api/hy/home/data',
  params:{
    type:'sell',
    page:5
  }
}),axios({
  url:'http://106.54.54.237:8000/api/hy/home/multidata'
}
)]).then(res =>{
console.log(res)
})