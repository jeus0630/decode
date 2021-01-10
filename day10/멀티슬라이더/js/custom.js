$(document).ready(function(){
	/*
		DOM의 위치 변경
		$(이동할 요소).appendTo(이동할 부모 타겟위치);
		--이동할 요소를 타겟위치 안쪽에서 제일 뒤로 이동시킴
		$(이동할 요소).prependTo(이동할 부모 타겟위치);
		--이동할 요소를 타겟위치 안쪽에서 제일 앞으로 이동시킴
	*/

	const $slider1 = $('#slider1');
	const $list = $slider1.find('.list');
	const $list_li = $list.find('li');
	const $prev = $('.prev');
	const $next = $('.next');
	const speed = 500;
	let isDone = true;

	init();

	$next.on('click',function(e){
		e.preventDefault();
		if(isDone){
			next(); 	
			isDone = false;
		}
	})

	$prev.on('click',function(e){
		e.preventDefault();
		if(isDone){
			prev();
			isDone = false;
		}
	})

	function init(){
		const len = $list.find('li').length;
		$list.css({width : 100 * len +"%", marginLeft: '-100%'});
		$list.children('li').css({width : 100 / len + "%"});
		$list_li.last().prependTo($list);
	}

	function next(){
		$list.stop().animate({marginLeft : '-200%'},speed,function(){
			$(this).find('li').first().appendTo($list);
			$(this).css({marginLeft : '-100%'});
			isDone = true;
		});	  
	}

	function prev(){
		$list.stop().animate({marginLeft : '0%'},speed,function(){
			$(this).find('li').last().prependTo($list);
			$(this).css({marginLeft:'-100%'});
			isDone = true;
		})
	}

})