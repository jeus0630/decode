$(document).ready(function(){

    /*
    $(선택자).css({});
    $(선택자).animate({속성명:속성값},속도,콜백함수);
    
    비동기 방식에서는 구문을 순서대로 입력해서 호출하더라도
    거의 동시에 호출
    --> 순서를 강제로 지정해서 이전 구문이 끝날때까지는
    다음 기능을 홀딩 시킴
    --> 동기화처리
    --> es5 : 콜백함수를 통한 동기화
    --> es6 : promise를 통한 동기화

    콜백함수 : 함수에 인수값으로 함수가 들어가는 형태

    .hide(); display:none처리 해서 숨김
    .show(); display:block처리 해서 보임
    .fadeIn(속도); default 값은 500 (0.5s)
    .fadeOut(속도);
    */

    const $intro = $('#intro');
    const $wrap = $('#wrap');
    const $top = $wrap.find('.top');
    const $right = $wrap.find('.right');
    const $bottom = $wrap.find('.bottom');
    const $left = $wrap.find('.left');
    const $content = $wrap.find('.content');
    const $close1 = $content.find('.close');
    const $wrap2 = $('#wrap2');
    const $close2 = $wrap2.find('.close');
    const $btn1 = $('.btn1');
    const $btn2 = $('.btn2');
    const speed = 1000;

    $btn1.on("click",function(e){
        e.preventDefault();
        $btn2.removeClass('on');
        $btn1.addClass('on');
        closeWrap2();
        openWrap1();
        
    })

    $close1.on('click',function(e){
        e.preventDefault();
        $btn1.removeClass('on');
        $btn2.removeClass('on');
        closeWrap1();
    })

    $btn2.on('click',function(e){
        e.preventDefault();
        $btn1.removeClass('on');
        $btn2.addClass('on');
        closeWrap1();
        openWrap2();
    })
    
    $close2.on('click',function(e){
        e.preventDefault();
        $btn1.removeClass('on');
        $btn2.removeClass('on');
        closeWrap2();
    })

    function openWrap1(){
        $intro.removeClass('on');
        $top.animate({width: '100%'},speed,function(){
            $right.animate({height: '100%'},speed,function(){
                $bottom.animate({width: '100%'},speed,function(){
                    $left.animate({height: '100%'},speed,function(){
                        $content.fadeIn(speed,function(){
                            $close1.animate({right:30, opacity:1},speed);
                        });
                    });
                });
            });
        }); 
    }

    function closeWrap1(){
        $intro.addClass('on');
        $content.fadeOut(speed/2,function(){
            $left.animate({height:'0%'},speed/2);
            $top.animate({width:'0%'},speed/2);
            $bottom.animate({width:'0%'},speed/2);
            $right.animate({height:'0%'},speed/2);
        });

        $close1.animate({right:0,opacity:0},speed/2);
        
    }

    function openWrap2(){
        $intro.removeClass('on');
        $wrap2.animate({height: 400, marginTop: -200},speed,function(){
            $close2.animate({right:30, opacity:1},speed);
        });
    }

    function closeWrap2(){
        $intro.removeClass('on');
        $wrap2.animate({height:0,marginTop:0},speed/2,function(){
            $(this).children('close').css({right:0,opacity:0});
        });
    }


})