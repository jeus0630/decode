$(document).ready(function(){
    
    /*
        addClass() : 클래스 추가
        removeClass() : 클래스 제거
        toggleClass() : 클래스가 있으면 제거하고 없으면 추가
        hassClass() : 클래스 유무 판단

        hide(), fadeOut(), slideUp();
        show(), fadeIn(), slideDown();
    */

    // 미션 1 - 토글 메뉴 클릭시 기존에 열려 있는게 있으면 무조건
    //          닫아주고 클릭한 메뉴와 해당 dd 패널만 활성화

    const $wrap = $('#wrap');
    const $btns = $wrap.find('dt');
    const $boxs = $wrap.find('dd');

    $btns.on('click',function(){
        
        
        const isOn = $(this).hasClass('on');

        if(isOn){
            $(this).next().slideUp();
            $(this).removeClass('on');
        }else{            
            $btns.removeClass('on');
            $boxs.slideUp();
            $(this).addClass('on');
            $(this).next().slideDown();
        }

        // $btns.removeClass('on');
        // $boxs.slideUp();

        // if(isOn){
        //     $(this).removeClass('on');
        //     $(this).next().slideUp();
        //     return;
        // }

        // $(this).addClass('on');
        // $(this).next().slideDown();
    })

});