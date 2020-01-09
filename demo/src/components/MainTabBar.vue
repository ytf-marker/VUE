<template>
    <div>
          <tab-bar >
      <tab-bar-item path='/home' >
  
          <img slot="item-icon" src="../assets/imags/tabbar/home.png" alt=""> 
          <img slot="item-active-icon" src="../assets/imags/tabbar/home_active.png" alt=""> 
          <div slot="item-text">首页</div>  
      </tab-bar-item>
      <tab-bar-item path='/category'>
         <img slot="item-icon" src="../assets/imags/tabbar/category.png" alt=""> 
          <img slot="item-active-icon" src="../assets/imags/tabbar/category_active.png" alt=""> 
          <div slot="item-text">分类</div>  
      </tab-bar-item >
      <tab-bar-item path='/cart'>
         <img slot="item-icon" src="../assets/imags/tabbar/cart.png" alt=""> 
         <img slot="item-active-icon" src="../assets/imags/tabbar/cart_active.png" alt=""> 
          <div slot="item-text">购物车</div>  
      </tab-bar-item>
      <tab-bar-item path='/profile'>
         <img slot="item-icon" src="../assets/imags/tabbar/profile.png" alt=""> 
         <img slot="item-active-icon" src="../assets/imags/tabbar/profile_active.png" alt=""> 
          <div slot="item-text">我的</div>  
      </tab-bar-item>
     </tab-bar>
    </div>
</template>
<script>
import tabBar from "../components/tabbar/tabBar";
import tabBarItem from "../components/tabbar/tabBarItem";
export default {
    components:{
        tabBar,
        tabBarItem
    }
}
</script>
<style lang="">
    
</style>