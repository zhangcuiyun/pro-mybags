 $(function(){
	//导入首页头部
				$("#top_1").load("../../index/html/index.html #top-wrapper")
				$("#head_1").load("../../index/html/index.html #header-wrapper")
				$("#nav_1").load("../../index/html/index.html #nav-wrapper")
				
	
		
	/*注册验证*/
	var flag1=false;
	var flag2=false;
	var flag3=false;
	var flag4=false;

	//手机号码
	
	$("#phone").keyup(function(){
		var value=$(this).val();
		var reg= /^((13[0-9])|(14(5|7))|(15([0-3]|[5-9]))|(17[0-9])|(18[0-9])|199)\d{8}$/;
		if(reg.test(value)){
			flag1=true;
			$("em").eq(0).removeClass("bg_n").addClass("bg_y");//背景图片
			$(".intip").empty()//清空提示信息
			$(this).css("border-color","greenyellow")//边框颜色
			
		}
		else{
			$(this).css("border-color","red")
			flag1=false;
			$(".intip").eq(0).html("请写正确的11位号码，并进行验证")
			$("em").eq(0).addClass("bg_n")
			$(".intip").eq(0).css("color","green")
			var flag2=true;
			
		}
	})
		//密码
		$("#pwd").keyup(function(){
			var value=$(this).val();
			var reg=/^\w{6,20}$/;
			if(reg.test(value)){
				$(this).css("border-color","greenyellow");
				$(".intip").eq(1).html("")
				$("em").eq(1).removeClass("bg_n").addClass("bg_y");
				flag2=true;
			}
			else{
			$(this).css("border-color","red")
			flag2=false;
			$(".intip").eq(1).html("请填写6-20位密码，可使用数字和字母组合")
			$("em").eq(1).addClass("bg_n");
			$(".intip").eq(1).css("color","green")
			}
			
		})
		//重复密码
		$("#cfpwd").keyup(function(){
			var value=$(this).val();
			if(value==$("#pwd").val()){
				$(this).css("border-color","greenyellow");
				$(".intip").eq(2).html("")
				$("em").eq(2).removeClass("bg_n").addClass("bg_y");
				flag3=true;
			}
			else{
					$(this).css("border-color","red")
					flag3=false;
					$(".intip").eq(2).html("请填写6-20位密码，可使用数字和字母组合")
					$("em").eq(2).addClass("bg_n");
					$(".intip").eq(2).css("color","green")
			}
		})
		
	//验证码
		var verifyCode = new GVerify("v_container");

		document.getElementById("my_button").onclick = function(){
			var res = verifyCode.validate(document.getElementById("code_input").value);
			if(res){
				$("#code_input").css("border-color","greenyellow");
				$(".intip").eq(3).html("")
				$("em").eq(3).removeClass("bg_n").addClass("bg_y");
				flag4=true;
			}else{
				$(this).css("border-color","red")
					flag4=false;
					$(".intip").eq(3).html("验证码有误，请核对好之后重新输入")
					$("em").eq(3).addClass("bg_n");
					$(".intip").eq(3).css("color","green");
				   $("#code_input").css("border-color","#ccc").css("border-color","red");
					
			}
		}
	 //注册
	 
	 
	 $("#sub").click(function(){
	 	var username=$("#phone").val();
	 	var pwd=$("#pwd").val();
	 	if(flag1&&flag2&&flag3&&flag4){
	 	//ajax；
	 	var xhr=new XMLHttpRequest();
	 	xhr.open("POST","http://localhost/01myproject/mybags/register/php/register.php",true);
	 	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	 	//xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	 	xhr.send("username="+username+"&pwd="+pwd);
	 	xhr.onreadystatechange=function(){
	 		 if (xhr.readyState==4 && xhr.status==200) {
                  console.log(xhr.responseText);
                var obj = JSON.parse(xhr.responseText);

                if (obj.status == 1) {
                    //登录成功
                    alert(obj.msg);
                    location.href="../../login/html/mbaobao_login.html"

                    //跳转到首页
                }
                else {
                    //登录失败
                    alert(obj.msg);
                }
            }
	 	}
	 }//chenggong
	else{
		if(!flag1){
			$(".intip").eq(0).html("请填写6-20位密码，可使用数字和字母组合")
			$("em").eq(0).addClass("bg_n");
		}
		else if(!flag2){
			$(".intip").eq(1).html("请填写6-20位密码，可使用数字和字母组合")
			$("em").eq(1).addClass("bg_n");
		}
		else if(!flag3){
			$(".intip").eq(2).html("请填写6-20位密码，可使用数字和字母组合")
				$("em").eq(2).addClass("bg_n");
		}
		else if(!flag4){
			$(".intip").eq(3).html("")
				$("em").eq(3).addClass("bg_n");
		}
	}
	 
	 })
	//提交
//	$("#sub").click(function(){
//		if(flag1&&flag2&&flag3&&flag4){
//			location.href="../../login/html/mbaobao_login.html"
//										}
//		else{
//				if(!flag1){
//					$(".intip").eq(0).html("请写正确的11位号码，并进行验证")
//					$(".intip").eq(0).css("color","green");
//					$(this).css("border-color","red")
//							}
//	
//			else if(!flag2){
//							$(".intip").eq(1).html("请填写6-20位密码，可使用数字和字母组合")				
//							$(".intip").eq(1).css("color","green");
//							$(this).css("border-color","red")
//							}
//				else if(!flag3){
//								$(".intip").eq(2).html("请填写6-20位密码，可使用数字和字母组合")				
//								$(".intip").eq(2).css("color","green");
//								$(this).css("border-color","red")
//								}
//				
//				else if(!flag4){
//							$(".intip").eq(3).html("验证码有误，请核对好之后重新输入")				
//							$(".intip").eq(3).css("color","green");
//							$(this).css("border-color","red")
//								}
//				
//			}
//
//
//		
//							})
//	
	
	})