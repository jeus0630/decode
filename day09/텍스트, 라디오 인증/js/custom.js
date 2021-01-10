$(document).ready(function(){

    $('input[type=submit]').on('click',function(e){
        e.preventDefault();
        if(!isText('userid',5)) e.preventDefault();
        if(!isCheck('gender')) e.preventDefault();
        if(!isPwd("pwd1","pwd2",5)) e.preventDefault();
    })

});

//텍스트 인증 함수 정의
function isText(name, len){
    if(len == undefined) len=5;
    const txt = $(`[name=${name}]`).val();
    const msg = $(`[name=${name}]`).attr('placeholder');

    if(txt ==''){
        alert(`${msg}`);
        $(`[name=${name}]`).addClass('error');
        return false;
    }else{
        if(txt.length < len){
            alert(`최소 ${len} 글자 이상 입력하세요!`);
            $(`[name=${name}]`).addClass('error');
        }else{
            $(`[name=${name}]`).removeClass('error');
            return true;
        }
    }
}

//비밀번호 인증 함수 정의
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

//checkbox 인증 함수 정의
function isCheck(name){
    const isCheck = $(`input[name=${name}]`).is(':checked');
    console.log(isCheck);
    const msg = $(`input[name=${name}]`).parent().find('p').text();

    if(isCheck){
        $(`input[name=${name}]`).parent().find('p').removeClass('error');
        return true;
    }else{
        alert(`${msg}`);
        $(`input[name=${name}]`).parent().find('p').addClass('error');
        return false;
    }
}