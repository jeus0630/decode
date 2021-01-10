$(document).ready(function(){
    
    /*
        1. 전송버튼 클릭시 isConfirm = false;
        2. isConfirm == false이면 조건문으로 e.preventDefault()를 호출해서 전송금지
        3. isConfirm == true이면 isPwd라는 함수에 리턴값을 대입해서 전송
        4. isPwd라는 함수는 비번 인증 성공시 true 반환, 반대는 false 반환
    */
    

    $('input[type=submit]').on('click',function(e){
        if(!isPwd("pwd1","pwd2",5)) e.preventDefault();
    })

    function isPwd(name1,name2,len){
        if(len == undefined) len = 5;

        const $pwd1 = $(`input[name=${name1}]`);
        const $pwd2 = $(`input[name=${name2}]`);
        const pwd1 = $pwd1.val();
        const pwd2 = $pwd2.val();

        let i = 0;
        let isConfirm = false;

        const num = /[0-9]/;
        const eng = /[a-zA-Z]/;
        const spc = /[~!@#$%^&*()_+\[\]\(\)\{\}-=]/;
        
        if(pwd1 === pwd2){
            
            
            if(pwd1.length >= len){
                i++;
            }else{
                alert('비번은 5자리 이상 10자리 미만으로 입력하세요');
            }

            
            if(num.test(pwd1)){
                i++;
            }else{
                alert('비밀번호에 숫자를 포함하세요');
            }

            
            if(eng.test(pwd1)){
                i++;
            }else{
                alert('비밀번호에 문자를 포함하세요');
            }

            
            if(spc.test(pwd1)){
                i++;
            }else{
                alert('비밀번호에 특수문자를 포함하세요');
            }

            if(i != 4){
                $pwd1.addClass('error');
                $pwd2.addClass('error');
                return isConfirm;
            }else{
                $pwd1.removeClass('error');
                $pwd2.removeClass('error');
                isConfirm = true;
                return isConfirm;
            }
        
        
        }else{ 
            alert('두개의 비밀번호를 동일하게 입력해 주세요');
            $pwd1.addClass('error');
            $pwd2.addClass('error');
            return isConfirm;
        }
    }

});