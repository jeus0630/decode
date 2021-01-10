$(document).ready(function(){
    
    /*
        비밀번호 조건 4가지
        1. 두개의 비번의 값이 동일
        2. 글자수가 5개 이상이고 10개미만
        3. 숫자포함
        4. 영문포함
        5. 특수문자 포함

        전송 버튼 클릭 시
        -- pwd의 placeholder값을 불러와서 경고창을 출력 후 전송 취소
        -- 위의 조건이 하나라도 부합되지 않으면 경고창 출력 후 전송취소
        -- 위의 값이 모두 부합하면 전송하고 input값을 비움

        .test();
        
        정규표현식 test("검사할문자열");
        -- 검사할 문자열의 정규표현식에 조건에 부합하면 true반환, 그렇지 않으면 false 반환
    */
    
    $('input[type=submit]').on('click',function(e){
            
        const $pwd1 = $('input[name=pwd1]');
        const $pwd2 = $('input[name=pwd2]');
        const pwd1 = $pwd1.val();
        const pwd2 = $pwd2.val();
        const i = 0;

        const num = /[0-9]/;
        const eng = /[a-zA-Z]/;
        const spc = /[~!@#$%^&*()_+-=\]\[\<\>]]/;
        //num.test(전체 문자열);
        //전체 문자열에서 num에 해당하는 단어가 있으면 true반환, 없으면 false 반환

        //비번 동일할때
        if(pwd1 === pwd2){
            
            //글자수 판단
            if(pwd1.length >= 5 && pwd1.length < 10){
                i++;
            }else{
                alert('비번은 5자리 이상 10자리 미만으로 입력하세요');
            }

            //숫자 포함 판단
            if(num.test(pwd1)){
                i++;
            }else{
                alert('비밀번호에 숫자를 포함하세요');
            }

            //문자 포함 판단
            if(eng.test(pwd1)){
                i++;
            }else{
                alert('비밀번호에 문자를 포함하세요');
            }

            //특수 문자 포함 판단
            if(spc.test(pwd1)){
                i++;
            }else{
                alert('비밀번호에 특수문자를 포함하세요');
            }

            if(i != 4){
                e.preventDefault();
                $pwd1.addClass('error');
                $pwd2.addClass('error');
            }

            $pwd1.removeClass('error');
            $pwd2.removeClass('error');
        
        //비번이 틀릴때
        }else{ 
            alert('두개의 비밀번호를 동일하게 입력해 주세요');
            $pwd1.addClass('error');
            $pwd2.addClass('error');
            e.preventDefault();
        }
    })

});