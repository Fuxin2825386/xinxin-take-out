/*
包含n个接口请求函数的模块
每个函数的返回值是promise
 */

import ajax from "./ajax"
const BASE = "/api"

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (longitude,latitude)=>ajax(BASE+ `position/${latitude},${longitude}`)

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFootList =()=>ajax(BASE+`/index_category`)

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqshops = (longitude,latitude)=>ajax(BASE+"/shops",{latitude,longitude})//根据纬度经度获取商品的名称
