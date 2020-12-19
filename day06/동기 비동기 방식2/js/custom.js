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

    $(선택자).addClass('on') : 클래스 추가
    $(선택자).removeClass('on') : 클래스 제거
    $(선택자).hasClass('on') : 해당 선택자에 인수로 넣은 클래스가 있는 지 확인
    
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
    let isDone = true;
    const class_name = 'on';

    const wrap1 = {
        open : {
            top : {width : '100%'},
            right : {height : '100%'},
            bottom : {width : '100%'},
            left : {height : '100%'},
            close : {right:30, opacity:1}
        },
        close : {
            top : {width : '0%'},
            right : {height : '0%'},
            bottom : {width : '0%'},
            left : {height : '0%'},
            close : {right : 0, opacity : 0},
        }
    }

    const wrap2 = {
        open : {
            box_open : {height:400, marginTop : -200},
            close_open : {right:30 , opacity : 1},
        },

        close : {
            box_close : {height : 0, marginTop : 0},
            close_close : {right : 0, opacity : 0},
        }
    }

    $btn1.on("click",function(e){
        e.preventDefault();

        const isOn = $(this).hasClass(class_name);
        //활성화 버튼 재이벤트 방지
        if(isOn) return;
        
        if(isDone){
            isDone = false;
            $btn2.removeClass(class_name);
            $btn1.addClass(class_name);

            closeWrap2();
            openWrap1();    
        }

    })

    $close1.on('click',function(e){
        e.preventDefault();
        $btn1.removeClass(class_name);
        $btn2.removeClass(class_name);
        closeWrap1();
    })

    $btn2.on('click',function(e){
        e.preventDefault();

        const isOn = $(this).hasClass(class_name);
        if(isOn) return;

        if(isDone){
            isDone = false;
            $btn1.removeClass(class_name);
            $btn2.addClass(class_name);
            closeWrap1();
            openWrap2();
        }
        
    })
    
    $close2.on('click',function(e){
        e.preventDefault();
        $btn1.removeClass(class_name);
        $btn2.removeClass(class_name);
        closeWrap2();
    })

    function openWrap1(){
        console.log('박스1 오픈');
        $intro.removeClass(class_name);
        $top.animate(wrap1.open.top,speed,function(){
            $right.animate(wrap1.open.right,speed,function(){
                $bottom.animate(wrap1.open.bottom,speed,function(){
                    $left.animate(wrap1.open.left,speed,function(){
                        $content.fadeIn(speed,function(){
                            $close1.animate(wrap1.open.close,speed,function(){
                                isDone = true;
                            });
                        });
                    });
                });
            });
        }); 
    }

    function closeWrap1(){
        $intro.removeClass(class_name);
        $intro.addClass(class_name);
        $content.fadeOut(speed/2,function(){
            $top.animate(wrap1.close.right,speed/2);
            $bottom.animate(wrap1.close.bottom,speed/2);
            $left.animate(wrap1.close.left,speed/2);
            $right.animate(wrap1.close.right,speed/2);
        });

        $close1.animate(wrap1.close.close,speed/2);
        
    }

    function openWrap2(){
        console.log('박스2 호출');
        $intro.removeClass(class_name);
        $wrap2.animate(wrap2.open.box_open,speed,function(){
            $close2.animate(wrap2.open.close_open,speed,function(){
                isDone = true;
            });
        });
    }

    function closeWrap2(){
        $intro.removeClass(class_name);
        $intro.addClass(class_name);
        $wrap2.animate(wrap2.close.box_close,speed/2,function(){
            $(this).children('close').css(wrap2.close.close_close);
        });
    }


})