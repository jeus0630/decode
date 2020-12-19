$(document).ready(function(){

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
        
        const isOn = $(this).hasClass('on');
        if(isOn) return;

        if(isDone){
            const target = $(this).attr('href');
            activation(target, this);
            isDone = false;
        }

        
    })


    function activation(target, el){
        const ht = $(target).height();
        
        $boxs.fadeOut(speed);
        $(target).fadeIn(speed);

        $btns.removeClass(class_name);
        $(el).addClass(class_name);
        $tab.animate({height:ht},speed,ease,function(){
            isDone = true;
        });


    }
});