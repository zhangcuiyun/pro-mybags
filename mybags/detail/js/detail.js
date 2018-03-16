	$(function(){
	//导入首页头部
				$("#top_1").load("../../index/html/index.html #top-wrapper")
				$("#head_1").load("../../index/html/index.html #header-wrapper")
				$("#nav_1").load("../../index/html/index.html #nav-wrapper")
				
//鼠标滑过时，回到顶部侧边栏背景颜色变白
   $("#gotop01 li").hover(function(){
   	$(this).css({background:"white"})
   	$(this).children().eq(1).css({color:"#d41c4f"})
   	$(this).children().eq(1).find(".ewm").show()//显示二维码
   },function(){
   	$(this).css({background:"#d41c4f"})
   	$(this).children().eq(1).css({color:"white"})
   	 	$(this).children().eq(1).find(".ewm").hide()//隐藏二维码
   })	
   
    //获取用户名cookie,显示在页面上
if($.cookie("username1")){
	$("#top_1 .phone_num").html($.cookie("username1"))
	$("#top_1 .zcdl").hide()
	$("#top_1 .tuichu").show()
}
//点击退出时，用户名节点清空，还原原来未登录的样子
 $(".tuichu").click(function(){
// 	open("../html/index.html","_parent")
	$(".phone_num").html("");
	$(".zcdl").show()
	$(".tuichu").hide()
	
})
//获取数据，显示在商品详情上
//先获取商品的id
	var params = location.search;
	//console.log(params); //"?id=103&w=22"
	var myId = getParam(params, "id");
	//console.log(myId);

	var myObj = {};
	//获取json中匹配id的商品数据
	$.get("../../index/js/goods.json", function(responseDate) {

		var arr = responseDate.goods01;
		//console.log(arr);
		for(var i = 0; i < arr.length; i++) {
			var obj = arr[i];
		//	console.log(obj);  	
		//console.log(obj.imgs1) 	
			if(obj.id == myId) {
				//obj对象就是当前商品详情的数据
				myObj = {
					id: obj.id,
					content: obj.content,
					showprice:obj.showprice,
					markprice: obj.markprice,
					unit: obj.unit,
					shopprice: obj.shopprice,
					yunfei:obj.yunfei,
					danhao:obj.danhao,
					img: obj.img,					
					num: 1, //商品数量
					checked: true //选中状态 
					
				}
				//	console.log(myObj.price)
				//刷新页面的一部分
				refreshUI(obj);
			} 
		}
		

		

 //首页头部小购物车头部显示商品
	//console.log($.cookie("cart"))
	//先获取cookie存的数据，进行解析后，遍历
	if($.cookie("cart")){
		
		var arr=JSON.parse($.cookie("cart"));
		//console.log(arr)
		var sum=0;//头部小购物车件数的显示数量
		for(var i=0;i<arr.length;i++){		
		var obj=arr[i];
		sum+=obj.num;
		$(".num_one").html(sum)//头部小购物车件数的显示数量
		//console.log(sum)
		//动态创建节点，并追加到cart_toast里面
		var li1= $("<li></li>").appendTo(".cart_toast");
		var  toast_img=$("<div class='toast_img'></div>").appendTo(li1);
		$("<img src="+obj.img+" />").appendTo(toast_img);
		var toast_content=$("<div class='toast_content'>"+obj.content+"</div>").appendTo(li1);
		var toast_num=$("<div class='toast_num'>"+obj.num+"</div>").appendTo(li1);
		var toast_num=$("<div class='toast_price'><strong>"+obj.unit+obj.showprice+"</strong><br><a  class='del' href='javascript:;'>【删除】</a>").appendTo(li1);

										}
						}
	
	//del删除所选节点；
	else{
		var li1= $("<li></li>").appendTo(".cart_toast");
		$(li1).html("您的购物车还没有商品，先去购物吧")
	}
	//删除按钮
	
	$(".cart_toast").on("click",".del",function(){
		var index=$(this).index(".cart_toast .del")
		$(this).parents(".cart_toast li").remove()
		//console.log(1)
		})
	})

	//刷新页面的一部分
	function refreshUI(obj) {
		//包包图片
		$(".img1").attr("src", obj.img);
		//包包详情
		$(".content").html(obj.content);
		//市场价
		$(".markprice").html(obj.markprice);
		//现售价
		$(".showprice").html(obj.showprice);
		//单位
		$(".unit").html(obj.unit);
		//包包销售量
		$(".xsl").html(obj.xsl) 
		//包包评论量 
		$(".pl").html(obj.pl)
		//点击跳转时显示第一张图片
		$("#bigImg").attr("src",obj.imgs2[0])
		//默认选择的小图片，在商品价格下
		
//创建list里面的li小图片
	var arr1=obj.imgs1; 
	for(var j=0;j<arr1.length;j++){
	$("<li><img src="+obj.imgs1[j]+"/></li>").appendTo("#list");
	console.log(obj.imgs1[j])
	
		}
		
	}

	//获取参数字符串paramStr中的参数name
	function getParam(paramStr, name) {
		paramStr = paramStr.substring(1); //id=103&w=22
		var arr = paramStr.split("&");
		for(var i = 0; i < arr.length; i++) {
			var str2 = arr[i]; //id=103

			var arr2 = str2.split("=");
			if(arr2[0] == name) {
				return arr2[1];
			} 
		}
		return "";
	}
	
	//加入购物车
	//	//建立cookies加购物车;
	$(".buy").click(function() {
		//取出其中一部分数据并保存到另一个对象myObj中

		//使用cookie
		//获取原来保存在cookie中的购物车商品， 如果没有商品则将数组cookieArr设置为空数组[]
		var cookieArr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];

		//遍历原来cookie中是否存在和当前即将加入购物车的商品相同
		var isExist = false; //表示是否存在相同商品
		for(var i = 0; i < cookieArr.length; i++) {
			if(cookieArr[i].id == myObj.id) {
				//存在相同商品
				//console.log($("#num").val());
				cookieArr[i].num++;
				isExist = true; //表示存在相同商品

			}
		}
		//如果不存在相同商品， 则添加当前商品
		if(!isExist) {
			cookieArr.push(myObj);
		}

		//添加(替换原来的)cookie
		$.cookie("cart", JSON.stringify(cookieArr), {
			expires: 30,
			path: "/"
		});
		console.log($.cookie("cart"));

	})
	
	

	})
	
	//放大镜
	onload = function() {

	function $(id) {
		return document.getElementById(id);
	}

	//在中等图上移动
	$("middleImg").onmousemove = function(e) {
		e = e || event;

		//显示中等区域和大区域
		$("middleArea").style.display = "block";
		$("bigArea").style.display = "block";

		//放大系数
		var scale = $("bigImg").offsetHeight / $("middleImg").offsetHeight;

		//计算小区域跟随鼠标移动
		var x = e.pageX - $("detail_l").offsetLeft - $("middleImg").offsetLeft - $("middleArea").offsetWidth / 2;
		var y = e.pageY - $("detail_l").offsetTop - $("middleImg").offsetTop - $("middleArea").offsetHeight / 2;

		//判断边界
		if(x <= 0) x = 0;
		else if(x >= $("middleImg").offsetWidth - $("middleArea").offsetWidth) {
			x = $("middleImg").offsetWidth - $("middleArea").offsetWidth
		}
		if(y <= 0) y = 0;
		else if(y >= $("middleImg").offsetHeight - $("middleArea").offsetHeight) {
			y = $("middleImg").offsetHeight - $("middleArea").offsetHeight
		}
		//移动中等区域
		$("middleArea").style.left = x + 'px';
		$("middleArea").style.top = y + 'px';

		//移动大图
		$("bigImg").style.left = -x * scale + "px";
		$("bigImg").style.top = -y * scale + "px";

	}

	//移出中等图片
	$("middleImg").onmouseleave = function() {
		//隐藏中等区域和大区域

		$("middleArea").style.display = "none";
		$("bigArea").style.display = "none";
	}

	//点击小图片
	var ali = $("list").getElementsByTagName("li");
	for(var i = 0; i < ali.length; i++) {
		ali[i].onclick = function() {
			this.style.border = "2px solid red"
			var src = this.children[0].getAttribute("src");
			$("middleImg").children[0].src = src.replace('_1', '_2');
		
			$("bigImg").src = src.replace('_1', '_3');
		}
		ali[i].onmouseleave = function() {
			
			this.style.border = "2px solid #ccc"
		}
	}

}