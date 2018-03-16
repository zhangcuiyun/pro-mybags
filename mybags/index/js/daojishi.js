$(function(){
	
	
	
	
	var d1=new Date(2018,0,16,10,0,0);
	var d2=new Date();
	var inteval=parseInt((d1-d2)/1000); 
	console.log(inteval)
	
	var timer;
	
	timer=setInterval(function(){
		inteval--;
		if(inteval<=0){
			clearInterval(timer);
			alert("活动结束")
			return;
		}
		var sec=parseInt(inteval)%60;
		var min=parseInt(inteval/60)%60;
		var hour=parseInt(inteval/(60*60))%24;
		var day=parseInt(inteval/(60*60*24));
		
		$(".qg em").eq(3).html(sec<10?"0"+sec:sec);
		$(".qg em").eq(2).html(min<10?"0"+min:min); 
		$(".qg em").eq(1).html(hour<10?"0"+hour:hour);
		$(".qg em").eq(0).html(day<100?"0"+day:day);
		
	},1000)
	
})
