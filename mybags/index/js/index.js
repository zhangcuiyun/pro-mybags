//底部导航鼠标滑过改变样式

$(function(){
	//6楼限时抢购包包遮罩层的显示与隐藏的控制
	$(".act_001 li").hover(function(){
		var index=$(this).index(".act_001 li");
		$(this).children().stop(true).animate({height:400}).children().show()		
	},function(){
		var index=$(this).index(".act_001 li");
		$(this).children().eq(1).stop(true).animate({height:0}).children().hide()	
		console.log($(this).children())
	})
	
	//楼梯效果
	var bMoving = false; //表示是否点击了楼层按钮后正在执行滚动页面动画
				
				//点击楼层按钮
				$(".louti li").click(function(){
					
					//改变按钮的选中状态
					$(this).find("span").addClass("active")
						.parent().siblings().find("span").removeClass("active");
					
					//移动页面到指定楼层
					var index = $(this).index();
					var top = $("#main .foo").eq(index).offset().top;
					
					//动画滚动页面
					bMoving = true; //正在执行动画
					$("html,body").animate({scrollTop: top}, 300, function(){
						bMoving = false; //没有执行动画
					});
				})
			
				
				//滚动页面
				$(window).scroll(function(){
					if($(document).scrollTop()>=450){
					$(".louti").css({display:"block"})
					
					}
					else{
						$(".louti").css({display:"none"})
					}
					if (!bMoving) {
						
						var scrollTop = $(window).scrollTop();
						
						//遍历11个楼层的div
						var index = 0;
						$("#main .foo").each(function() {
							var top = $(this).offset().top;
							var winH = $(window).height(); //浏览器页面高度
							
							if (scrollTop + winH/2 >= top) {
								index = $(this).index();
							}
						});
						//console.log(index);
						
						//更改楼层按钮的选中状态
						$(".louti li").eq(index-1).find("span").addClass("active")
							.parent().siblings().find("span").removeClass("active");
					
					}
				})
				
		/*移动时改变margin-left的值*/
		$(".floor_4_bottom").on("mouseenter",".img",function(){
			$(this).stop(true).animate({"width":170,"height":170})
		})
		$(".floor_4_bottom").on("mouseleave",".img",function(){
			$(this).stop(true).animate({"width":150,"height":150})
		})
			
		$(".floor_5_bottom").on("mouseenter",".img",function(){
			$(this).stop(true).animate({"margin-left":"10px"})
		})
		$(".floor_5_bottom").on("mouseleave",".img",function(){
			$(this).stop(true).animate({"margin-left":"0px"})
		})
					
	//吸顶效果
	var timer//定义全局变量
	$(window).scroll(function(){
		clearInterval(timer)
		if($(document).scrollTop()>0){
			timer=setTimeout(function(){
				$("#head").addClass("abc");
				console.log($(document).scrollTop())
			},100)
		}
		else{
			timer=setTimeout(function(){
				$("#head").removeClass("abc")
			},100)
		}
	})
	//box-shadow 二级菜单
	$(".all_list>li").hover(function(){
		//$(this).css({"box-shadow":"1px 1px 1px 1px white","margin-top":0})
		
		$(this).css({"box-shadow":"2px 2px 2px #ccc","margin-top":"2px"})
	},function(){
		//$(this).css({"box-shadow":"1px 1px 1px 1px white","margin-top":0})
		$(this).css({"box-shadow":"2px 2px 2px #fff","margin-top":"0px",width:228})
		//$(this).css({"border-right":"1px solid #ccc"})
	})
	
	
//  var TIMER;//定义全局变量
//  $(window).scroll( function() {
//      clearTimeout(TIMER);//必须要有这句
//      if( $(document).scrollTop() > 0 ){
//          TIMER = setTimeout(function(){
//              $("#head").addClass("abc");
//             // $("#header-wrapper").addClass("abc");
//              console.log($(document).scrollTop());
//          },100);
//      }else{
//          TIMER = setTimeout(function(){
//              $("#head").removeClass("abc");
//             
//             //$("#header-wrapper").removeClass("abc");
//          },100);
//      }
//  });

	
	
	//封装一个改变css样式的函数obj是元素节点对象，attr1是鼠标滑过时改变的样式，attr2是鼠标离开时的样式
	function style01(obj,attr1,attr2){
				$(obj).hover(function(){
					$(this).css(attr1)
				},function(){
					$(this).css(attr2)
					
				})
		}
	
//二级菜单
//	$("#nav .n_left .all_list li").hover(function(){
//		$(this).children(":last").show()
//		$(this).css({"border-right":0})
//	},function(){
//		$(this).children(":last").hide()
//	})
//	
style01(".hot-shop li a",{color:"red","text-decoration":"underline"},{color:"#666","text-decoration":"none"})
style01(".hot-shop01 li a",{color:"red","text-decoration":"underline"},{color:"#666","text-decoration":"none"})
style01(".all_list li a",{"text-decoration":"underline"},{"text-decoration":"none"})
style01(".all_list li b",{"text-decoration":"underline"},{"text-decoration":"none"})
 
//商品列表中改变li中a的样式，点击加下划线及字体颜色改为red
	$(".floor_1_bottom,.floor_2_bottom,.floor_3_bottom,.floor_4_bottom,.floor_5_bottom").on("mouseenter","a",function(){
		$(this).addClass("active3")
	})
		
$(".floor_1_bottom,.floor_2_bottom,.floor_3_bottom,.floor_4_bottom,.floor_5_bottom").on("mouseleave","a",function(){
		$(this).removeClass("active3")
	})
		

//底部关于麦包包，样式改变，dt中的a的字体颜色和下划线
style01("#foot_cen dt a",{color:"red","text-decoration":"underline"},{color:"#333333","text-decoration":"none"})
//底部友情链接，样式改变，dt中的a的字体颜色和下划线
style01("#foot_cen dd a",{color:"#e61e56","text-decoration":"underline"},{color:"#888","text-decoration":"none"})	
//底部服务条款网站制度等	
style01(".p2 a",{"text-decoration":"underline"},{"text-decoration":"none"})	


  ///获取用户名cookie,显示在页面上
if($.cookie("username1")){
	$(".phone_num").html($.cookie("username1"))
	$(".zcdl").hide()
	$(".tuichu").show()
}
//点击退出时，用户名节点清空，还原原来未登录的样子
 $(".tuichu").click(function(){
// 	open("../html/index.html","_parent")
	$(".phone_num").html("");
	$(".zcdl").show()
	$(".tuichu").hide()
	$(".cart_toast").html("请先登录您的账户");
	$(".num_one").html("0")
	
})

	//首页头部小购物车头部显示商品
	//console.log($.cookie("cart"))
	//先获取cookie存的数据，进行解析后，遍历
	if($.cookie("cart")){
		
		var arr=JSON.parse($.cookie("cart"));
		//console.log(arr)
		var sum=0;//小购物车的件数显示；
		for(var i=0;i<arr.length;i++){		
			var obj=arr[i];
		//console.log(obj)
		//动态创建节点，并追加到cart_toast里面
		var li1= $("<li></li>").appendTo(".cart_toast");
		var  toast_img=$("<div class='toast_img'></div>").appendTo(li1);
		$("<img src="+obj.img+" />").appendTo(toast_img);
		var toast_content=$("<div class='toast_content'>"+obj.content+"</div>").appendTo(li1);
		var toast_num=$("<div class='toast_num'>"+obj.num+"</div>").appendTo(li1);
		var toast_num=$("<div class='toast_price'><strong>"+obj.unit+obj.showprice+"</strong><br><a  class='del' href='javascript:;'>【删除】</a>").appendTo(li1);
		//var toast_all=$("<li><span>"+JSON.parse($.cookie("jianshu"))+"件</span><span>"+obj.total+"</span></div></li>").appendTo(".cart_toast")
		sum+=obj.num;
		$(".num_one").html(sum)//小购物车数量显示
		
									} 
						}
	
	//del删除所选节点；
	else{
		var li1= $("<li></li>").appendTo(".cart_toast");
		$(li1).html("您的购物车还没有商品，先去购物吧")
	}
	
	$(".cart_toast").on("click",".del",function(){
		var index=$(this).index(".cart_toast .del")
		$(this).parents(".cart_toast li").remove()
		//console.log(1)
	})
		
//抛物线飞入购物车
	//点击加入购	//点击加入购物车
				$("#shownew").click(function(e){
					console.log(1)
					var flyer = $("<img class='u-flyer'/>"); //创建img节点, 给一个class=u-flyer
					flyer.attr("src", "lg.jpg"); //给img一张图
					
					//调用fly, 让图片飞
					flyer.fly({
						
						//起始位置 
						start: {
							left: e.clientX,
							top: e.clientY			 		
						},
						//结束位置
						end: {
							left: $(".icon_c").offset().left+30,
							top: $(".icon_c").offset().top-90,
							width: 0,
							height: 0 
						},
						//结束后
						onEnd: function(){
							flyer.remove();
							console.log("加入购物车成功!");
						}
					});
					
				})
				
		
		
})
