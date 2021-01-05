import axios from 'axios'
var instance=axios.create({
    baseURL:"http://120.53.31.103:84/api/app/"
})
instance.interceptors.request.use(
    config=>{
        //alert('数据在加载的路上')
        //NProgress.start()
        //获取到token值
        var users='Bearer'+localStorage.getItem("token")
        if(users){
            //附加到请求头上
            config.headers.authorization=users
            return config;
        }else{
            return config;
        }z
      
    },

)
// 响应拦截器
instance.interceptors.response.use(
    response=>{
        //写自己的处理代码
        //NProgress.done()
		return response
	},
) 
export default instance