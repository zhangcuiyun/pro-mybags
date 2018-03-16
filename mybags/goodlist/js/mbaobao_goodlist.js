$(function(){
    //获取用户名cookie,显示在页面上
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
	
})

//	手风琴效果
//	$(".base01 .arrow").hover(function(){
//		$(this).parent().stop(true).animate({height:200})
//		console.log("1")
//		
//	},function(){
//		$(this).parent().stop(true).animate({height:32})
//	})
	//控制筛选条件的显示及隐藏
	$(".base01 .arrow").click(function(){
		$(this).parent().animate({height:200})
		$(this).siblings(".arrow1").css({opacity:1})
		$(this).hide()
		
		console.log(1)})
	
	$(".base01 .arrow1").click(function(){
		$(this).parent().animate({height:32})
		$(this).siblings(".arrow").show()
		$(this).css("opacity",0) 
		
		console.log(1)})
	//鼠标滑过筛选下拉小列表里面的小列表时，改变小列表背景颜色
	$(".child1>li").hover(function(){
		$(this).css({background:"#cc0001",color:"white"})
	},function(){
		$(this).css({background:"white",color:"#666666"})
	})
//base01的小列表滑过时改变字体颜色
$(".base01>li").hover(function(){
	$(this).css({color:"#d41c4f"})
},function(){
	$(this).css({color:"#666666"})
})

//商品详情排序
//商品列表
	var baseId = 0;
	var pepoleId = 0;
	var flag = 1;
	var list = $(".goods-list");
	refresh();
	function refresh(){
		$(".goods-list").html("")
		$.get("../js/goodlist.json",function(data){
			var obj = data;
			var arr = [];
			var arr2 = [];
			var arr3 = [];
			arr = obj.bags;
			if(baseId == 0 && pepoleId == 0){
				for(var i=0;i<arr.length;i++){
					arr2.push(arr[i]);

				}

				arr2 = paixu(flag,arr2);
				for(var i=0;i<arr2.length;i++){
					var li=$("<li></li>").appendTo(".goods-list")
					var img=$("<img src="+ arr2[i].img +"/>").appendTo(li);
					var p1=$("<p class='p1'></p>").appendTo(li)
					var price=$("<span class='price'>"+arr2[i].unit+arr2[i].showprice+"</span>").appendTo(p1)
					var markprice=$("<span class='markprice'>"+arr2[i].unit+arr2[i].markprice+"</span>").appendTo(p1)
					var p2=$("<p class='p2'></p>").appendTo(li);			
					var sp1=$("<span class='sp1'>"+arr2[i].name+"<span>").appendTo(p2)
					var p3=$("<p class='p3'><span style='margin-right:10px'>人气</span>"+arr2[i].score+"</p>").appendTo(li)
				}
			}
			else if(baseId != 0 && pepoleId == 0){
				console.log(pepoleId );
				for(var i=0;i<arr.length;i++){
					if(arr[i].base == baseId){
						arr2.push(arr[i]);
					};
				}
				arr2 = paixu(flag,arr2);
				for(var i=0;i<arr2.length;i++){
				var li=$("<li></li>").appendTo(".goods-list")
					var img=$("<img src="+ arr2[i].img +"/>").appendTo(li);
					var p1=$("<p class='p1'></p>").appendTo(li)
					var price=$("<span class='price'>"+arr2[i].unit+arr2[i].showprice+"</span>").appendTo(p1)
					var markprice=$("<span class='markprice'>"+arr2[i].unit+arr2[i].markprice+"</span>").appendTo(p1)
					var p2=$("<p class='p2'></p>").appendTo(li);
					var sp1=$("<span class='sp1'>"+arr2[i].name+"<span>").appendTo(p2)
					var p3=$("<p class='p3'><span style='margin-right:10px'>人气</span>"+arr2[i].score+"</p>").appendTo(li)											
				}
				
			}
			else if(baseId == 0 && pepoleId != 0){
				for(var i=0;i<arr.length;i++){
					if(arr[i].pepole == pepoleId){
						arr2.push(arr[i]);
					}; 
				}
				console.log(flag)
				arr2 = paixu(flag,arr2);
				for(var i=0;i<arr2.length;i++){				
				var li=$("<li></li>").appendTo(".goods-list")
					var img=$("<img src="+ arr2[i].img +"/>").appendTo(li);
					var p1=$("<p class='p1'></p>").appendTo(li)
					var price=$("<span class='showprice'>"+arr2[i].unit+arr2[i].showprice+"</span>").appendTo(p1)
					var markprice=$("<span class='markprice'>"+arr2[i].unit+arr2[i].markprice+"</span>").appendTo(p1)
					var p2=$("<p class='p2'></p>").appendTo(li);
					var sp1=$("<span class='sp1'>"+arr2[i].name+"<span>").appendTo(p2)
					var p3=$("<p class='p3'><span style='margin-right:10px'>人气</span>"+arr2[i].score+"</p>").appendTo(li)									
				}
				
			}
			else{
				for(var i=0;i<arr.length;i++){					
					if(arr[i].base== baseId && arr[i].pepole == pepoleId ){
						arr2.push(arr[i]);
						console.log(pepoleId)
					};
				}
				arr2 = paixu(flag,arr2);
				for(var i=0;i<arr2.length;i++){				
				var li=$("<li></li>").appendTo(".goods-list")
					var img=$("<img src="+ arr2[i].img +"/>").appendTo(li);
					var p1=$("<p class='p1'></p>").appendTo(li)
					var price=$("<span class='price'>"+arr2[i].unit+arr2[i].showprice+"</span>").appendTo(p1)
					var markprice=$("<span class='markprice'>"+arr2[i].unit+arr2[i].markprice+"</span>").appendTo(p1)
					var p2=$("<p class='p2'></p>").appendTo(li);
					var sp1=$("<span class='sp1'>"+arr2[i].name+"<span>").appendTo(p2)
					var p3=$("<p class='p3'><span style='margin-right:10px'>人气</span>"+arr2[i].score+"</p>").appendTo(li)								
				}
				
			}
			function paixu(flag,arr2){
				if (flag == 1) {
					for(var i =0;i<arr2.length;i++){
						for (var j=0; j<arr2.length-1-i; j++) {
							if ((arr2[j].score) < (arr2[j+1].score)) {
								var tmp = arr2[j];
								arr2[j] = arr2[j+1];
								arr2[j+1] = tmp;
							}
						}
					}
					
				}
				else if(flag == 2){
					for(var i =0;i<arr2.length;i++){
						for (var j=0; j<arr2.length-1-i; j++) {
							if ((arr2[j].showprice-0) < (arr2[j+1].showprice-0)) {
								var tmp = arr2[j];
								arr2[j] = arr2[j+1];
								arr2[j+1] = tmp;
							}
						}
					}
					
					console.log(arr2);
				}
				return arr2;
			}
			
		})
	}
	$(".child1 li").click(function(){		
		var index=  $(this).index(".child1 li");
		//$(this).addClass("active").siblings("li").removeClass("active")
		baseId = index;
		console.log(index);
		refresh()
		$(".tip").html($(this).html())//显示筛选信息
	})
	$(".child2 li").click(function(){		
		var index=  $(this).index(".child2 li");
		//$(this).addClass("active").siblings("span").removeClass("active")
		console.log(index);
		pepoleId = index;
		refresh()
		$(".tip1").html($(this).html())//显示筛选信息
	})
	$(".pxmethod em").click(function(){
		flag = $(this).index()+1;
		console.log(flag);
		refresh() 
		
})
//		$(".pxmethod .rq01").click(function(){
//		flag = $(this).index(".rq01");
//		console.log(flag);
//		refresh() 
//		
//})
//	
	//重置筛选
	$(".replace01").click(function(){
		$(".tip,.tip1").html("")
		if(baseId == 0 && pepoleId == 0){
				for(var i=0;i<arr.length;i++){
					arr2.push(arr[i]);

				}

				arr2 = paixu(flag,arr2);
				for(var i=0;i<arr2.length;i++){
					var li=$("<li></li>").appendTo(".goods-list")
					var img=$("<img src="+ arr2[i].img +"/>").appendTo(li);
					var p1=$("<p class='p1'></p>").appendTo(li)
					var price=$("<span class='price'>"+arr2[i].unit+arr2[i].showprice+"</span>").appendTo(p1)
					var markprice=$("<span class='markprice'>"+arr2[i].unit+arr2[i].markprice+"</span>").appendTo(p1)
					var p2=$("<p class='p2'></p>").appendTo(li);			
					var sp1=$("<span class='sp1'>"+arr2[i].name+"<span>").appendTo(p2)
					var p3=$("<p class='p3'><span style='margin-right:10px'>人气</span>"+arr2[i].score+"</p>").appendTo(li)
				}
			}
	})
	
	//box-shadow 阴影
	$(".goods-list").on("mouseenter","li",function(){
		console.log(5)
		$(this).css({"box-shadow":" 5px 5px 10px 5px #ccc"})
		$(this).children().eq(2).css({color:"yellow"})
	})
	$(".goods-list").on("mouseleave","li",function(){
	//	console.log(5)
		$(this).css({"box-shadow":" 0px 0px 0px white"})
			$(this).children().eq(2).css({color:"#666666"})
	})
})