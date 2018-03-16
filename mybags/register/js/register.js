$(function(){
	/*注册验证*/
	var flag1=false;
	var flag2=false;
	var flag3=false;
	$("#phone").keyup(function(){
		var value=this.val();
		var reg= /^((13[0-9])|(14(5|7))|(15([0-3]|[5-9]))|(17[0-9])|(18[0-9])|199)\d{8}$/;
		if(reg.test(value)){
			var flag1=true;
			$(".intip").html("手机号输入码合法")
			$("i").addClass("bg_y")
		}
		else{
			var flag1=false;
			$(".intip").eq(0).html("手机号码输入不合法")
			$("i").eq(0).addClass("bg_y")
		}
	})
	
	
})
