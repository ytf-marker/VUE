<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link :to="'/news/'+id">新闻</router-link>
    <router-link  :to="{path:'/Profile',query:{name:'ytf'}}">我的</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      id:10
    }

    
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
