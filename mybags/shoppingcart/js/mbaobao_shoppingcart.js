$(function(){

//购物车
refreshUI();

	function refreshUI() {

		//获取购物车cookie商品
		var arr = $.cookie("cart");
	//	console.log(arr)
		if(arr) {
			//如果数组不为undefined,则解析
			arr = JSON.parse(arr);

			//先移除旧节点
			$(".lists01").empty();

			//然后再显示最新的cookie数据
			//创建节点， 显示购物车商品
			var totals = 0;//总价，包含运费
			var total01=0//总价，不包含运费
			
			//新添加
			var allnum=0;//总件数
			var yunfeis=0;
			for(var i = 0; i < arr.length; i++) {
				var obj = arr[i];

				//创建购物车里的li节点
		var li = $("<li class='clear'></li>").appendTo(".lists01");
		var div0=$("<div></div>").appendTo(li);

			if(obj.checked){
			$('<input class="ckbox" type="checkbox" checked />').appendTo(div0); 			
			}
			else{
			$('<input class="ckbox" type="checkbox"  />').appendTo(div0); 							
			}
			//创建其他节点，并显示
		var div1=$("<div></div>").appendTo(li);
		$("<img class='img' src="+obj.img+" />").appendTo(div1);
		var div2=$("<div></div>").appendTo(li);
		$("<span>"+obj.content+"</span><br/><span>"+obj.danhao+"</span>").appendTo(div2)
		var div3=$("<div></div>").appendTo(li);
		$("<b>"+obj.unit+"</b><strong>"+obj.showprice+"</strong>").appendTo(div3)
		var div4=$("<div></div>").appendTo(li);
		$("<input class='add' type='text' value='+' /><input class='num' type='text' value="+obj.num+" /><input class='reduce' type='text' value='-' />").appendTo(div4)
		var div5=$("<div></div>").appendTo(li);
		$("<b>"+obj.unit+"</b><strong>"+(obj.showprice*obj.num).toFixed(2)+"</strong><a class='del'>删除</a>").appendTo(div5)
		//创建首页小购物车里的li节点
//		var li1= $("<li></li>").appendTo(".cart_toast");
//		var  toast_img=$("<div class='toast_img'></div>").appendTo(li1);
//		$("<img src="+obj.img+" />").appendTo(toast_img);
//		var toast_content=$("<div class='toast_content'>"+obj.content+"</div>").appendTo(li1);
//		var toast_num=$("<div class='toast_num'></div>").appendTo(li1);
//		var toast_num=$("<div class='toast_price'></div>").appendTo(li1);
		




				//将勾选的商品价格进行累加
				if(obj.checked) {
					//总金额
					yunfeis+=(obj.yunfei-0)*obj.num;
					totals += obj.showprice * obj.num
//					totals += obj.showprice * obj.num+yunfeis
//					total01+=obj.showprice* obj.num
					//总数量
					allnum+=obj.num;					
					$(".allnum").html(allnum);
//					$.cookie("jianshu",JSON.stringify($(".allnum").html()),{expires:30,path:"/"})
//					console.log($.cookie("jianshu"))
					
//					var jianshu=$(".allnum").html(allnum);
//					$.cookie("cart",JSON.stringify(jianshu),{expires:30,path:"/"})
//					console.log($.cookie("cart"))
//					var obj=JSON.parse($.cookie("cart")
//					console.log(obj.jianshu)
//					refreshUI()
					//总运费
					
//					$(".yunfei").html(yunfeis);
//					$.cookie("yunfei",JSON.stringify($(".yunfei").html()),{expires:30,path:"/"})
					
				}
//				 console.log($.cookie("jianshu"))
//				 console.log($.cookie("yunfei"))
//				 else{
//				 	$(".allnum").html(0+"件");
//					$.cookie("jianshu",JSON.stringify($(".allnum").html()),{expires:30,path:"/"})
//				 }
				 
			}
			
			//显示总价 
				//$(".total").html(obj.unit+totals.toFixed(2));
		$(".total").html(totals.toFixed(2));
//			$(".total01").html(obj.unit+total01.toFixed(2));
			//$.cookie("zongjine",JSON.stringify(totals),{expires:30,path:"/"})
			//console.log($.cookie("zongjine")) 
		} else {
			console.log("您还没有买过商品，请先移步到首页购买商品");
		}
	}

	//删除
	$(".lists01").on("click", ".del", function() {
		//获取原来的cookie
		var cookieArr = JSON.parse($.cookie("cart"));
		var index = $(this).index(".clear .del");

		//修改cookie
		cookieArr.splice(index, 1);
		//var jianshu=JSON.parse($.cookie("jianshu"))
		//jianshu-=JSON.parse($.cookie("cart"));
//		$.cookie("janshu",JSON.stringify(jianshu),{expires:30,path:"/"});
		//$.cookie("jianshu",JSON.stringify($(".allnum").html()),{expires:30,path:"/"})
		//console.log($.cookie("jianshu"))
		

		//重新存入最新的cookieArr,替换原来的cookie
		$.cookie("cart", JSON.stringify(cookieArr), {
			expires: 30,
			path: "/"
		});

		//判断是否全选了
		isAllChecked();

		//刷新UI
		refreshUI();
	});

	//+
	$(".lists01").on("click", ".add", function() {
		//获取原来的cookie
		var cookieArr = JSON.parse($.cookie("cart"));
		var index = $(this).index(".lists01 .add");

		//修改cookie
		cookieArr[index].num++;
	if(cookieArr[index].num>5){
		cookieArr[index].num=5;
		alert("一种商品一次最多只能购买5件")
	}
		//重新存入最新的cookieArr,替换原来的cookie
		$.cookie("cart", JSON.stringify(cookieArr), {
			expires: 30,
			path: "/"
		});

		//刷新UI
		refreshUI();
	})

	//-

	$(".lists01").on("click", ".reduce", function() {
		//获取原来的cookie
		var cookieArr = JSON.parse($.cookie("cart"));
		var index = $(this).index(".lists01 .reduce");

		//修改cookie
		cookieArr[index].num--;
		if(cookieArr[index].num <= 0) {
			cookieArr[index].num = 1;
		}

		//重新存入最新的cookieArr,替换原来的cookie
		$.cookie("cart", JSON.stringify(cookieArr), {
			expires: 30,
			path: "/"
		});
		
		//刷新UI
		refreshUI();
	})

	//勾选
	$(".lists01").on("click", ".ckbox", function() {
		//获取原来的cookie
		var cookieArr = JSON.parse($.cookie("cart"));
		var index = $(this).index(".lists01 .ckbox");

		//修改cookie
		cookieArr[index].checked = !cookieArr[index].checked;

		//重新存入最新的cookieArr,替换原来的cookie
		$.cookie("cart", JSON.stringify(cookieArr), {
			expires: 30,
			path: "/"
		});

		//判断是否全选了
		isAllChecked();

		//刷新UI
		refreshUI();
	})

	//判断是否全选了
	isAllChecked();

	function isAllChecked() {
		//如果没有cookie,则直接返回
		if(!$.cookie("cart")) {
			return;
		}
		var cookieArr = JSON.parse($.cookie("cart"));

		var sum = 0;
		for(var i = 0; i < cookieArr.length; i++) {
			sum += cookieArr[i].checked;
			
		}

		//全选了
		if(cookieArr.length != 0 && sum == cookieArr.length) {
			$(".allcheck").prop("checked", true);
		} else { //没有全选
			$(".allcheck").prop("checked", false);
		}

	}

	//全选
	$(".allcheck").click(function() {
		//如果没有cookie,则直接返回
		if(!$.cookie("cart")) {
			return;
		}
		var cookieArr = JSON.parse($.cookie("cart"));
		//console.log($(this).prop("checked"));

		//遍历cookieArr
		for(var i = 0; i < cookieArr.length; i++) {

			if($(this).prop("checked")) {
				cookieArr[i].checked = true; //全选
			} else {
				cookieArr[i].checked = false; //全不选
			}
		}

		//重新存入最新的cookieArr,替换原来的cookie
		$.cookie("cart", JSON.stringify(cookieArr), {
			expires: 30,
			path: "/"
		});

		//刷新UI
		refreshUI();
	})

	//删除选中
	$("#delSelect").click(function() {
		//如果没有cookie,则直接返回
		if(!$.cookie("cart")) {
			return;
		}
		var cookieArr = JSON.parse($.cookie("cart"));

		//遍历cookieArr
		var newArr = [];
		for(var i = 0; i < cookieArr.length; i++) {
			if(cookieArr[i].checked == false) {
				newArr.push(cookieArr[i]);
			}
		}

		//重新存入最新的cookieArr,替换原来的cookie
		$.cookie("cart", JSON.stringify(newArr), {
			expires: 30,
			path: "/"
		});

		//刷新UI
		refreshUI();
	})

if($.cookie("username1")){
	$(".username").html($.cookie("username1"))
}
	
})
