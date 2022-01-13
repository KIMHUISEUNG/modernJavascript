// 함수 정의 방법 예
// 파라메터를 args 변수(배열)에 담아 함수 내부로 넘김
function restparams(...args) {
  console.log(args);
}
restparams(1, 2, 3, 4, 5, 6, 7, 8, 9);

//최소 파라메터 요구 /나머지 파라메터 사용 예
const rest2 = (arg1, arg2, ...args) => {
  console.log([arg1, arg2, args]);
};
rest2(1, 2, 3, 4);
rest2(1, 2);
rest2(1);

//나머지 파라메터로 합계 구하기 예
function sum(a, b, ...args) {
  let result = 0;
  if (a != undefined) {
    result = a;
  } else {
    return 0;
  }
  if (b != undefined) {
    result += b;
  }
  args.forEach(function (arg) {
    result += arg;
  });
  return result;
}
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2));
console.log(sum(1));

//나머지 파라메터로 합계 구하기 개선 예
const sum2 = (a, b, ...args) => {
  let result = 0;
  if (a != undefined) {
    result = a;
  } else {
    return 0;
  }
  if (b != undefined) {
    result += b;
  }
  result += args.length > 0 ? args.reduce((subsum, arg) => (subsum += arg)) : 0;
  return result;
};
console.log(sum2(1, 2, 3, 4));
console.log(sum2(1, 2));
console.log(sum2(1));
