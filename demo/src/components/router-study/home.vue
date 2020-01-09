<template>
    <div>
        <h1>home页面</h1>
          <router-link active-class="red" :to="'/home/news/'+id">新闻</router-link>
          <router-link active-class="red"  :to="{path:'/home/Profile',query:{name:'ytf'}}">我的</router-link>
            <keep-alive>
                 <router-view/>
            </keep-alive>
    </div>
</template>
<script>
export default {
    data(){
        return{
        id:10
        }
    },
    methods:{
    linkto(){
        this.$router.push('/news');
    }
    },
    activated(){
        console.log('activated');
    },
    deactivated(){
        console.log('deactivated');
    },
    beforeRouteLeave (to, from, next) {
        console.log(from);
    }
}
</script>
<style lang="">
    .red{
        color: red;
    }
</style>