

$(function(){
	
	//导入公共的html回到顶部detail和购物车公用
	$("#gotop01").load("../../index/html/index.html #gotop")//回到顶部
	$("#head_2").load("../../index/html/index.html #head")//头部
	$("#foot").load("../../index/html/index.html #footer-wrapper")//底部
	$("#nav_2").load("../../index/html/index.html #nav-wrapper")
	//js控制回到顶部
	$(window).scroll(function(){
					   var sc=$(window).scrollTop();
					   var rwidth=$(window).width()
					   if(sc>0){
							    $(".sctop").css({"opacity":1});
							//    $(".sctop").css("left",(rwidth-36)+"px");
							     }
					   else{
							 $(".sctop").css({"opacity":0});	//改变透明度
					 	   }
  				 })
  		 $("#gotop01").on("click",".sctop",function(){//事件委托，因外部导入获取不到节点
		   var sc=$(window).scrollTop();
		   $('body,html').animate({scrollTop:0},500);
//回到顶部结束



   })
   //侧边栏回到顶部鼠标滑过时改变状态
$("#gotop01").on("mouseenter","li",function(){
	$(this).css({background:"white"})
 	$(this).children().eq(1).css({color:"#d41c4f"})
 	$(this).children().eq(1).find(".ewm").show()//显示二维码
})
$("#gotop01").on("mouseleave","li",function(){
   	$(this).css({background:"#d41c4f"})
   	$(this).children().eq(1).css({color:"white"})
   	$(this).children().eq(1).find(".ewm").hide()//隐藏二维码
})
	
	//二级菜单显示与隐藏
	$("#nav_2").on("mouseenter",".n_left",function(){
		$(".all_list").show()
	})
	$("#nav_2").on("mouseleave",".n_left",function(){
		$(".all_list").hide()
	})
	
	    //获取用户名cookie,显示在页面上
if($.cookie("username1")){
	$(".phone_num").html($.cookie("username1"))
	$(".zcdl").hide()
	$("#top_1 .tuichu").show()
	console.log($.cookie("username1"))
}
//点击退出时，用户名节点清空，还原原来未登录的样子
 $("#top_1").on("click",".tuichu",function(){
// 	open("../html/index.html","_parent")
	$("#top_1 .phone_num").html("");
	$("#top_1 .zcdl").show()
	$("#top_1 .tuichu").hide()
	
})
 
  if($.cookie("cart")){
		
		var arr=JSON.parse($.cookie("cart"));
		//console.log(arr)
		var sum=0;//头部小购物车件数的显示数量
		for(var i=0;i<arr.length;i++){		
		var obj=arr[i];
		sum+=obj.num;
		$(".num_one").html(sum)//头部小购物车件数的显示数量
		}
		console.log(sum)
	} 
})
