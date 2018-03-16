//回到顶部

$(function(){
		$(window).scroll(function(){
   var sc=$(window).scrollTop();
   var rwidth=$(window).width()
   if(sc>0){
		    $(".sctop").css({"opacity":1});
		//    $(".sctop").css("left",(rwidth-36)+"px");
		    
   }
   else{
  		 $(".sctop").css({"opacity":0});
  		
  	 }
   })
   $(".sctop").click(function(){
   	//e.preventDefault();
   var sc=$(window).scrollTop();
   $('body,html').animate({scrollTop:0},500);
   console.log(_22525255)
   })
   
   //鼠标滑过时，回到顶部侧边栏背景颜色变白
   $("#gotop li").hover(function(){
   	$(this).css({background:"white"})
   	$(this).children().eq(1).css({color:"#d41c4f"})
   	$(this).children().eq(1).find(".ewm").show()//显示二维码
   },function(){
   	$(this).css({background:"#d41c4f"})
   	$(this).children().eq(1).css({color:"white"})
   	 	$(this).children().eq(1).find(".ewm").hide()//隐藏二维码
   })
})
