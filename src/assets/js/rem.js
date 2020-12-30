//封装的函数 实现根据浏览器的宽度设置html font-size的值 375 50  414 55.2 320 42.6
function  rem(){
	document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px";
}
//执行函数
rem()
//当浏览器的宽度发生改变的时候重新调用
window.onresize=rem