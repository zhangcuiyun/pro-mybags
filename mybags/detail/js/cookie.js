

//instanceof: 判断一个对象是否属于某个类
//expires instanceof Date : 判断expires是否是日期对象
//var d = new Date();
//var arr = new Array(); 
//arr instanceof Array  : 判断arr是否为数组

//cookie操作： 添加，修改， 查询， 删除 （增删改查）
//设置cookie： 添加，修改
function setCookie(name, value, expires){
	var str = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	if (expires && expires instanceof Date){
		str += "; expires=" + expires;
	}
	document.cookie = str;
	
//	console.log(str); //获取当前cookie str的字符串
//	console.log(document.cookie); //获取所有cookie

//点语法.  , 内部有两个方法： get方法，set方法
//document.cookie = str; ： 内部用的是set方法
//console.log(document.cookie);  ： 内部用的是get方法
	
	
}


//获取cookie
//"username=zhangsan; game=,.王者荣耀; name1=李四; username4=qianqi"
function getCookie(name){
	var str = decodeURIComponent(document.cookie);
	var arr = str.split("; ");
	for (var i=0; i<arr.length; i++) {
		var str1 = arr[i]; //username=zhangsan
		
		var arr1 = str1.split("=");
		if (arr1[0] == name){
			return arr1[1];
		}
	}
	return "";
}

//删除cookie
function removeCookie(name){
	var d = new Date();
	d.setDate(d.getDate()-1);
	document.cookie = encodeURIComponent(name) + "=; expires=" + d;
}








