$(document).ready(function(){	


	/*
	$(".right>div").mCustomScrollbar({
		theme:"light",
		scrollButtons:{ enable: true },		
		setLeft : "0px"
	});
	*/

	$(".left li a").on("click",function(e){
		e.preventDefault();
		
		var tg = $(this).attr("href");
		
		var ht = $(tg).height();
		$(".left li a").removeClass("on");
		$(this).addClass("on");
		
		
		$("#wrap").stop().animate({"height":ht},700,"easeInOutBack");
		
		
		$(".right>div").stop().fadeOut(1000);
		$(tg).stop().fadeIn(1000);
		//alert("test");
		
	});
		
	
	
});
