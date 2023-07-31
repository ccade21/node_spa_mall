
// 모듈을 호출했을 때, add 키 값에는 return이 들어감
function add(a,b){
    return a+b;
}


// 객체분해구조 할당으로도 가능
// module.exports = add;

// const add = (a,b)=>{
//     return a + b;
// }
// exports.add= add;

// 모듈을 호출했을 때, add 키 값에는 add 함수가 들어가는 방법
// 함수가 들어가 바로 값을 넣어줘도 됨
// module.exports = { add : add};



//모듈 그 자체를 바로 add 함수를 할당한다.
// 작동할 때 함수를 재 정의 해줘야 함.
// exports.add = function(a,b){
//     return a + b;
// }