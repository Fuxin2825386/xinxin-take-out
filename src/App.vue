<template>
    <div id="app">
      <router-view/>
      <FootGuide/>
    </div>
</template>

<script>
  import FootGuide from "./components/FootGuide/FootGuide.vue"
  import {reqAddress} from "./api"
  export default {
    name: 'App',
   async mounted(){
      //发异步ajax请求
     const result =  await reqAddress("116.36867","40.10038")
     console.log("result",result)
    },
    components:{
      FootGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
