import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import TopHeader from  "./components/TopHeader/TopHeader.vue"

//全局组件
Vue.component("TopHeader",TopHeader)

//局部组件
new Vue({
  el:"#app",
  components:{
    App
  },
  template:`<App/>`,
  router
})
