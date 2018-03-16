$(function(){
	
	 var ainput=document.getElementsByTagName("input");
	 ainput[0].value=getCookie("username")
//	 ainput[1].value=getCookie("pwd")
	
	//点击登录
	$("#logging").click(function(){ 
			//获取上次登录的用户
			console.log(11122)
		 var username=$("#username").val();
		var pwd=$("#pwd").val();
		
		//ajax
		var xhr=new XMLHttpRequest();
		xhr.open("POST","http:///localhost/01myproject/mybags/login/php/login.php",true);
	 	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	 	xhr.send("username="+username+"&pwd="+pwd);
	 	xhr.onreadystatechange=function(){
	 		if(xhr.readyState==4&&xhr.status==200){
	 			//json解析
                //如果注册成功则进入登录页面
               	var arr = JSON.parse(xhr.responseText); 
               	console.log(arr.status);
               	if(arr.status==1){
//             		
//             		if (aInput[2].checked){
						var d = new Date();
						d.setDate(d.getDate()+7);
						console.log(ainput[0].value);
						$.cookie("username", ainput[0].value,{expires:30,path:"/"});
						//保存用户名到cookie
						setCookie("pwd", ainput[1].value, d); //保存密码到cookie
//					}
               		$.cookie("username1", ainput[0].value,{expires:30,path:"/"})
					//setCookie("username1", aInput[0].value, d); //保存用户名到cookie
					alert("登录成功")
					location.href="../../index/html/index.html"
                //如果失败则弹出提示信息
                 					 }  
               	else{ 
               		alert("登录失败！请检查用户是否已注册！");
               		location.href = "../../register/html/mbaobao_register.html";
                 	}
	 					}
		
		 
		 }
		})	
	
})
