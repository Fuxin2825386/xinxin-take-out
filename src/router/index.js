import Vue from "vue"
import VueRouter from "vue-router"
import Msite from "../pages/MSite/MSite.vue"
import Search from "../pages/Search/Search.vue"
import Profile from "../pages/Profile/Profile.vue"
import Order from "../pages/Order/Order.vue"
import Login from "../pages/Login/Login.vue"

Vue.use(VueRouter)

export default new VueRouter({
  mode:"history", //去掉#
  routes:[
    {path:"/msite",component:Msite},
    {path:"/search",component:Search},
    {path:"/order",component:Order},
    {path:"/profile",component:Profile},
    {path:"/login",component:Login},
    {path:"/",redirect:"/msite"},
  ]
})
