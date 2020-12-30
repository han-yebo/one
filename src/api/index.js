// import qs from 'qs'
import api from './api'
//拦截器
import http from '../http/index'
function home(){
  return http({
    url:api.home,
    method:'get'
  })
}
function teacher(params){
  return http({
    url:api.teacher+ params,
    methods:'get',
    data: params,
  })
}
export default{
  home,
  teacher
}