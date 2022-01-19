function myFunc(param) {
  console.log(param + "run!");
}
const myFunc2 = function (param) {
  console.log(param + "run!");
};

myFunc("myFunc"); //전역으로 사용 가능
myFunc2("myFunc2"); //변수에 넣어 사용 가능

//Default Parameter 설정
function sum(a = 0, b = 2) {
  return a + b;
}
console.log(sum(4, 5));
console.log(sum(4));
console.log(sum());

//arguments 객체 활용법 예시
function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
