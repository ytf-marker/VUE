<template>
    <div>
        <h1>news页面</h1>
        {{id}}
    </div>
</template>
<script>
export default {
    computed:{
        id(){
            return this.$route.params.id
        }
    }
}
</script>
<style lang="">
    
</style>