$(document).ready(function(){
    

    /*
        focus event
        focus 상호작용이 가능한 콘텐츠 요소만 포커스 이벤트 발생 가능
        (input, a, button)
        focusin : 포커스가 들어갔을 때
        focusout : 포커스가 떠났을 때
    */

    const $tab = $('#tab');
    const $btns = $tab.find('dt a');
    const $boxs = $tab.find('dd');

    $btns.on('click focusin',function(e){
        e.preventDefault();
        const isOn = $(this).hasClass('on');
        if(isOn) return;
        activate($(this));
        
    })

    function activate(self){
        const target = $(self).attr('href');
        $btns.removeClass('on');
        self.addClass('on');
        $boxs.hide();
        $(target).show();
    }

});