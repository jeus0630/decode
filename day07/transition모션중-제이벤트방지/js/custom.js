$(document).ready(function(){
    
    const $wrap = $('#wrap');
    const $btns = $wrap.find('.left li');
    const $boxs = $wrap.find('.right>div');
    const speed = 500;
    const $p = $boxs.find('p');
    let isDone = true;

    $btns.on('click',function(e){
        e.preventDefault();

        const i = $(this).index();

        if(isDone){
            activation(i);
            isDone = false;
        }
    })

    function activation(index){
        //나머지 모든 버튼 비활성화 한뒤, 클릭한 버튼만 활성화
        $btns.children('a').removeClass('on');
        $btns.eq(index).children('a').addClass('on');
        
        //모든 패널 숨기고 비활성화
        $boxs.fadeOut(speed);
        $boxs.removeClass('on');

        //클릭한 순번에 해당하는 패널만 활성화
        $boxs.eq(index).fadeIn(speed,function(){
            $(this).addClass('on');
            
            setTimeout(function(){

                isDone = true;
            },convertSpeed($p));
        })
    }

    /*
    문자열.split('구분점') -- 구분점을 기점으로 문자를 잘라서 배열로 반환
    parseInt() -- 문자를 정수 숫자로 변환
    parseFloat() -- 문자를 실수 숫자로 변환
    */

    function convertSpeed(el){
        let ds = el.css('transition-duration');
        ds = ds.split('s')[0];
        ds = Number(ds) * 1000; //parseFloat(ds);
        return ds;
    }

});