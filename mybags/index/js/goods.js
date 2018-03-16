	$(function(){
		
		//控制限时抢购小列表显示与隐藏
//		$(".bag_p li").hover(function(){
//			var index=$(this).index(".bag_p li")
//			$(this).children().eq(0).addClass("active6")	
//			console.log(index)
//			$(".floor_7_right ul").eq(index).css({display:"block"}).siblings().css({display:"none"})
//		},function(){
//			var index=$(this).index(".bag_p li")
//		$(this).children().eq(0).removeClass("active6")
//		})
//		
//控制限时抢购小列表显示与隐藏
$(".bag_p li").click(function(){
	var index=$(this).index(".bag_p li")
	$(this).children().eq(0).addClass("active6").parent().siblings().children().removeClass("active6")
	$(".floor_7_right ul").eq(index).css({display:"block"}).siblings().css({display:"none"})
})
		//鼠标移入小列表时改变css
		$(".floor_7_right").on("mouseenter","li",function(){
			var index=$(this).index(".floor_7_right li")
			$(this).children().eq(0).animate({"margin-left":20})
			$(this).children().eq(1).addClass("active00")
			
			
			
		})
			$(".floor_7_right").on("mouseleave","li",function(){
			var index=$(this).index(".floor_7_right li")
			$(this).children().eq(0).animate({"margin-left":0})
			$(this).children().eq(1).removeClass("active00")
			
		})
	//先获取json数据
		$.get("../js/goods.json",function(responseData){
			//得到返回的对象
			
			var obj=responseData;
			var arr=obj.shownew//一楼上面的三张图片
			var arr1=obj.goods01;//一楼商品小列表
			var arr2=obj.goods02;//二楼商品小列表
			var arr3=obj.goods03;//三楼商品小列表
			var arr4=obj.goods04;//四楼商品小列表
			var arr5=obj.goods05;//五楼商品小列表
			var arr6=obj.logos//六楼小logo
			var arr7=obj.qgs//限时抢购
			var arr8=obj.bag_one//小列表，tab切换
			var arr9=obj.bag_two//小列表，tab切换
			var arr10=obj.bag_three//小列表，tab切换
			
			//遍历数组
			//一楼上面的三张图片
			for(var i=0;i<arr.length;i++){
				var obj=arr[i];
				$("<li><a href='javascript:;'><img src="+obj.img +"/></a></li>").appendTo("#shownew")
			}
			//一楼商品小列表
			for(var i=0;i<arr1.length;i++){
				var obj1=arr1[i];
				//创建li节点，并动态添加到floor_1_bottom里；
				var li=$("<li></li>").appendTo(".floor_1_bottom");
				//创建a节点和img节点动态添加到li节点上
				$("<a href='javascript:;'><img src="+obj1.img+" /></a>").appendTo(li); 
				var a=$("<a href='javascript:;'>"+obj1.content+"</a>").appendTo(li);
				var strong=$("<strong>"+obj1.showprice+"</strong>").appendTo(li)
				var b=$("<b>"+obj1.markprice+"</b>").appendTo(li)	
			}
			
			
			//小列表点击跳入商品详情
			$(".floor_1_bottom").on("click","li",function(){
				var index=$(this).index();
				var obj1=arr1[index];//所点击的商品数据
				console.log(obj1.id)
				location.href="../../detail/html/mbaobao_detail.html?id="+obj1.id
			})
		
			//跳入商品列表成功
			//二楼商品小列表
			for(var i=0;i<arr2.length;i++){
				var obj2=arr2[i];
				//创建li节点，并动态添加到floor_1_bottom里；
				var li=$("<li></li>").appendTo(".floor_2_bottom");
				//创建a节点和img节点动态添加到li节点上
				$("<a href='javascript:;'><img src="+obj2.img+" /></a>").appendTo(li); 
				var a=$("<a href='javascript:;'>"+obj2.content+"</a>").appendTo(li);
				var strong=$("<strong>"+obj2.showprice+"</strong>").appendTo(li)
				var b=$("<b>"+obj2.markprice+"</b>").appendTo(li)
			}
			
			//三楼商品小列表
			for(var i=0;i<arr3.length;i++){
				var obj3=arr3[i];
				//创建li节点，并动态添加到floor_1_bottom里；
				var li=$("<li></li>").appendTo(".floor_3_bottom");
				//创建a节点和img节点动态添加到li节点上
				$("<a href='javascript:;'><img src="+obj3.img+" /></a>").appendTo(li); 
				var a=$("<a href='javascript:;'>"+obj3.content+"</a>").appendTo(li);
				var strong=$("<strong>"+obj3.showprice+"</strong>").appendTo(li)
				var b=$("<b>"+obj3.markprice+"</b>").appendTo(li)
			}
			
			//四楼商品小列表
			for(var i=0;i<arr4.length;i++){
				var obj4=arr4[i];
				//创建li节点，并动态添加到floor_1_bottom里；
				var li=$("<li></li>").appendTo(".floor_4_bottom");
				//创建a节点和img节点动态添加到li节点上
				$("<a href='javascript:;'><img src="+obj4.img+" class='img'/></a>").appendTo(li); 
				var a=$("<a href='javascript:;'>"+obj4.content+"</a>").appendTo(li);
				var strong=$("<strong>"+obj4.showprice+"</strong>").appendTo(li)
				var b=$("<b>"+obj4.markprice+"</b>").appendTo(li)
			} 
			//五楼商品小列表
			for(var i=0;i<arr5.length;i++){
				var obj5=arr5[i];
				//创建li节点，并动态添加到floor_1_bottom里；
				var li=$("<li></li>").appendTo(".floor_5_bottom");
				//创建a节点和img节点动态添加到li节点上
				$("<a href='javascript:;'><img src="+obj5.img+"  class='img' /></a>").appendTo(li); 
				var a=$("<a href='javascript:;'>"+obj5.content+"</a>").appendTo(li);
				var strong=$("<strong>"+obj5.showprice+"</strong>").appendTo(li)
				var b=$("<b>"+obj5.markprice+"</b>").appendTo(li)
			} 
			/*六楼小logo*/
			for(var i=0;i<arr6.length;i++){
				var obj6=arr6[i];
				$("<li><a href='javascript:;'><img src="+obj6.img+"/></a></li>").appendTo(".logo_list")
			}
			//限时抢购商品小列表
			for(var i=0;i<arr7.length;i++){
				var obj7=arr7[i];
				//创建li节点，并动态添加到floor_1_bottom里；
				var div=$("<div class='xsqg'></div>").appendTo(".floor_7_left");
				//创建a节点和img节点动态添加到li节点上
				$("<a href='javascript:;'><img src="+obj7.img+"  class='img' /></a>").appendTo(div); 
				var a=$("<a href='javascript:;'>"+obj7.content+"</a>").appendTo(div);
				var strong=$("<strong>"+obj7.showprice+"</strong>").appendTo(div)
				var b=$("<b>"+obj7.markprice+"</b>").appendTo(div)
				var qg=$("<span class='qg'>还剩：<em>00</em>天<em>00</em>时<em>00</em>分<em>00</em>秒</span>").appendTo(div)
				
			} 
			//tab切换bag_one
			for(var i=0;i<arr8.length;i++){
				var obj8=arr8[i];
				var li=$("<li></li>").appendTo(".bag_one");
				$("<img src="+obj8.img+"/>").appendTo(li);
				var a=$("<a href='javascript:;'>"+obj8.content+"</a>").appendTo(li);
				var strong=$("<strong>"+obj8.showprice+"</strong>").appendTo(li)
				var b=$("<b>"+obj8.markprice+"</b>").appendTo(li)
				
			}
			//tab切换bag_two
			for(var i=0;i<arr9.length;i++){
				var obj9=arr9[i];
				var li=$("<li></li>").appendTo(".bag_two");
				$("<img src="+obj9.img+"/>").appendTo(li);
				var a=$("<a href='javascript:;'>"+obj9.content+"</a>").appendTo(li);
				var strong=$("<strong>"+obj9.showprice+"</strong>").appendTo(li)
				var b=$("<b>"+obj9.markprice+"</b>").appendTo(li)
				
			}
			//tab切换bag_three
			for(var i=0;i<arr10.length;i++){
				var obj10=arr10[i];
				var li=$("<li></li>").appendTo(".bag_three");
				$("<img src="+obj10.img+"/>").appendTo(li);
				var a=$("<a href='javascript:;'>"+obj10.content+"</a>").appendTo(li);
				var strong=$("<strong>"+obj10.showprice+"</strong>").appendTo(li)
				var b=$("<b>"+obj10.markprice+"</b>").appendTo(li)
				
			}
		})
	
		
		
	})
