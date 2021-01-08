$(document).ready(function(){

    /*
        크롬 = Chrome
        IE = Trident
        엣지 = Edg
        파이어폭스 = Firefox
    */

    const ver = navigator.userAgent;

    if(ver.search(/Chrome/i) != -1 && ver.search(/edg/i) == -1){
        console.log("Chrome 입니다");
        $('body').addClass('chrome');
    }

    if(ver.search(/trident/i) != -1){
        console.log("IE 입니다");
        $('body').addClass('ie');
    }

    if(ver.search(/edg/i) != -1){
        console.log("엣지 브라우저 입니다");
        $('body').addClass('edge');
    }

    if(ver.search(/firefox/i) != -1){
        console.log("파이어폭스 브라우저 입니다");
        $('body').addClass('ff');
    }

});