<template>
  <div id="app">
    <h2>vueX演示:-------modules</h2>
    {{$store.state.A.name}}
    <button @click="updataname1">修改name</button>
    <h2>--------------------------</h2>
    <h2>{{msg}}</h2>
    <h2>{{$store.state.counter}}</h2>

    <div>
      {{$store.getters.more20stu}} 
       {{$store.getters.more20stulength}}
       <div>
        {{$store.getters.moreAge(1)}}
       </div>
       <div>
       {{  $store.state.info}}
       </div>
    </div>
    <button @click="changinfo">改变info</button>
       <button @click="updatainfo">异步改变info</button>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addcount(5)">+</button>
    <helloVuex></helloVuex>
  </div>
</template>

<script>
import helloVuex from './components/helloVuex'
import {
  INCREMENT,
  DECREMENT,
  INCREMENTCOUNT,
  CHANGEINFO
   }from './store/mutation-types'
export default {
  data(){
    return{
      msg:"我是app页面",
      counter:0, 

    }
  },
  name: 'App',
  components:{ 
    helloVuex
  },
  methods:{
    addition(){
      this.$store.commit('INCREMENT');
    },
    subtraction(){ 
      this.$store.commit('DECREMENT');
    },
    addcount(count){
       //1.普通的提交风格(接收的时候count是个变量)
      //  this.$store.commit('incrementCount',count);
       //2.特殊的提交风格(接收的时候count是个对象)
       this.$store.commit({
         type:'INCREMENTCOUNT',
         count
       }) 
    },
    changinfo(){
      this.$store.commit('CHANGEINFO');
    },
    updatainfo(){
        this.$store.dispatch('uPdatainfo');
      // console.log('aaaaaaa')
    },
    //修改name
    updataname1(){
      this.$store.commit('UPDataname')
    }
  },

}
</script>

<style>

</style>
