$(document).ready(function(){
   
    //DOM선택 (아이디, 클래스, 태그선택자)
    
    $("#wrap").css({"border" : "1px solid red"});
    $(".item").css({"border" : "1px solid blue"});
    $("ul li").css({"border":"1px solid green"});
   
    //이벤트 연결하기
    //이벤트문 안쪽에서의 this는 이벤트 발생한 바로 "그" 요소 선택
    $(".btns li").on("click",function(){
        console.log(this);
    });

    //버튼 클릭시 클릭한 요소의 순서 구하기
    //선택자.index() : 선택자의 순서값을 반환하는 제이쿼리 전용 내장 함수
    $('.btns li').on('click',function(){
        var i = $(this).index();
        //alert(i);
        //this.index() 이렇게 못쓴다. index()가 내장함수이기 때문에 선택자가 jquery로 되야 하기 때문에 $(this)로 해야한다.
    })

    //여러개의 요소중에 특정 요소만 선택했을때 해당 요소만 활성화
    //순간적으로 모든 요소를 선택해서 일단은 비활성화
    //이벤트가 발생한 요소만 활성화
    $(".btns li").on("click",function(){
        $(".btns li").children("a").css({"color":"black"});
        $(this).children("a").css({"color":"red"});
    })
});