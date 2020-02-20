<template>
    <div>
      <h1>这是home页面</h1>
    </div>
</template>

<script>
// import axios from 'axios'
  import {request} from '../network/request'

export default {

  data(){
    return{
        a:'1111'
    }
 
  },
   
 created(){
  //  console.log(this.a)
  //  axios.defaults.baseURL='http://106.54.54.237:8000'  //全局端口
  //   axios.defaults.timeout= 5000   //超时时间
  //     axios({
  //         url:'/api/hy/home/multidata'
  //     }).then(res=>{
  //       console.log(res) 
  //     })
    request({
           url:'/home/multidata'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    
    })
          }
      } 
</script>

<style>

</style>