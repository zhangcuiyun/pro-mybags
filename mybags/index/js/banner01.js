
//焦点图轮播(透明度轮播)
$(function() {

	var arr = [];
	var arr1 = [];
	var arr2=[];//二楼轮播图存放图片
	
	$.get("../js/banner01.json", function(responseData) {
		obj = responseData;		
		var arr = obj.banner01data;/*透明度轮播*/
		var arr1=obj.banner02data;/*一楼无缝轮播*/
		var arr2=obj.banner03data;/*二楼无缝轮播*/
		var arr3=obj.banner04data;/*三楼无缝轮播*/
		var arr4=obj.banner05data;/*四楼无缝轮播*/
		var arr5=obj.banner06data;/*五楼无缝轮播*/
		
		/*透明度轮播*/
		for(var i = 0; i < arr.length; i++) {
			var obj = arr[i];
			$("<li><img  src=" + obj.img + "></li>").appendTo("#b01_list");
			var li = $("<li></li>").appendTo("#b01_radio");
			if(i == 0) {
				li.addClass("active")
			}
		}
		lunbo1()
		/*一楼无缝轮播*/
		for(var j=0;j<arr1.length;j++){ 
			var obj1=arr1[j];
			$("<li><img src="+obj1.img+"/></li>").appendTo(".b02_list");
			var li=$("<li>"+obj1.content+"</li>").appendTo(".b02_radio");
			if(j == 0) {
				li.addClass("active1")
				
			}	 
		} 
		lunbo2()
		
		/*二楼无缝轮播*/
		for(var j=0;j<arr2.length;j++){
			var obj2=arr2[j];
			$("<li><img src="+obj2.img+" /></li>").appendTo(".b03_list");
			var li=$("<li>"+obj2.content+"</li>").appendTo(".b03_radio");
			if(j==0){
				li.addClass("active1")
			}
		}
	 lunbo3()
	 /*三楼无缝轮播*/
		for(var j=0;j<arr3.length;j++){
			var obj3=arr3[j];
			$("<li><img src="+obj3.img+" /></li>").appendTo(".b04_list");
			var li=$("<li>"+obj3.content+"</li>").appendTo(".b04_radio");
			if(j==0){
				li.addClass("active1")
			}
		}
	 lunbo4()
	 /*四楼无缝轮播*/
		for(var j=0;j<arr4.length;j++){
			var obj4=arr4[j];
			$("<li><img src="+obj4.img+" /></li>").appendTo(".b05_list");
			var li=$("<li>"+obj4.content+"</li>").appendTo(".b05_radio");
			if(j==0){
				li.addClass("active1")
			}
		}
	 lunbo5()
	 /*五楼无缝轮播*/
		for(var j=0;j<arr5.length;j++){
			var obj5=arr5[j];
			$("<li><img src="+obj5.img+" /></li>").appendTo(".b06_list");
			var li=$("<li>"+obj5.content+"</li>").appendTo(".b06_radio");
			if(j==0){
				li.addClass("active1")
			}
		}
	 lunbo6()
	})
//焦点图轮播(透明度轮播)
	function lunbo1() {
		var list1 = $("#b01_list")
		var list2 = $("#b01_radio")
		var li1 = $("#b01_list li")
		var li2 = $("#b01_radio li")
		li1.eq(0).show().siblings().hide();
		var size = $("#b01_list li").size();
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move()
		}, 2000)
		function move() {
			if(i == size) {
				i = 0
			}
			li1.eq(i).stop().fadeIn().siblings().stop().fadeOut()
			li2.eq(i).removeClass().addClass("active").siblings().removeClass("active");
		}
		li2.hover(function() {
			var index = $(this).index();
			i = index;
			move()
		})

		$("#banner-wrapper").hover(function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(function() {
					i++
					move();
				}, 2000)
			})
	}
	/*一楼无缝轮播*/
	function lunbo2(){
		var list1=$(".b02_list");
		var list2=$(".b02_radio");
		var li1=$(".b02_list li");
		var li2=$(".b02_radio li");
		//var as=$(".b02_radio a")
		//复制第一张图到最后
					li1.first().clone(true).appendTo(list1);
					var size = $(".b02_list li").size();
					var liW=li1.width();
					list1.width(liW*size);					
					//开启定时器
					var j = 0;
					var timer = setInterval(function(){
						j++;
						move();
					}, 2000);
					
					function move(){						
						if (j < 0) {
							list1.css("left", liW*(size-1));
							j = size-2;
						}						
						if (j>= size){
							list1.css("left", 0);
							j = 1;
						}						 
						list1.stop().animate({left:-j*liW}, 500);
						li2.eq(j).addClass("active1").siblings().removeClass("active1");
						if (j == size-1) {
							li2.eq(0).addClass("active1").siblings().removeClass("active1");							
						}
					}

		//		点击改变字体颜色及移动
				li2.click(function(){
						j = $(this).index();
						$(this).addClass("active2")
						move();
						$(this).siblings().removeClass("active2")
				})
				//鼠标离开，还原原来的样子
				li2.mouseleave(function(){
					$(this).removeClass("active2")
				})
				$(".floor_1_top_r").hover(function(){
					console.log("mouseenter");
					clearInterval(timer);
				}, 
				function(){
					console.log("mouseleave");
					timer = setInterval(function(){
						j++;
						move();
					}, 2000);
				})
			}
/*二楼无缝轮播*/
			function lunbo3(){
				var list1=$(".b03_list");
				var list2=$(".b03_radio");
				var li1=$(".b03_list li");
				var li2=$(".b03_radio li");		
				//复制第一张图到最后
							li1.first().clone(true).appendTo(list1);
							var size = $(".b03_list li").size();
							var liW=li1.width();
							list1.width(liW*size);					
							//开启定时器
							var j = 0;
							var timer = setInterval(function(){
								j++;
								move();
							}, 2000);
							
							function move(){						
								if (j < 0) {
									list1.css("left", liW*(size-1));
									j = size-2;
								}						
								if (j>= size){
									list1.css("left", 0);
									j = 1;
								}						 
								list1.stop().animate({left:-j*liW}, 500);
								li2.eq(j).addClass("active1").siblings().removeClass("active1");
								if (j == size-1) {
									li2.eq(0).addClass("active1").siblings().removeClass("active1");							
								}
							}
		
				//		点击改变字体颜色及移动
						li2.click(function(){
								j = $(this).index();
								$(this).addClass("active2")
								move();
								$(this).siblings().removeClass("active2")
						})
						//鼠标离开，还原原来的样子
						li2.mouseleave(function(){
							$(this).removeClass("active2")
						})
						$(".floor_2_top_r").hover(function(){
							console.log("mouseenter");
							clearInterval(timer);
						}, 
						function(){ 
							console.log("mouseleave");
							timer = setInterval(function(){
								j++;
								move();
							}, 2000);
						})
					} 
	/*三楼无缝轮播*/
			function lunbo4(){
				var list1=$(".b04_list");
				var list2=$(".b04_radio");
				var li1=$(".b04_list li");
				var li2=$(".b04_radio li");		
				//复制第一张图到最后
							li1.first().clone(true).appendTo(list1);
							var size = $(".b04_list li").size();
							var liW=li1.width();
							list1.width(liW*size);					
							//开启定时器
							var j = 0;
							var timer = setInterval(function(){
								j++;
								move();
							}, 2000);
							
							function move(){						
								if (j < 0) {
									list1.css("left", liW*(size-1));
									j = size-2;
								}						
								if (j>= size){
									list1.css("left", 0);
									j = 1;
								}						 
								list1.stop().animate({left:-j*liW}, 500);
								li2.eq(j).addClass("active1").siblings().removeClass("active1");
								if (j == size-1) {
									li2.eq(0).addClass("active1").siblings().removeClass("active1");							
								}
							}
		
				//		点击改变字体颜色及移动
						li2.click(function(){
								j = $(this).index();
								$(this).addClass("active2")
								move();
								$(this).siblings().removeClass("active2")
						})
						//鼠标离开，还原原来的样子
						li2.mouseleave(function(){
							$(this).removeClass("active2")
						})
						$(".floor_3_top_r").hover(function(){
							console.log("mouseenter");
							clearInterval(timer);
						}, 
						function(){
							console.log("mouseleave");
							timer = setInterval(function(){
								j++;
								move();
							}, 2000);
						})
					}
	/*四楼无缝轮播*/
			function lunbo5(){
				var list1=$(".b05_list");
				var list2=$(".b05_radio");
				var li1=$(".b05_list li");
				var li2=$(".b05_radio li");		
				//复制第一张图到最后
							li1.first().clone(true).appendTo(list1);
							var size = $(".b05_list li").size();
							var liW=li1.width();
							list1.width(liW*size);					
							//开启定时器
							var j = 0;
							var timer = setInterval(function(){
								j++;
								move();
							}, 2000);
							
							function move(){						
								if (j < 0) {
									list1.css("left", liW*(size-1));
									j = size-2;
								}						
								if (j>= size){
									list1.css("left", 0);
									j = 1;
								}						 
								list1.stop().animate({left:-j*liW}, 500);
								li2.eq(j).addClass("active1").siblings().removeClass("active1");
								if (j == size-1) {
									li2.eq(0).addClass("active1").siblings().removeClass("active1");							
								}
							}
		
				//		点击改变字体颜色及移动
						li2.click(function(){
								j = $(this).index();
								$(this).addClass("active2")
								move();
								$(this).siblings().removeClass("active2")
						})
						//鼠标离开，还原原来的样子
						li2.mouseleave(function(){
							$(this).removeClass("active2")
						})
						$(".floor_3_top_r").hover(function(){
							console.log("mouseenter");
							clearInterval(timer);
						}, 
						function(){
							console.log("mouseleave");
							timer = setInterval(function(){
								j++;
								move();
							}, 2000);
						})
					}		
	/*五楼无缝轮播*/
			function lunbo6(){
				var list1=$(".b06_list");
				var list2=$(".b06_radio");
				var li1=$(".b06_list li");
				var li2=$(".b06_radio li");		
				//复制第一张图到最后
							li1.first().clone(true).appendTo(list1);
							var size = $(".b06_list li").size();
							var liW=li1.width();
							list1.width(liW*size);					
							//开启定时器
							var j = 0;
							var timer = setInterval(function(){
								j++;
								move();
							}, 2000);
							
							function move(){						
								if (j < 0) {
									list1.css("left", liW*(size-1));
									j = size-2;
								}						
								if (j>= size){
									list1.css("left", 0);
									j = 1;
								}						 
								list1.stop().animate({left:-j*liW}, 500);
								li2.eq(j).addClass("active1").siblings().removeClass("active1");
								if (j == size-1) {
									li2.eq(0).addClass("active1").siblings().removeClass("active1");							
								}
							}
		
				//		点击改变字体颜色及移动
						li2.click(function(){
								j = $(this).index();
								$(this).addClass("active2")
								move();
								$(this).siblings().removeClass("active2")
						})
						//鼠标离开，还原原来的样子
						li2.mouseleave(function(){
							$(this).removeClass("active2")
						})
						$(".floor_3_top_r").hover(function(){
							console.log("mouseenter");
							clearInterval(timer);
						}, 
						function(){
							console.log("mouseleave");
							timer = setInterval(function(){
								j++;
								move();
							}, 2000);
						})
					}				
			
			
})