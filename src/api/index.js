// import qs from 'qs'
import api from './api'
import http from '../http/index'
//首页
function home(){
  return http({
    url:api.home,
    method:'get'
  })
}
//详情
function teacher(data){
  return http({
    url:"teacher/"+data,
    method:'get',
  })
}
function teacherInfo(data){
  return http({
    url:"teacher/info/"+data,
    method:'get'
  })
}
//短信验证
function send(data){
  return http({
    url:api.send,
    method:"post",
    data:data
  })
}
//登录
function login(data){
  return http({
    url:api.login,
    method:"post",
    data:data
  })
}

//特色课
function course(){
  return http({
    url:api.course,
    method:'get'
  })
}
//特色课分类
function courseClassify(){
  return http({
    url:api.courseClassify,
    method:'get'
  })
}
function courseBasis(page,limit,type,by,data,vip){
  return http({
    url:"courseBasis?page="+page+"&limit="+limit+"&course_type="+type+"&order_by="+by+"&attr_val_id="+data+"&is_vip="+vip,
    method:'get',
  })
}
//用户信息
function user(){
  return http({
    url:api.user,
    method:'get'
  })
}
function myStudy(){
  return http({
    url:api.myStudy,
    method:'get'
  })
}
function users(data){
  return http({
    url:api.users,
    method:'put',
    data:data
  })
}
function sonArea(data){
  return http({
    url:"sonArea/"+data,
    method:'get',
  })
}
function attribute(data){
  return http({
    url:api.attribute+data,
    method:'get',
  })
}
function imgInfo(data){
  return http({
    url:api.imgInfo,
    method:'post',
    data:data
  })
}
export default{
  home,
  teacher,
  send,
  login,
  course,
  courseClassify,
  courseBasis,
  teacherInfo,
  user,
  myStudy,
  users,
  sonArea,
  attribute,
  imgInfo

}