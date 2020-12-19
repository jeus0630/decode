$(document).ready(function(){
    /*
        $(선택자).css();
        - 선택한 DOM의 CSS를 변경가능 .css(변경할 내용)
        - 선택한 DOM의 CSS값을 알아냄 .css("속성명")
        - 해당 메서드 변경한 css값은 일반 stylesheet로는 변경 불가

        자바스크립트 css를 변경할때 주의점
        - 스크립트는 스타일시트를 접근하지 못함
        - 실제 DOM(태그상에) 인라인스타일을 꽂아넣음

        메서드란?
        - 함수와 동일한 내용
        - 특별한 객체안에 정의되어 있는 함수 == 메서드
    */

    // px는 생략가능하기 때문에 이런식으로 실무에서 많이쓴다. 값 연산도 편하다.
    // $('.box1').css({
    //     width : 600,
    //     height : 500,
    //     borderRadius : 10
    // })

    var box1Padding = $('.box1').css('padding');
    console.log(box1Padding);

    var result = $('.box1').width();  // 보더 패딩값 제외
    var result = $('.box1').outerWidth(); // 보더 패딩값 포함
    var ht = $('.box1').outerHeight();

    $('.box1').width('100')
    console.log(result);
    console.log(ht);

    /*
        미션 1 :
        - 브라우저를 리사이즈할 때마다 현재 브라우저의 넓이값을 구해서
        - 만약 브라우저 폭이 540보다 작아지면 body의 배경색을 orange로 적용
        - 만약 브라우저 폭이 540보다 같거나 크고 1180보다 작으면 배경색을 pink로 적용
        - 1180보다 같거나 크면 배경색을 violet적용

        1. $(window)
        2. $('body')
        3. 'resize'
    */

    $(window).resize(function(){
        if(this.outerWidth < 540){
            $('body').css({
                backgroundColor : 'orange'
            })
        }else if(this.outerWidth < 1180){
            $('body').css({
                backgroundColor : 'pink'
            })
        }else{
            $('body').css({
                backgroundColor : 'violet'
            })
        }
    })
})