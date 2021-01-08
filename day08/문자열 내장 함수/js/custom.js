$(document).ready(function(){
    
    //const txt = "Hello World";
    //const len = txt.length;
    //const result = txt.indexOf("Wo");
    //indexOf로 문자열 탐색시 찾고자 하는 단어가 원본 문자열에 없으면 -1을 return;
    
    // const result = txt.slice(6,-1); //첫번째 인수의 위치부터 끝나는 위치까지를 지정해서 문자열 자름 (음수 지원)
    // const result = txt.substr(6,2); //두번째 인수값이 자를 위치값의 길이
    // const result = txt.replace("Hello","hey"); //첫번째 단어만 바꿔준다.
    // let date = "2020:12:20";
    // date = date.split(":");
    // const el = document.querySelector('#box');
    // let classNames = el.className;
    // classNames = classNames.split(" ");
    // console.log(classNames);
    
    // let date = "2020:12:20";
    // date = date.split(":");
    // let result = '';
    // for(let i = 0; i < date.length; i++){
    //     if(i!==date.length-1){
    //         result += date[i] + '-';
    //     }else{
    //         result += date[i];
    //     }
    // }
    // console.log(result);

    // const txt1 = "Hello World";
    // const result = txt1.indexOf('world');
    // const result = txt1.search(/world/i);
    // console.log(result);

    // const txt2 = "Hello David David David";
    // const result = txt2.replace(/david/ig, "Andy");
    // console.log(result);

    const date = "2020:12:20";
    const result = date.replace(/:/g,"-");
    console.log(result);
});