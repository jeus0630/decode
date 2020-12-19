$(document).ready(function(){
   /*
        jQuery의 다양한 DOM탐색 내장함수
        $(선택자).eq(순번) : 해당 순번에 맞는 DOM탐색
        $(선택자).children(요소명) : 직계 자식 요소중에서 요소명에 해당하는 DOM탐색
        $(선택자).find(요소명) : 자손 요소를 모두 탐색해서 요소명에 해당하는 DOM탐색 
        $(선택자).parent() : 직계 부모 탐색
        $(선택자).siblings(요소명) : 형제요소중에 요소명에 해당하는 DOM탐색
        $(선택자).next() : 형제요소중에 바로다음에 있는 DOM탐색
        $(선택자).prev() : 형제요소중에 바로이전에 있는 DOM탐색
        $(선택자).first() : 형제요소중에 제일 처음 요소 탐색
        $(선택자).last() : 형제요소중에 제일 마지막 요소 탐색
   */

   $('.btns li').on('click',function(){
       $('.btns li a').css({'color':''});
       $(this).children('a').css({'color':'red'});
   })

   //Tab을 이용한 웹 접근성 때문에 이걸 실무에서 훨씬 많이 쓴다
   $('.btns li a').on('click',function(){
        $('.btns li a').css({'color':''});
        $(this).css({'color':'red'});
   })

   //이걸 제일 많이씀
   $('.btns li a').on('click',function(){
       $('.btns li a').css({'color':''});
       var i = $(this).parent().index();
       console.log(i);
       $('.btns li').eq(i).children('a').css({'color':'red'});
   })
});