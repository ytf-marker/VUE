<template>
        <div class="tab-bar-Item" @click="itemclick">
            <slot v-if="!isshow" name="item-icon"></slot>
            <slot v-else name="item-active-icon"></slot>
            <div :style="activeStyle">
                 <slot  name="item-text"></slot>
            </div>
        </div>
</template>
<script>
export default {
    name:"TaBarItem",
    data(){
        return{
         
        }
    },
    props:{ 
        path:String,
        activeColor:{
          type:String,
          default:'#FB95A8'
        }
    },
    computed: {
        isshow(){
            return this.$route.path.indexOf(this.path) !==-1
        },
        activeStyle(){
            return this.isshow ? {color:this.activeColor} : {}
        }
    },
    methods:{
        //点击跳转路由
        itemclick(){
            // this.isshow=true
            this.$router.replace(this.path);
        }
    }
}
</script>
<style scoped>
 .tab-bar-Item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 13px;
}
.tab-bar-Item img{
    margin-top: 3px;
    height: 24px;
    width: 24px;
    vertical-align: middle;
}
.active{
    color: #FB95A8;
}
</style>