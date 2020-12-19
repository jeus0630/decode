$(document).ready(function(){

    /*
        $(선택자).index() - 선택자의 순서를 반환 형제 요소들 중에서...)
        $(선택자).eq(순번) - 인수로 받은 순번에 해당하는 선택자를 탐색
    */


    //DOM Caching
    const $tab = $('#tab');
    const $btns = $tab.find('#btns li a');
    const $boxs = $tab.find('.boxs>div');
    const speed = 500;
    const ease = 'easeOutBack';
    const class_name = 'on';
    let isDone = true;

    $btns.on('click',function(e){
        e.preventDefault();
        
        const isOn = $(this).hasClass(class_name);
        if(isOn) return;

        if(isDone){
            isDone = false;
            const i = $(this).parent().index();
            activation(i);
        }

    })

    function activation(index){
        const ht = $boxs.eq(index).height();

        $btns.removeClass(class_name);
        $btns.parent().eq(index).children('a').addClass(class_name);

        $boxs.fadeOut(speed);
        $boxs.eq(index).fadeIn(speed);

        $tab.animate({height : ht},speed,ease,function(){
            isDone = true;
        });
    }
    
});