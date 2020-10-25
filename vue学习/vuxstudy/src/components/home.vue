<template>
  
</template>

<script>
import {get} from '../http/index'
import axios from 'axios';
export default {
  data(){
      return{

      }
  },
  created(){
      const url = 'http://123.207.32.32:8000/api/h8/home/multidata'
      get(url,{}).then(val => {
          console.log(val)
      })
  }
  
}
</script>

<style>

</style>